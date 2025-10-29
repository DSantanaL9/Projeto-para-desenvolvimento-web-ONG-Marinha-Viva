export function loadContato() {
  fetch('components/contato.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('contato').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/contato.css';
      document.head.appendChild(link);

      const section = document.querySelector('.form-contato');
      section?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! 🌊');
        e.target.reset();
      });
    });
}
