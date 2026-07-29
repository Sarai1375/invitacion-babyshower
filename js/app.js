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