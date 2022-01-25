const { body } = document;
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-list-link');

hamburger.addEventListener('mouseup', (event) => {
  body.classList.toggle('nav-open');
  event. stopPropagation();
});
window.addEventListener('mouseup', (event) => {
  body.classList.remove('nav-open');
  event. stopPropagation();
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  body.classList.remove('nav-open');
}));

let device = '';
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    device = 'tablet';
    return device;
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    device = 'mobile';
    return device;
  }
  return 'desktop';
};
deviceType();
if (device === 'mobile') {
  document.getElementById('message-icon').textContent = 'Contact';
}