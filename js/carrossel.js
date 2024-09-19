const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-item').length;

// Navegar para a imagem anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
});

// Navegar para a próxima imagem
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Atualizar a posição do carrossel
function updateCarousel() {
    const imageWidth = document.querySelector('.carousel-item').clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

// Função para alternar o menu em telas pequenas
document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('show');
});

// Função para reduzir o header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});
