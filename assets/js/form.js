const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

const nameError = document.querySelector('#name-error');
const titleError = document.querySelector('#title-error');
const contentError = document.querySelector('#content-error');

let validated = false;
const formInputs = [
  { input: userName, error: nameError, display: 'name' },
  { input: title, error: titleError, display: 'title' },
  { input: content, error: contentError, display: 'content' },
];

let blogs = [];

function init() {
  formInputs.forEach(({ input, error, display }) => {
    input.addEventListener('keyup', () => validateEntry(input, error, display));
  });

  const existingBlogs = localStorage.getItem('blogs');
  if (existingBlogs) {
    blogs = JSON.parse(existingBlogs);
  }
}

function saveLocalStorage(data) {
  localStorage.setItem('blogs', JSON.stringify(data));
}

function submitForm(e) {
  e.preventDefault();

  formInputs.forEach(({ input, error, display }) => {
    validateEntry(input, error, display);
  });

  if (!validated) {
    return;
  }

  const newBlog = {
    userName: userName.value,
    title: title.value,
    content: content.value,
  };
  blogs.push(newBlog);
  saveLocalStorage(blogs);
  location.href = './blog.html';
}

function validateEntry(input, error, display) {
  validated = true;
  if (display === 'name' && /\d/.test(input.value)) {
    error.textContent = "You're name can't include a number";
    validated = false;
  }

  if (input.value.length < 2) {
    error.textContent = `You're ${display} has to be longer than 2 characters`;
    validated = false;
  }

  if (validated) {
    error.textContent = '';
  }
}

form.addEventListener('submit', submitForm);

init();
