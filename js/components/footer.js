export function loadFooter() {
  fetch('components/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles/components/footer.css';
      document.head.appendChild(link);
    });
}
