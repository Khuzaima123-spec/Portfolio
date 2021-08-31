const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-elements');
const button_contact = document.getElementById('contact-btn')

hamburger.addEventListener('click', () =>
{
    navbar.classList.toggle('show');
    button_contact.classList.toggle('show');
});