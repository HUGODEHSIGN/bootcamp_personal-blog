const docBody = document.querySelector('body');
const themeToggle = document.querySelector('.theme-button');
let theme = docBody.dataset['theme'];

function toggleTheme() {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  docBody.dataset['theme'] = theme;
}

themeToggle.addEventListener('click', toggleTheme);
