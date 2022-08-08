let currentPost;
const projectSection = document.getElementById('projects');
const projects = [
  {
    name: "culturescape",
    title: "Culturescape",
    image: "./assets/images/home.png",
    description: `Here you can let go of your imagination and discover amazing facts about countries around the world. From legal facts to cultural facts, here you will find what you need to impress your friends and family.`,
    technologies: ["react", "redux", "sass", "tailwind"],
    live: "https://culturescape.netlify.app/",
    source: "https://github.com/jssol/metrics-webapp",
  },
  {
    name: "space",
    title: "Space traveller's Hub",
    image: "./assets/images/rockets.png",
    description:
      "A single page app where users can book space rockets and missions!",
    technologies: ["javascript", "react", "tailwind", "bootstrap"],
    live: "https://amiraabouhadid.github.io/space_travelers_hub/",
    source: "https://github.com/jssol/space_travelers_hub",
  },
  {
    name: "guru",
    title: "Film Guru",
    image: "./assets/images/guru.png",
    description: `This project is the second capstone project from Microverse. We had to select an API that provides data about a topic that you like and then build the webapp around it. The webapp will have 2 or 3 user interfaces (depending on the size of your team).`,
    technologies: ["html", "css", "javascript", "webpack"],
    live: "https://jssol.github.io/api-based-webapp/",
    source: "https://github.com/jssol/api-based-webapp/",
  },
  {
    name: "todo",
    title: "Todo-list app",
    image: "./assets/images/todo.png",
    description: `A simple todo list app that helps you keep track of the most important
    tasks of your busy day. Built with Javascript, Sass, Webpack`,
    technologies: ["webpack", "git", "javascript", "scss"],
    live: "https://jssol.github.io/todo-list/",
    source: "https://github.com/jssol/todo-list/",
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
      popArticle.querySelectorAll('a').addEventListener('mouseup', (e) => {
        e.stopPropagation();
      });
      popArticle.addEventListener('mouseup', (e) => {
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
    const article =
      `<article class="project-card" id=${project.name}>
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
