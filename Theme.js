const themeSwitch = document.querySelector('.theme-switch button');
const body = document.body;
const localStorageTheme = localStorage.getItem('theme');

if (localStorageTheme) {
  body.classList.add(localStorageTheme);
}

themeSwitch.addEventListener('click', () => { 
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
});
