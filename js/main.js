// JS scripts placed here
const element = document.getElementById('enter-button');
const intro = document.getElementById('intro');
const page = document.body;

console.log(page);
element.addEventListener('click', () => {
    page.classList.add('entered');
    intro.classList.add('fade-out');
})