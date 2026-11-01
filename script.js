const toggle = document.querySelector('#theme-toggle');
const themeLabel = document.querySelector('#theme-label');

// Remember the visitor's selected color theme.
const storedTheme = localStorage.getItem('portfolio-theme');
if (storedTheme === 'light') {
  document.body.classList.add('light');
}

function updateToggle() {
  const isLight = document.body.classList.contains('light');
  toggle.textContent = isLight ? '☾' : '☼';
  toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  toggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  themeLabel.textContent = isLight ? 'Dark Mode' : 'Light Mode';
}

updateToggle();

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(
    'portfolio-theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
  updateToggle();
});

document.querySelector('#year').textContent = new Date().getFullYear();
