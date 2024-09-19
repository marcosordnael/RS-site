// Selecionar o botão hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav');

// Adicionar um evento de clique no botão hambúrguer
hamburger.addEventListener('click', function() {
    // Alternar a classe 'show' para exibir ou esconder o menu
    navMenu.classList.toggle('show');
});
