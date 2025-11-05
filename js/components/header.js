export function loadHeader() {
  return fetch('components/header.html')
    .then(res => res.text())
    .then(html => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', html);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/header.css';
      document.head.appendChild(link);

      const hamburguer = document.getElementById('hamburguer');
      const nav = document.getElementById('nav-menu');

      hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        nav.classList.toggle('active');
      });

      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburguer.classList.remove('active');
          nav.classList.remove('active');
        });
      });
    });
}
