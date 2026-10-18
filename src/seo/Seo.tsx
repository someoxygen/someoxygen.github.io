import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo } from './config';
import { renderSeoHead } from './metadata';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = getSeo(pathname).language;
    document.head.querySelectorAll('[data-seo]').forEach(element => element.remove());
    // Remove the development template fallback before adding page metadata.
    document.head.querySelectorAll('title, meta[name="description"]').forEach(element => element.remove());
    document.head.insertAdjacentHTML('beforeend', renderSeoHead(pathname));
  }, [pathname]);
  return null;
}
