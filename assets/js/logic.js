// get references to body and theme toggle button
const docBody = document.querySelector('body');
const themeToggle = document.querySelector('.theme-button');

// initialize global theme variable
let theme;

// initializes theme to be light if none exists
// sets to theme saved in local storage
function initTheme() {
  theme = localStorage.getItem('theme');
  if (!theme) {
    theme = 'light';
    return;
  }
  docBody.dataset['theme'] = theme;
}

// function for toggling theme
function toggleTheme() {
  // if statement toggles them between light and dark
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  // sets body data to selected theme
  docBody.dataset['theme'] = theme;
  // saves theme to local storage
  localStorage.setItem('theme', theme);
}

// function initializes theme
initTheme();

// toggles theme on button click
themeToggle.addEventListener('click', toggleTheme);
