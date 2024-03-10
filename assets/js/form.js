// get all needed references for form data
const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

const nameError = document.querySelector('#name-error');
const titleError = document.querySelector('#title-error');
const contentError = document.querySelector('#content-error');

// set flag for validation, initial false
let validated = false;

// array to loop through later to prevent code duplication
const formInputs = [
  { input: userName, error: nameError, display: 'name' },
  { input: title, error: titleError, display: 'title' },
  { input: content, error: contentError, display: 'content' },
];

// init blogs array, get from local storage later
let blogs = [];

// initializes website
function init() {
  // validate form on keyup for instant user feedback
  // for some reason keydown would only work after a few presses, keyup doesn't have problem but introduces slight delay
  formInputs.forEach(({ input, error, display }) => {
    input.addEventListener('keyup', () => validateEntry(input, error, display));
  });

  // get blogs stored in localstorage, sets blogs to stored data
  const existingBlogs = localStorage.getItem('blogs');
  if (existingBlogs) {
    blogs = JSON.parse(existingBlogs);
  }
}

// function for saving blogs to local storage
function saveLocalStorage(data) {
  localStorage.setItem('blogs', JSON.stringify(data));
}

// called when user submits form
function submitForm(e) {
  // prevent automatic refresh on submit
  e.preventDefault();

  // validates entry for all fields before proceeding
  formInputs.forEach(({ input, error, display }) => {
    validateEntry(input, error, display);
  });

  if (!validated) {
    return;
  }

  // init new blog
  const newBlog = {
    userName: userName.value,
    title: title.value,
    content: content.value,
  };

  // pushes to blogs array
  blogs.push(newBlog);
  saveLocalStorage(blogs);

  // redirect user to blog page
  location.href = './blog.html';
}

// function for validating user's inputs
function validateEntry(input, error, display) {
  // sets validation temporarily to true, sets back to false if input false each check
  validated = true;

  // only prevent numbers on names
  if (display === 'name' && /\d/.test(input.value)) {
    // show error message
    error.textContent = "You're name can't include a number";
    validated = false;
  }

  // if any input field has length less than 2, display error message and set validation flag to false
  if (input.value.length < 2) {
    error.textContent = `You're ${display} has to be longer than 2 characters`;
    validated = false;
  }

  // checks validation flag
  if (!validated) {
    return;
  }

  // resets error to none if validation has passed
  error.textContent = '';
}

// add event listener for submit, calls submit form function
form.addEventListener('submit', submitForm);

// init function sets up event listeners for validation and gets localstorage data
init();
