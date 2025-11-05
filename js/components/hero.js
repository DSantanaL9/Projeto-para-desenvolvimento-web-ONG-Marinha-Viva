export function loadHero() {
  fetch('components/hero.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('hero').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/hero.css';
      document.head.appendChild(link);
    });
}
