// EFECTO ESCRITURA
const text = "> Estudiante de Ingeniería de Computadores\r\n";
let i = 0;
const speed = 40;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;


// ANIMACIÓN SCROLL
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});
