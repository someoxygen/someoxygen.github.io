import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, '', '/');
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: jest.fn().mockReturnValue({ matches: false }),
  });
});

afterEach(() => jest.restoreAllMocks());

test('switches all pages, retains the project filter and restores the saved language', () => {
  const visit = render(<App />);
  expect(document.documentElement.lang).toBe('tr');
  expect(screen.getByText('Merhaba, ben Mustafa Yücel.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /^TR / }));
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByText('Hi, I’m Mustafa Yücel.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /^EN / })).toHaveTextContent('EN');
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
  expect(localStorage.getItem('portfolio-language')).toBe('en');

  fireEvent.click(within(screen.getByRole('navigation')).getByText('My projects'));
  fireEvent.click(screen.getByRole('button', { name: 'Backend' }));
  expect(screen.getByText('Phone Book App')).toBeInTheDocument();
  expect(screen.queryByText('Chat App')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /^EN / }));
  expect(screen.getByRole('button', { name: 'Tümü' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Backend' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText('Telefon rehberi uygulaması. C# ile geliştirilmiş kullanıcı dostu rehber yönetim sistemi.')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /^TR / }));
  fireEvent.click(within(screen.getByRole('navigation')).getByText('Resume'));
  expect(screen.getByRole('heading', { name: 'Work experience' })).toBeInTheDocument();
  expect(screen.getByText('BSc in Computer Engineering')).toBeInTheDocument();
  expect(screen.getByText('Native')).toBeInTheDocument();
  expect(screen.getByText(/Mustafa Yücel\. All rights reserved\./)).toBeInTheDocument();
  visit.unmount();
  render(<App />);
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByRole('heading', { name: 'Work experience' })).toBeInTheDocument();
});

test('uses Turkish for invalid preferences and supports switching when storage is blocked', () => {
  localStorage.setItem('portfolio-language', 'unknown');
  const visit = render(<App />);
  expect(document.documentElement.lang).toBe('tr');
  visit.unmount();
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /^TR / }));
  expect(screen.getByText('Hi, I’m Mustafa Yücel.')).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
});
