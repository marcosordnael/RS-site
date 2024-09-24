// Selecionar o botão hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav');
const submenuLinks = document.querySelectorAll('.has-submenu');

// Adicionar um evento de clique no botão hambúrguer para abrir o menu
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Adicionar eventos de clique para cada link com submenu
submenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar que o link seja clicado imediatamente
        const parentLi = this.parentElement;

        // Alternar a classe 'show-submenu' para abrir ou fechar o submenu
        parentLi.classList.toggle('show-submenu');
    });
});

// Fechar o menu quando clicar em um link fora do submenu
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show'); // Fechar o menu
    });
});
