const darkModeCheckbox = document.querySelector('.dark-mode-toggle input[type="checkbox"]');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    darkModeCheckbox.checked = savedTheme === 'dark';
}

darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
