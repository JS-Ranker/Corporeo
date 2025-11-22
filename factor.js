// --- Lógica del Slider Mejorada ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
let autoPlayInterval;

// Función para mostrar slide
function showSlide(index) {
    // Remover clase active de todos los slides e indicadores
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    indicators.forEach((indicator) => {
        indicator.classList.remove('active');
    });

    // Ajustar el índice si se sale de los límites
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Mostrar el slide actual
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Navegación con botones
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetAutoPlay();
});

// Navegación con indicadores
indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));
        showSlide(slideIndex);
        resetAutoPlay();
    });
});

// Auto-play del slider (cada 5 segundos)
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Navegación con teclado (flechas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
        resetAutoPlay();
    } else if (e.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
        resetAutoPlay();
    }
});

// Pausar auto-play cuando el mouse está sobre el slider
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    startAutoPlay();
});

// Inicializar slider
showSlide(currentSlide);
startAutoPlay();


// --- Lógica del Botón de Apoyo ---
const supportButton = document.getElementById('support-button');

supportButton.addEventListener('click', () => {
    // Cambiar texto del botón
    supportButton.querySelector('span').textContent = '¡Gracias por tu apoyo! 🎉';
    supportButton.disabled = true;
    
    // Crear efecto de confeti
    createConfetti();
    
    // Guardar el voto en sessionStorage
    sessionStorage.setItem('factorVote', 'true');
});

// Verificar si ya votó anteriormente
if (sessionStorage.getItem('factorVote')) {
    supportButton.querySelector('span').textContent = '¡Ya has votado! 🎉';
    supportButton.disabled = true;
}

// Función para crear efecto confeti
function createConfetti() {
    const colors = ['#00b14f', '#008a3e', '#FFD700', '#FF6B6B', '#4ECDC4', '#FF6B9D'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            
            // Estilos del confeti
            confetti.style.position = 'fixed';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.opacity = '1';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            document.body.appendChild(confetti);

            // Animación de caída
            const duration = Math.random() * 3 + 2;
            const fallDistance = window.innerHeight + 20;
            const sidewaysMovement = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) translateX(0) rotate(0deg)', 
                    opacity: 1 
                },
                { 
                    transform: `translateY(${fallDistance}px) translateX(${sidewaysMovement}px) rotate(${Math.random() * 720}deg)`, 
                    opacity: 0 
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => confetti.remove();
        }, i * 30);
    }
}


// --- Animación de Aparición al Hacer Scroll ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a todas las secciones
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});


// --- Efecto de Hover en las Tarjetas de Beneficios ---
const benefitCards = document.querySelectorAll('.benefit-card');

benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Pausar la animación bounce del icono
        const icon = card.querySelector('.icon');
        icon.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', () => {
        // Reanudar la animación bounce del icono
        const icon = card.querySelector('.icon');
        icon.style.animationPlayState = 'running';
    });
});


// --- Smooth Scroll para Enlaces Internos (opcional) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// --- Contador de Tiempo en Página (Analytics básico) ---
let timeOnPage = 0;
const pageTimer = setInterval(() => {
    timeOnPage++;
    // Cada 30 segundos, podrías enviar esta info a tu sistema de analytics
    if (timeOnPage % 30 === 0) {
        console.log(`Usuario lleva ${timeOnPage} segundos en la página`);
    }
}, 1000);

// Detener el contador cuando el usuario sale de la página
window.addEventListener('beforeunload', () => {
    clearInterval(pageTimer);
    console.log(`Tiempo total en página: ${timeOnPage} segundos`);
});