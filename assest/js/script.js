window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambiar el valor para ajustar cuándo debe ocurrir el cambio de color
        header.style.backgroundColor = 'black'; // Cambiar el color de fondo al hacer scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Volver al color inicial cuando el scroll sea menor
    }
});

const shakingImage = document.getElementById("shaking-image");

shakingImage.addEventListener("mousemove", () => {
  shakingImage.classList.add("shake-animation");
});

shakingImage.addEventListener("mouseleave", () => {
  shakingImage.classList.remove("shake-animation");
});