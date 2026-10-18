import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { SiteApp } from '../App';
export { renderSeoHead } from './metadata';
export { pagePaths, localizedPath, SITE_URL, getSeo } from './config';

export function renderPage(pathname: string) {
  return renderToString(<MemoryRouter initialEntries={[pathname]}><SiteApp /></MemoryRouter>);
}
