let currentPost;
const projectSection = document.getElementById('projects');
const projects = [
  {
    name: 'calculator',
    title: 'Calculator App',
    image: './assets/images/calculator.png',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['html', 'javascript', 'css', 'cli'],
    live: 'https://danushindi.github.io/calculator/',
    source: 'https://github.com/DanUshindi/calculator',
  },
  {
    name: 'todo',
    title: 'Todo-list app',
    image: './assets/images/todo.png',
    description: `A simple todo list app that helps you keep track of the most important 
    tasks of your busy day. Built with Javascript, Sass, Webpack`,
    technologies: ['webpack', 'git', 'javascript', 'scss'],
    live: 'https://jssol.github.io/todo-list/',
    source: 'https://github.com/jssol/todo-list/',
  },
  {
    name: 'guru',
    title: 'Film Guru',
    image: './assets/images/guru.png',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['html', 'css', 'javascript', 'github'],
    live: 'https://jssol.github.io/synnysideproject/',
    source: 'https://github.com/jssol/synnysideproject/',
  },
  {
    name: 'atr',
    title: 'Africa Tech Report',
    image: './assets/images/atr.png',
    description: 'This is the first capstone project from microverse. I chose the theme of an annual tech magazine about the evolution of technology in Africa and all of its impact on people\'s lives.',
    technologies: ['javascript', 'html', 'css3', 'git'],
    live: 'https://github.com/jssol/africa-tech-report/',
    source: 'https://jssol.github.io/africa-tech-report/',
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
      const popIllustration = document.createElement('section');
      const popDescription = document.createElement('p');
      const techstack = document.createElement('ul');
      const links = document.createElement('div');

      popArticle.classList.add('pop-up', 'pop-article');
      popHeader.className = 'pop-article-head';
      popArticleTitle.className = 'pop-article-title';
      popArticleTitle.textContent = project.title;
      popCloseBtn.className = 'pop-article-close';
      popCloseBtn.innerHTML = '<span class="pop-close"></span>';
      popDescription.className = 'project-description';
      popDescription.textContent = project.description;
      popIllustration.className = 'image-place';
      popIllustration.innerHTML = `<img class="project-image" src=${project.image} alt=${project.title}/>`;
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
        currentPost.scrollIntoView();
      });
      popCloseBtn.addEventListener('click', () => {
        document.body.classList.remove('pop-open');
        document.body.removeChild(popArticle);
        currentPost.scrollIntoView();
      });
    }
  });
  document.body.appendChild(popArticle);
  document.body.classList.add('pop-open');
  document.body.scrollIntoView(true);
};

const setContent = () => {
  projects.forEach((project) => {
    const article = `<article class="project-card" id=${project.name}>
    <section class="image-placeholder">
      <img class="project-image" src=${project.image} alt=${project.title}/>
    </section>
    <section class="about-project">
      <h3 class="project-card-title">${project.title}</h3>
      <p class="project-card-description">${project.description}</p>
      <ul class="technologies">
        <li class="technology">${project.technologies[0]}</li>
        <li class="technology">${project.technologies[1]}</li>
        <li class="technology">${project.technologies[2]}</li>
        <li class="technology">${project.technologies[3]}</li>
      </ul>
      <button type="button" id='${project.name}-btn' class="button project-btn">See Project</button>
    </section>
  </article>`;

    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === `${project.name}-btn`) {
        currentPost = e.target.parentElement.parentElement;
        showPop(`${project.name}-btn`);
      }
    });
    projectSection.innerHTML += article;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setContent();
});
