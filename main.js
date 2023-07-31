const nav = document.querySelector('header nav');

function toggleNavVisibility() {
  nav.classList.toggle('visible');
}

console.log(nav);

const marginValue = 270;
let currentSlide = 0;
const categoriesContainer = document.querySelector('.categories-grid');


function doSlide(direction) {
  currentSlide += direction;
  if (currentSlide > 4) {
    currentSlide = 0;
  }
  const newFirstCard = document.querySelector('.category-card:first-child');
  newFirstCard.style.marginLeft = '-270px';
  setTimeout(() => {
    categoriesContainer.appendChild(newFirstCard);
    newFirstCard.style.marginLeft = '0';
  }, 400);
}

const categories = [
  {
    id: 1,
    name: 'Art',
    background: './assets/categories/category1.png',
    icon: './assets/icons/PaintBrush.svg',
  },
  {
    id: 2,
    name: 'Collectibles',
    background: './assets/categories/category2.png',
    icon: './assets/icons/Swatches.svg',
  },
  {
    id: 3,
    name: 'Music',
    background: './assets/categories/category3.png',
    icon: './assets/icons/MusicNotes.svg',
  },
  {
    id: 4,
    name: 'Photography',
    background: './assets/categories/category4.png',
    icon: './assets/icons/Camera.svg',
  },
  {
    id: 5,
    name: 'Video',
    background: './assets/categories/category5.png',
    icon: './assets/icons/VideoCamera.svg',
  },
  {
    id: 6,
    name: 'Utility',
    background: './assets/categories/category6.png',
    icon: './assets/icons/MagicWand.svg',
  },
  {
    id: 7,
    name: 'Sport',
    background: './assets/categories/category7.png',
    icon: './assets/icons/Basketball.svg',
  },
  {
    id: 8,
    name: 'Virtual Worlds',
    background: './assets/categories/category8.png',
    icon: './assets/icons/Planet.svg',
  },
];

function renderCategories() {
  const cardsMarkup = categories.map(item => (`
    <div class="category-card">
      <div class="category-card-top">
        <img src="${item.background}">
        <div class="icon-wrapper">
          <img src="${item.icon}">
        </div>
      </div>
      <div class="category-card-bottom">${item.name}</div>
    </div>
  `));

  for (const item of cardsMarkup) {
    const newCategory = document.createElement('div');
    categoriesContainer.appendChild(newCategory);
    newCategory.outerHTML = item;
  }
}

renderCategories();

const payload = [];

fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
  method: 'POST',
  body: JSON.stringify(payload),
})
  .then(response => response.json())
  .then(data => console.log(data));