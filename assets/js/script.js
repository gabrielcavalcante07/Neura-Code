const myObserver = new IntersectionObserver ((entries) => {
	entries.forEach( (porta) => {
		if(porta.isIntersecting){
			porta.target.classList.add('visivel');
		} else {
			porta.target.classList.remove('visivel');
		}
	})
})

const elements = document.querySelectorAll('.invisivel');
elements.forEach((element) => myObserver.observe(element));

/*vamo ve*/

let contador = 1;

setInterval( function(){

    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if(contador > 3){
        contador = 1;
    }
}, 3000);


/* menu aborg */

const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav li a"); 

function toggleMenu() {
  menuBar.classList.toggle("change");
  nav.style.display = nav.style.display === "block" ? "none" : "block"; 
}

function closeMenu() {
  menuBar.classList.remove("change");
  nav.style.display = "none";
}

menuBar.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});


/*Card*/
const cards = document.querySelector('.cards');
const items = document.querySelectorAll('.cards .card-comum, .cards .secao-popular'); 
let currentIndex = 0; 
let autoSlideInterval; 

function updateCarousel() {
  items.forEach((item, index) => {
    // Define a escala e opacidade com base na posição
    if (index === currentIndex) {
      item.style.transform = 'scale(1) rotate(0deg)';
      item.style.opacity = '1';
    } else {
      item.style.transform = 'scale(0.8) rotate(0deg)';
      item.style.opacity = '0.6';
    }
  });
}

// Função para passar para o próximo card
function nextCard() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

// Função para iniciar o auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextCard, 4000);
}

// Função para parar o auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval); 
}

// Adiciona eventos de hover aos cards
items.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    stopAutoSlide(); 
    currentIndex = index; 
    updateCarousel(); 
  });

  item.addEventListener('mouseleave', () => {
    startAutoSlide(); 
  });
});

// Inicia o carrossel ao carregar a página
updateCarousel();
startAutoSlide();


/*botão*/

// Referência ao botão
const backToTopButton = document.getElementById("backToTop");

// Controla a exibição do botão
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// Volta ao topo ao clicar no botão
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
