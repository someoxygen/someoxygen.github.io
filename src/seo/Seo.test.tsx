import React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { hydrateRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App, { SiteApp } from '../App';
import { renderSeoHead, structuredData } from './metadata';
import { getSeo } from './config';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  localStorage.clear();
  document.head.querySelectorAll('[data-seo]').forEach(node => node.remove());
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: jest.fn().mockReturnValue({ matches: false }) });
});

test('updates metadata on navigation and keeps query parameters out of canonical URLs', () => {
  window.history.replaceState({}, '', '/en/projects/?utm_source=test#content');
  render(<App />);
  expect(document.title).toBe('Software Projects | Mustafa Yücel');
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://mustafayucel.com/en/projects/');
  expect(document.querySelectorAll('link[hreflang]')).toHaveLength(3);
  expect(screen.getByRole('heading', { name: 'My projects' })).toBeInTheDocument();
  fireEvent.click(within(screen.getByRole('navigation')).getByText('Resume'));
  expect(window.location.pathname).toBe('/en/resume/');
  expect(document.title).toBe('Resume & Engineering Experience | Mustafa Yücel');
  expect(document.querySelectorAll('title')).toHaveLength(1);
  expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(1);
});

test('the explicit URL language takes precedence over local preferences', () => {
  localStorage.setItem('portfolio-language', 'en');
  const visit = render(<App />);
  expect(document.documentElement.lang).toBe('tr');
  visit.unmount();
  window.history.replaceState({}, '', '/en/resume/');
  localStorage.setItem('portfolio-language', 'tr');
  render(<App />);
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByRole('heading', { name: 'Work experience' })).toBeInTheDocument();
});

test('unknown routes are noindex and can navigate back to indexable content', () => {
  window.history.replaceState({}, '', '/missing-page/');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Sayfa bulunamadı' })).toBeInTheDocument();
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  expect(document.querySelector('link[rel="canonical"]')).toBeNull();
  fireEvent.click(within(screen.getByRole('main')).getByText('Hakkımda'));
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'index, follow, max-image-preview:large');
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://mustafayucel.com/');
});

test('normalizes slash variants and provides localized project schema', () => {
  expect(getSeo('/en/projects').canonical).toBe(getSeo('/en/projects/').canonical);
  expect(getSeo('/en').canonical).toBe('https://mustafayucel.com/en/');
  const data = structuredData('/en/projects/')!;
  const list = data['@graph'].find((node: any) => node['@type'] === 'ItemList') as any;
  expect(list.itemListElement).toHaveLength(13);
  expect(list.itemListElement[0].item.description).toContain('store');
  const template = document.createElement('template');
  template.innerHTML = renderSeoHead('/en/projects/');
  expect(template.content.querySelector('link[hreflang="tr"]')?.getAttribute('href')).toBe('https://mustafayucel.com/projects/');
});

test.each(['/', '/projects/', '/resume/', '/en/', '/en/projects/', '/en/resume/'])(
  'hydrates prerendered content at %s without mismatches', async pathname => {
    const { renderToString } = require('react-dom/server.node');
    window.history.replaceState({}, '', pathname);
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = renderToString(<MemoryRouter initialEntries={[pathname]}><SiteApp /></MemoryRouter>);
    const onRecoverableError = jest.fn();
    let root: ReturnType<typeof hydrateRoot>;
    await act(async () => { root = hydrateRoot(container, <App />, { onRecoverableError }); });
    expect(onRecoverableError).not.toHaveBeenCalled();
    expect(container.querySelectorAll('h1')).toHaveLength(1);
    await act(async () => root.unmount());
    container.remove();
  },
);
