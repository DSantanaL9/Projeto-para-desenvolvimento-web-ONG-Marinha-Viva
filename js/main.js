import { loadHeader } from './components/header.js';
import { loadHero } from './components/hero.js';
import { loadSobre } from './components/sobre.js';
import { loadProjetos } from './components/projetos.js';
import { loadCadastro } from './components/cadastro.js';
import { loadFooter } from './components/footer.js';
import { loadDoar } from './components/doar.js';
import { initScrollReveal } from './utils/scroll-reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    loadHeader(),
    loadHero(),
    loadSobre(),
    loadProjetos(),
    loadCadastro(),
    loadFooter()
  ]).then(() => {
    loadDoar();

    setTimeout(() => initScrollReveal(), 300);
  });
});
