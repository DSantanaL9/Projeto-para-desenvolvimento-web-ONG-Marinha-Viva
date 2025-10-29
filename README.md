# Marinha Viva — Preservando os Oceanos

**Marinha Viva** é uma ONG fictícia dedicada ao **resgate e preservação de animais marinhos**, desenvolvida como projeto web utilizando **HTML, CSS e JavaScript puro**, com foco em **componentização, organização e responsividade**.

---

## Sobre o Projeto

O site da **Marinha Viva** foi criado com o objetivo de simular uma aplicação institucional moderna e acessível, voltada à conscientização ambiental.  
Apresenta informações sobre os projetos da ONG, sua missão, e inclui uma interface intuitiva que incentiva o usuário a realizar doações e participar ativamente das campanhas de preservação marinha.

---

## Estrutura do Projeto

A aplicação foi construída com uma **arquitetura componentizada**, separando o conteúdo em pastas específicas para **HTML, CSS e JavaScript**, garantindo escalabilidade e fácil manutenção.

---

## Tecnologias Utilizadas

| Tecnologia | Uso Principal |
|-------------|----------------|
| **HTML5** | Estrutura semântica e componentes principais |
| **CSS3** | Estilização modular, responsividade e animações leves |
| **JavaScript (ES6+)** | Manipulação dinâmica, interação e modularização dos componentes |

---

## Responsividade

O site foi desenvolvido com **design responsivo**, adaptando-se automaticamente a diferentes tamanhos de tela:  
- **Desktop:** layout completo com navegação fixa  
- **Mobile:** menu hambúrguer e seções reorganizadas verticalmente  
- **Tablet:** versão intermediária com redimensionamento fluido  

---

## Componentes Principais

###  Header
- Fixo no topo da tela  
- Menu centralizado com navegação suave  
- Botão de **“Doar”** que abre um **popup modal** com fundo escurecido  

### Hero Section
- Imagem de fundo em **full screen** com texto centralizado  
- Mensagem principal e chamada para ação  

###  Sobre Nós
- Bloco informativo com imagem lateral e texto descritivo  
- Responsivo, alternando layout para colunas verticais no mobile  

### Projetos
- Cards com projetos em destaque da ONG  
- Cada card possui imagem, título e breve descrição  

### Modal de Doação
- Janela “popup” com fundo escurecido  
- Formulário simples simulando doação  
- Fechamento com clique fora ou botão “X”  

### Footer
- Links rápidos, redes sociais e direitos autorais  

---

## Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   [git clone https://github.com/seuusuario/marinha-viva.git](https://github.com/DSantanaL9/Projeto-para-desenvolvimento-web-ONG-Marinha-Viva/blob/main/README.md)

2. Entre na pasta do projeto:
    cd marinha-viva

3. Abra o arquivo index.html diretamente no navegador:

    - Clique duas vezes no arquivo

    - Ou, se preferir, use o Live Server do VSCode

 Conceitos Aplicados

  - Organização modular de código (componentização)

  - Manipulação do DOM via JavaScript puro

  - Reuso de estilos com CSS modular

  - Padrões semânticos em HTML5

  - Responsividade mobile-first

  - UX focada em acessibilidade visual

 Possíveis Melhorias Futuras

  - Integração real de sistema de doações com APIs de pagamento
  
  - Adição de blog e área de notícias sobre conservação marinha
  
  - Implementação de animações com Intersection Observer
  
  - Tradução multilíngue (i18n)
  
  - Uso de localStorage para salvar preferências do usuário

Créditos

Projeto desenvolvido por Diogo Santana Pinto como parte de um estudo de desenvolvimento web front-end.
Inspirado em iniciativas reais de preservação dos oceanos e da fauna marinha.

Licença

Este projeto está licenciado sob a MIT License
