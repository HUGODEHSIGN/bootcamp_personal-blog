const docBody = document.querySelector('body');
const themeToggle = document.querySelector('.theme-button');
let theme;

function initTheme() {
  theme = localStorage.getItem('theme');
  if (!theme) {
    theme = 'light';
    return;
  }
  docBody.dataset['theme'] = theme;
}

function toggleTheme() {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  docBody.dataset['theme'] = theme;
  localStorage.setItem('theme', theme);
}

initTheme();

themeToggle.addEventListener('click', toggleTheme);
