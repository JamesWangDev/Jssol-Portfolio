import comigra from '@/assets/comigra.png';
import velmar from '@/assets/velmar.png';
import neutral from '@/assets/neutral.png';
import culturescape from '@/assets/culturescape.png';
import filmguru from '@/assets/filmguru.png';
import wisefin from '@/assets/wisefin.png';

const projects = [
  {
    title: 'Comigra',
    subtitle: 'A Mining Cooperative Website',
    description: [
      'Comigra is a mining cooperative based in the Democratic Republic of Congo (DRC) that offers a range of services to its members, including access to mining equipment, training and education, and financial support.',
      "The new website impacted Comigra's membership retention and growth. Within a year of launching the website, the cooperative saw a 50% increase in membership retention rates, indicating that members were more engaged and satisfied with the services provided by the cooperative.",
    ],
    image: comigra,
    stack: ['JavaScript', 'React', 'Tailwind', 'DaisyUI'],
    live: 'https://comigra.netlify.app',
    github: 'https://github.com/neutral-technology/comigra-frontend',
    alias: 'one',
  },
  {
    title: 'Culturescape',
    subtitle: 'A Website for Exploring Countries of the World',
    description: [
      'With our comprehensive database of legal and cultural facts, you can discover everything you need to know about countries around the globe. From basic information like capital cities and populations to specific facts about local customs, traditions, and historical events, Culturescape has you covered.',
      'So why wait? Join the Culturescape community today and start exploring the world. Whether you plan your next trip or looking to expand your horizons, Culturescape is the perfect place to start.',
    ],
    image: culturescape,
    stack: ['Tailwind', 'React', 'Redux', 'TDD'],
    live: 'https://culturescape.netlify.app',
    github: 'https://github.com/jssol/metrics-webapp',
    alias: 'two',
  },
  {
    title: 'Neutral',
    subtitle: 'A Digital Agency for Software Development Services',
    description: [
      'Neutral is a digital agency platform that provides software development services to businesses, focusing on building and maintaining mobile and web applications. The platform has collaborated with 10+ commerce in the Democratic Republic of Congo (DRC).',
      'The goal of Neutral is to provide businesses with access to reliable and affordable software development services. Neutral accomplishes this goal by leveraging the expertise of its team of experienced software developers, who work closely with businesses to design, develop, and maintain custom software solutions that meet their specific needs.',
    ],
    image: neutral,
    stack: ['React', 'Rails', 'PostgreSQL', 'Sass'],
    live: 'https://neutral.codes',
    github: 'https://github.com/neutral-technology/neutral.1.0-frontend',
    alias: 'three',
  },
  {
    title: 'Velmar',
    subtitle: 'A Web Application for Comic Fans',
    description: [
      'Velmar is a web application designed for comic fans to read, create, and discuss comics by attending events. It has received 20 stars on GitHub, showcasing its popularity among comic fans and developers. The application uses React, Rails, and PostgreSQL.',
      'In summary, Velmar is a web application designed for comic fans to read, create, and discuss comics by attending events. The platform offers a range of features and functionalities, including event scheduling, location-based recommendations, and social media integration.',
    ],
    image: velmar,
    stack: ['Rails', 'React', 'Tailwind', 'Redux'],
    live: 'https://velmar.netlify.app',
    github: 'https://github.com/jssol/comics-list-webapp',
    alias: 'four',
  },
  {
    title: 'WiseFin',
    subtitle: 'A Budget Management Mobile Web Application',
    description: [
      'Wisefin is a mobile web application for users to manage their budgets. They can add transactions and associate them with a specific category, allowing them to see how much money they have spent and on what.',
      'The application uses Ruby on Rails, a popular web application framework known for its flexibility and ease of use. It also uses Postgres as the database management system, ensuring data integrity and reliability. Additionally, Rspec, a testing framework for Ruby, ensures that the application functions as intended and that any bugs get caught early in the development process.',
    ],
    image: wisefin,
    stack: ['Rails', 'JavaScript', 'PostgreSQL', 'Ruby'],
    live: 'https://wise-fin.herokuapp.com',
    github: 'https://github.com/jssol/budget-app',
    alias: 'five',
  },
  {
    title: 'Film Guru',
    subtitle: 'A Website for Movie Recommendations',
    description: [
      'Film Guru is an exciting web application developed as a capstone project by Microverse that aims to help movie enthusiasts discover their next favorite film. In this project, we have utilized an API that provides comprehensive information about movies.',
      "Whether you're in the mood for a thriller, comedy, or romance, Film Guru has got you covered. Our extensive collection of movies and TV shows is your go-to platform for discovering your next favorite film. Try out Film Guru today and elevate your movie-watching experience!",
    ],
    image: filmguru,
    stack: ['JavaScript', 'Webpack', 'CSS', 'API'],
    live: 'https://jssol.github.io/api-based-webapp',
    github: 'https://github.com/jssol/api-based-webapp',
    alias: 'six',
  },
];

export default projects;
