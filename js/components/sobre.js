export function loadSobre() {
  fetch('components/sobre.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('sobre').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/sobre.css';
      document.head.appendChild(link);
    });
}
