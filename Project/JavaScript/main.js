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


/* FAQ - Accordion javaScript code */
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = null;
      }
    });

    button.classList.toggle("active");
    const content = button.nextElementSibling;

    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight;
    } else {
      content.style.maxHeight = null;
    }
  });
});


