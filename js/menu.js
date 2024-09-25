// Selecionar o botão hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');
const submenuLinks = document.querySelectorAll('.has-submenu');

// Adicionar evento de clique no botão hambúrguer para abrir/fechar o menu
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Adicionar eventos de clique para o link "Serviços" (com submenu)
submenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link
        const parentLi = this.parentElement;
        parentLi.classList.toggle('show-submenu');
    });
});

// Fechar o menu ao clicar em qualquer outro link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show');
    });
});
