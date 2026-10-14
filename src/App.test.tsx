import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ThemeToggle from './components/ThemeToggle';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-bs-theme');
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: jest.fn().mockReturnValue({ matches: false }),
  });
});

afterEach(() => jest.restoreAllMocks());

const renderNavbar = () => render(<ThemeToggle />);

test('switches both themes and restores the saved choice on a new visit', () => {
  const firstVisit = renderNavbar();
  fireEvent.click(screen.getByRole('button', { name: 'Gece görünümüne geç' }));
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  expect(screen.getByRole('button', { name: 'Gündüz görünümüne geç' })).toHaveAttribute('aria-pressed', 'true');

  firstVisit.unmount();
  renderNavbar();
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  fireEvent.click(screen.getByRole('button', { name: 'Gündüz görünümüne geç' }));
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'light');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
});

test('uses the system preference until the visitor chooses a theme', () => {
  (window.matchMedia as jest.Mock).mockReturnValue({ matches: true });
  renderNavbar();
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  expect(localStorage.getItem('portfolio-theme')).toBeNull();
});

test('a saved choice takes priority over the system preference', () => {
  (window.matchMedia as jest.Mock).mockReturnValue({ matches: true });
  localStorage.setItem('portfolio-theme', 'light');
  renderNavbar();
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'light');
});

test('theme switching still works when storage is blocked', () => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  renderNavbar();
  fireEvent.click(screen.getByRole('button', { name: 'Gece görünümüne geç' }));
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
});
