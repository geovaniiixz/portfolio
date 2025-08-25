/*
    COMO FUNCIONA ESTE SCRIPT:
    1.  MENU HAMBÚRGUER (MOBILE): 
        - Ele adiciona um evento de clique ao ícone do menu (hambúrguer).
        - Quando clicado, ele adiciona ou remove a classe "show-menu" da lista de navegação.
        - O CSS cuida de mostrar ou esconder o menu com base na presença dessa classe.

    2.  DESTAQUE DO LINK ATIVO (SCROLLSPY):
        - Observa a rolagem da página.
        - Verifica qual seção está visível na tela.
        - Adiciona a classe "active-link" ao link de navegação correspondente à seção visível.
        - Isso cria o efeito de destaque no item do menu conforme você rola a página.

    3.  ANO ATUAL NO RODAPÉ:
        - Pega o elemento com o id "current-year".
        - Insere o ano atual dinamicamente, assim você não precisa atualizar o ano manualmente.
*/

/*=============== MOSTRAR/ESCONDER MENU MOBILE ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

// Função para mostrar o menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Função para fechar o menu ao clicar em um link
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== SCROLLSPY (DESTAQUE NO LINK ATIVO) ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // 58px de ajuste para o header
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink.classList.add('active-link');
        } else {
            correspondingLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== ATUALIZAR ANO NO RODAPÉ ===============*/
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/*=============== ANIMAÇÃO DE SCROLL (REVEAL) ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true // Descomente para re-animar a cada scroll
});

sr.reveal(`.home__container, .sobre__image, .contato__container`);
sr.reveal(`.sobre__data, .footer__container`, {delay: 500});
sr.reveal(`.competencia-card, .projeto-card`, {interval: 200});
sr.reveal(`.timeline`, {origin: 'left'});

// Adicionar o script do ScrollReveal no HTML, ou ele não funcionará.
// Como não posso editar o HTML agora, vou adicionar uma nota.
// Nota: Para a animação de scroll funcionar, adicione o seguinte script no final do seu <body> no index.html:
// <script src="https://unpkg.com/scrollreveal"></script>
