export function loadProjetos() {
  fetch('components/projetos.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('projetos').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/projetos.css';
      document.head.appendChild(link);
    });
}
