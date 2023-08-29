// Header animations
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
        header.style.backgroundColor = 'black'; 
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// header input search
 const iconSearch = document.getElementById("icon2_header");
 const searchInput = document.getElementById("search");
 let isInputConfirm = false;

 iconSearch.addEventListener('click', controlInputSearch);

 function controlInputSearch(){
  if(isInputConfirm){
    cerrarSearch();
  }else{
    mostrarSearch();
  }
 }
 function mostrarSearch(){
  searchInput.style.display =" block";
  isInputConfirm = true;
 }

 function cerrarSearch(){
  searchInput.style.display = "none";
  isInputConfirm = false;
 }
 
// en esta parte se hace la animacion, de los beneficios

const shakingImage = document.getElementById("shaking-image");

shakingImage.addEventListener("mousemove", () => {
  shakingImage.classList.add("shake-animation");
});

shakingImage.addEventListener("mouseleave", () => {
  shakingImage.classList.remove("shake-animation");
});

//en este parte se hace el efecto de cambio, para el catalogo en el index
const hombreLi = document.getElementById('hombre_prendas');
const mujerLi = document.getElementById('mujer_prendas');
const kidLi = document.getElementById('kid_prendas');
const contenidoHombre = document.getElementById('contenido_hombre');
const contenidoMujer = document.getElementById('contenido_mujer');
const contenidoKid = document.getElementById('contenido_kid');

hombreLi.addEventListener('click', mostrarContenidoHombre);
mujerLi.addEventListener('click', mostrarContenidoMujer);
kidLi.addEventListener('click', mostrarContenidoKid);

function mostrarContenidoHombre() {
    contenidoHombre.style.display = 'block';
    contenidoMujer.style.display = 'none';
    contenidoKid.style.display = 'none';
}

function mostrarContenidoMujer() {
    contenidoHombre.style.display = 'none';
    contenidoMujer.style.display = 'block';
    contenidoKid.style.display = 'none';
}

function mostrarContenidoKid() {
    contenidoHombre.style.display = 'none';
    contenidoMujer.style.display = 'none';
    contenidoKid.style.display = 'block';
}

mostrarContenidoHombre();
//termina
$('.owl-carousel').owlCarousel({
    loop: true,
    center:true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  //efecto Modal
  const open_button = document.getElementById('open_modal_Button');
  const close_button = document.getElementById('close');
  const modal = document.getElementById('Modal');
  let status_model = true;

      open_button.addEventListener('click', ControlStatusModal); 

      close_button.addEventListener('click',functionCloseModal)

      function functionOpenModal(){
        modal.style.display = 'block';
        status_model = false;
      }
      function functionCloseModal(){
          modal.style.display = 'none';
          status_model = true;
      }

      function ControlStatusModal(){
        if(status_model === true){
          functionOpenModal();
        }else{
          functionCloseModal();
        }
      }

 