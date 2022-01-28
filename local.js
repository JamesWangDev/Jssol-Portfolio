/* global form */
/* eslint no-undef: "error" */

function getData() {
  const data = {
    'full-name': document.getElementById('name').value,
    'first-name': document.getElementById('f-name').value,
    'last-name': document.getElementById('l-name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  return data;
}

function localStore(userData) {
  const data = JSON.stringify(userData);
  localStorage.setItem('form-data', data);
}

function autofill() {
  const data = JSON.parse(localStorage.getItem('form-data'));
  form.elements.name.value = data['full-name'];
  form.elements['f-name'].value = data['first-name'];
  form.elements['l-name'].value = data['last-name'];
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

form.addEventListener('input', (event) => {
  localStore(getData(event.target));
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('form-data')) autofill();
});
