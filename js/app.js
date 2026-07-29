const loader = document.getElementById("loader");
const boton = document.getElementById("btnComenzar");
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const contenido = document.getElementById("contenido");
// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 1200);
    }, 2500);
});
// Botón comenzar
boton.addEventListener("click", () => {
    musica.play().catch(() => {});
    btnMusica.style.opacity = "1";
    btnMusica.style.pointerEvents = "auto";
    boton.disabled = true;
    contenido.style.display = "block";
    setTimeout(() => {
        contenido.style.opacity = "1";
        document.querySelector(".historia").scrollIntoView({
            behavior: "smooth"
        });
    },200);
});
// Botón música
btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = "🔊";
    } else {
        musica.pause();
        btnMusica.textContent = "🔇";
    }
});
// Animaciones al hacer scroll
const elementos = document.querySelectorAll(".animar");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
elementos.forEach(elemento => {
    observer.observe(elemento);
});
// =============================
// CUENTA REGRESIVA
// =============================
const fechaEvento = new Date("September 5, 2026 16:00:00").getTime();
setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;
    if (diferencia <= 0) return;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
},1000);

// =====================================================
// ESTILO REY LEÓN — ANIMACIONES EXTRA
// (no toca la lógica anterior, solo suma funciones nuevas)
// =====================================================

// Dividir el título del hero en palabras que aparecen una a una
const tituloHero = document.querySelector(".hero .overlay h1");
if (tituloHero) {
    const palabras = tituloHero.textContent.trim().split(" ");
    tituloHero.innerHTML = palabras
        .map((palabra, i) => `<span class="palabra" style="animation-delay:${0.9 + i * 0.12}s">${palabra}</span>`)
        .join(" ");
}

// Polvo dorado flotando por toda la página, estilo brisa de la sabana
const contenedorParticulas = document.createElement("div");
contenedorParticulas.className = "polvo-dorado";
document.body.appendChild(contenedorParticulas);

function crearParticula() {
    const particula = document.createElement("div");
    particula.className = "particula";
    const izquierda = Math.random() * 100;
    const duracion = 8 + Math.random() * 10;
    const desvio = (Math.random() - 0.5) * 120;
    particula.style.left = izquierda + "vw";
    particula.style.setProperty("--desvio", desvio + "px");
    particula.style.animationDuration = duracion + "s";
    contenedorParticulas.appendChild(particula);
    setTimeout(() => particula.remove(), duracion * 1000);
}

// Se crean partículas nuevas cada cierto tiempo, sin saturar la pantalla
setInterval(crearParticula, 500);
for (let i = 0; i < 8; i++) {
    setTimeout(crearParticula, i * 300);
}

// Parallax suave en el fondo del hero al hacer scroll
const heroSeccion = document.querySelector(".hero");
window.addEventListener("scroll", () => {
    if (!heroSeccion) return;
    const desplazamiento = window.scrollY;
    if (desplazamiento < window.innerHeight) {
        heroSeccion.style.backgroundPositionY = (desplazamiento * 0.35) + "px";
    }
});
