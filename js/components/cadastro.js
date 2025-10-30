export function loadCadastro() {
  fetch('components/cadastro.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('cadastro').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/cadastro.css';
      document.head.appendChild(link);

      const section = document.querySelector('.form-cadastro');
      section?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cadastro realizado com sucesso!');
        e.target.reset();
      });
    });
}
