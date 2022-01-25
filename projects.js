const openButtons = document.querySelectorAll('.project-btn');
const closeButton = document.querySelector('.pop-article-close');

openButtons.forEach((button) => button.addEventListener('click', () => document.body.classList.add('pop-open')));

closeButton.addEventListener('click', () => document.body.classList.remove('pop-open'));
