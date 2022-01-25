const openButtons = document.querySelectorAll('.project-btn');
const closeButton = document.querySelector('.pop-article-close');
const projects = [
  {
    name: 'calculator',
    title: 'Calculator App',
    image: './assets/images/calculator.png',
    description: '',
    technologies: {
      one: 'html',
      two: 'css',
      three: 'javascript',
      four: 'github',
    },
    live: 'https://danushindi.github.io/calculator/',
    source: 'https://github.com/DanUshindi/calculator',
  },
  {
    name: 'ecommerce',
    title: 'E-Commerce Site',
    image: './assets/images/ecommerce.png',
    description: '',
    technologies: {
      one: 'html',
      two: 'css',
      three: 'javascript',
      four: 'scss',
    },
    live: 'https://jssol.github.io/ecommerce-page/',
    source: 'https://github.com/jssol/ecommerce-page',
  },
  {
    name: 'order',
    title: 'Order summary card',
    image: './assets/images/order.png',
    description: '',
    technologies: {
      one: 'html',
      two: 'css',
      three: 'javascript',
      four: 'github',
    },
    live: 'https://jssol.github.io/order-summary-card/',
    source: 'https://github.com/jssol/order-summary-card',
  },
  {
    name: 'stats',
    title: 'Stats preview card',
    image: './assets/images/stats.png',
    description: '',
    technologies: {
      one: 'html',
      two: 'css',
      three: 'javascript',
      four: 'github',
    },
    live: 'https://jssol.github.io/stats-preview-card',
    source: 'https://github.com/jssol/stats-preview-card',
  },
];

function getTop(elem) {
  const box = elem.getBoundingClientRect();
  const top = box.top + window.pageYOffset;
  console.log(top);
}

function setContent(elem) {
  console.log(elem);
}

openButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    getTop(event.target.parentElement);
    document.body.classList.add('pop-open');
  });
});

closeButton.addEventListener('click', () => document.body.classList.remove('pop-open'));
document.querySelector('.pop-article').addEventListener('mouseup', (event) => {
  document.body.classList.remove('pop-open');
  event.stopPropagation();
});
