const popupTitle = document.querySelector('.pop-article-title');
const popupImage = document.querySelector('.project-image');
const technologies = Array.from(document.querySelectorAll('.techno'));
const live = document.getElementById('live');
const source = document.getElementById('source');
const openButtons = document.querySelectorAll('.project-btn');
const closeButton = document.querySelector('.pop-article-close');
const projects = [
  {
    name: 'calculator',
    title: 'Calculator App',
    image: './assets/images/calculator.png',
    description: '',
    technologies: ['html', 'css', 'javascript', 'cli'],
    live: 'https://danushindi.github.io/calculator/',
    source: 'https://github.com/DanUshindi/calculator',
  },
  {
    name: 'ecommerce',
    title: 'E-Commerce Site',
    image: './assets/images/ecommerce.png',
    description: '',
    technologies: ['html', 'css', 'javascript', 'scss'],
    live: 'https://jssol.github.io/ecommerce-page/',
    source: 'https://github.com/jssol/ecommerce-page',
  },
  {
    name: 'order',
    title: 'Order summary card',
    image: './assets/images/order.png',
    description: '',
    technologies: ['html', 'css', 'javascript', 'github'],
    live: 'https://jssol.github.io/order-summary-card/',
    source: 'https://github.com/jssol/order-summary-card/',
  },
  {
    name: 'sunny',
    title: 'Sunny side agency',
    image: './assets/images/sunny.png',
    description: '',
    technologies: ['html', 'css', 'javascript', 'github'],
    live: 'https://jssol.github.io/synnysideproject/',
    source: 'https://github.com/jssol/synnysideproject/',
  },
];

function getTop(elem) {
  const box = elem.getBoundingClientRect();
  const top = box.top + window.pageYOffset;
  return top;
}

function setContent(article, projects) {
  projects.forEach((project) => {
    if (project.name === article.id) {
      popupTitle.innerText = project.title;
      popupImage.style.backgroundImage = `url(${project.image})`;
      live.href = project.live;
      source.href = project.source;
      technologies.forEach((tech) => {
        tech.innerText = project.technologies[technologies.indexOf(tech)];
      });
    }
  });
}

let article = '';
let position = 0;

openButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    article = event.target.parentElement.parentElement;
    position = getTop(article);
    setContent(article, projects);
    console.log(document.body.style.height);
    document.body.classList.add('pop-open');
  });
});

closeButton.addEventListener('click', () => {
  window.scrollBy(0, position);
  document.body.classList.remove('pop-open');
});
document.querySelector('.pop-article').addEventListener('mouseup', (event) => {
  window.scrollBy(0, position);
  document.body.classList.remove('pop-open');
  event.stopPropagation();
});
