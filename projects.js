// const popupTitle = document.querySelector('.pop-article-title');
// const popupImage = document.querySelector('.project-image');
// const technologies = Array.from(document.querySelectorAll('.techno'));
// const live = document.getElementById('live');
// const source = document.getElementById('source');
// const closeButton = document.querySelector('.pop-article-close');
const projectSection = document.getElementById('projects');
const projects = [
  {
    name: 'calculator',
    title: 'Calculator App',
    image: './assets/images/calculator.png',
    description: '',
    technologies: ['html', 'javascript', 'css', 'cli'],
    live: 'https://danushindi.github.io/calculator/',
    source: 'https://github.com/DanUshindi/calculator',
  },
  {
    name: 'ecommerce',
    title: 'E-Commerce Site',
    image: './assets/images/ecommerce.png',
    description: '',
    technologies: ['html', 'jQuery', 'javascript', 'scss'],
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
    technologies: ['javascript', 'html', 'css', 'github'],
    live: 'https://jssol.github.io/synnysideproject/',
    source: 'https://github.com/jssol/synnysideproject/',
  },
];

const showPop = (identifier) => {
  const checker = identifier.slice(0, identifier.length - 4);
  const popArticle = document.createElement('article');
  projects.forEach((project) => {
    if (project.name === checker) {
      const popHeader = document.createElement('div');
      const popArticleTitle = document.createElement('h2');
      const popCloseBtn = document.createElement('button');
      const popIllustration = document.createElement('div');
      const popDescription = document.createElement('p');
      const techstack = document.createElement('ul');
      const links = document.createElement('div');
      const liveBtn = document.createComment('a');
      const sourceBtn = document.createComment('a');

      popArticle.classList.add('pop-up', 'pop-article');
      popHeader.className = 'pop-article-head';
      popArticleTitle.className = 'pop-article-title';
      popArticleTitle.textContent = project.title;
      popCloseBtn.className = 'pop-article-close';
      popCloseBtn.innerHTML = '<span class="pop-close"></span>';
      popIllustration.className = 'project-illustration';
      popIllustration.style.backgroundImage = `url(${project.image})`;
      popDescription.className = 'project-description';
      popDescription.textContent = `Lorem Ipsum is simply dummy text 
      of the printing and typesetting 
      industry. Lorem Ipsum has been the 
      industry's standard dummy text ever 
      since the 1500s, when an unknown 
      printer took a galley of type and 
      scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy 
      text of the printing and typesetting  
      ever since the 1500s, when an unknown 
      printer took a galley of type veris lapoa todoe.`;
      techstack.className = 'techstack';
      project.technologies.forEach((tech) => {
        const li = document.createElement('li');
        li.className = 'techno';
        li.textContent = tech;
        techstack.appendChild(li);
      });
      links.className = 'project-links';
      links.innerHTML += `<a target="_blank" href='${project.live}' class="live" id="live">See Live <i class="fas fa-external-link-alt brand" aria-hidden="true"></i></a>
      <a target="_blank" href='${project.source}' class="source" id="source">See Source <i class="fab fa-github brand" aria-hidden="true"></i></a>`;

      popHeader.append(popArticleTitle, popCloseBtn);
      popArticle.append(popHeader, popIllustration, popDescription, techstack, links);
      popArticle.addEventListener('mouseup', (e) => {
        e.stopPropagation();
        document.body.classList.remove('pop-open');
        document.body.removeChild(popArticle);
      });
      popCloseBtn.addEventListener('click', () => {
        document.body.classList.remove('pop-open');
        document.body.removeChild(popArticle);
      });
    }
  });
  document.body.appendChild(popArticle);
  document.body.classList.add('pop-open');
  popArticle.scrollIntoView(true);
};

const setContent = () => {
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
    <li class="technology">${project.technologies[0]}</li>
    <li class="technology">${project.technologies[1]}</li>
    <li class="technology">${project.technologies[2]}</li>
    <li class="technology">${project.technologies[3]}</li>
  </ul>
  <button type="button" id='${project.name}-btn' class="button project-btn">See Project</button>
  </section>
  </article>`;

  document.addEventListener('click',function(e){
    if(e.target && e.target.id === `${project.name}-btn`){
      showPop(`${project.name}-btn`);
    }
  });
  projectSection.innerHTML += article;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setContent();
});
