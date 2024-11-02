AOS.init({
    once: false 
}
);

/*Hamburger*/
document.getElementById('hamburger').onclick = function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

/*Script para insertar html*/
document.addEventListener('DOMContentLoaded', function() {
    function checkWindowSize() {
        var navbar = document.getElementById("navbar");
        var contactInfo = document.querySelector(".contactInfo");

        if (window.innerWidth > 768) {
            if (!contactInfo) {
                var newContactInfo = document.createElement('div');
                newContactInfo.classList.add('contactInfo');
                newContactInfo.innerHTML = `
                    <p>Siguenos en:</p>
                    <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <p>Escribanos:</p>
                    <a href="https://www.tiktok.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                    <p>Converse con nosotros:</p>
                    <a href="https://www.tiktok.com" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                `;
                navbar.insertBefore(newContactInfo, navbar.firstChild);
            }
        } else {
            if (contactInfo) {
                contactInfo.parentNode.removeChild(contactInfo);
            }
        }
    }

    // Ejecutar al cargar la página
    checkWindowSize();
    
    // Ejecutar al redimensionar la ventana
    window.addEventListener('resize', checkWindowSize);
});

/*Scrol contact info y navbar*/
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var contactInfo = document.querySelector(".contactInfo");
    var mainNav = document.querySelector(".mainNav");
    if (window.scrollY > contactInfo.offsetHeight) {
        contactInfo.style.opacity = "0";
        contactInfo.style.height = "0";
        mainNav.style.top = "0";
    } else {
        contactInfo.style.opacity = "1";
        contactInfo.style.height = "5vh";
        mainNav.style.top = "5vh";
    }
};

/*Script Carrousel*/
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});

// Opcional: Autoplay
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}, 5000); // Cambiar de slide cada 5 segundos

