// Array ampliado para incluir las nuevas disciplinas
const words = [
    "Desarrolladores Web", 
    "Diseñadores UI/UX", 
    "Ingenieros de IA", 
    "Especialistas Cloud"
];

const typewriterElement = document.getElementById('typewriter');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Velocidades ajustadas para que se vea más fluido y profesional
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2500; // Pausa antes de borrar
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400; // Pausa antes de escribir la siguiente palabra
    }

    setTimeout(typeEffect, typingSpeed);
}

// Iniciar el efecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 500);
});
