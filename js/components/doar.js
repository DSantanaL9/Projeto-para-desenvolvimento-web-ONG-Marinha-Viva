export function loadDoar() {
  return fetch('components/doar.html')
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/doar.css';
      document.head.appendChild(link);

      const modal = document.getElementById('modal-doar');
      const btnDoar = document.querySelector('.btn-doar');
      const btnClose = document.getElementById('close-modal');

      btnDoar.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });

      btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
          modal.classList.remove('active');
        }
      });

      const form = modal.querySelector('.form-doar');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pela sua doação 💙');
        modal.classList.remove('active');
        form.reset();
      });
    });
}
