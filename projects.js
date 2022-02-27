// const popupTitle = document.querySelector('.pop-article-title');
// const popupImage = document.querySelector('.project-image');
// const technologies = Array.from(document.querySelectorAll('.techno'));
// const live = document.getElementById('live');
// const source = document.getElementById('source');
// const openButtons = document.querySelectorAll('.project-btn');
// const closeButton = document.querySelector('.pop-article-close');
const projectSection = document.getElementById('projects');
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

function setContent() {
  projects.forEach((project) => {
  const article = `<article class="project-card" id=${project.name}>
  <section class="image-placeholder">
  <img class="project-image" src=${project.image} alt=${project.title}/>
  </section>
  <section class="about-project">
  <h3 class="project-card-title">${project.title}</h3>
  <p class="project-card-description">
    A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
  </p>
  <ul class="technologies">
    <li class="technology">css</li>
    <li class="technology">html</li>
    <li class="technology">bootstrap</li>
    <li class="technology">ruby</li>
  </ul>
  <button type="button" class="button project-btn">See Project</button>
  </section>
  </article>`;

  projectSection.innerHTML += article;
  });
}

// closeButton.addEventListener('click', () => {
//   document.body.classList.remove('pop-open');
// });
// document.querySelector('.pop-article').addEventListener('mouseup', (event) => {
//   document.body.classList.remove('pop-open');
//   event.stopPropagation();
// });

document.addEventListener('DOMContentLoaded', () => {
  setContent();
});
