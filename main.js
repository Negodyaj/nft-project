const nav = document.querySelector('header nav');

function toggleNavVisibility() {
  nav.classList.toggle('visible');
}

console.log(nav);

const marginValue = 270;
let currentSlide = 0;
const container = document.querySelector('.categories-grid');


function doSlide(direction) {
  currentSlide += direction;
  if (currentSlide > 4) {
    currentSlide = 0;
  } 
  const newFirstCard = document.querySelector('.category-card:first-child');
  newFirstCard.style.marginLeft = '-270px';
  setTimeout(() => {
    container.appendChild(newFirstCard);
    newFirstCard.style.marginLeft = '0';
  }, 400);
}