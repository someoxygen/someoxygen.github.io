export type Theme = 'light' | 'dark';

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // The theme remains usable when browser storage is unavailable.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-bs-theme', theme);
  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"][data-icon-name]').forEach((icon) => {
    const name = icon.dataset.iconName!;
    const suffix = theme === 'dark' ? '-dark' : '';
    const filename = name.replace(/(\.[^.]+)$/, `${suffix}$1`);
    icon.href = `${process.env.PUBLIC_URL}/${filename}?v=my-5`;
  });
}

export function saveTheme(theme: Theme): void {
  try {
    window.localStorage.setItem('portfolio-theme', theme);
  } catch {
    // Keep the selection for this visit even if it cannot be saved.
  }
}
