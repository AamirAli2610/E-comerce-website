const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scndNavBar = document.querySelector('.scnd-navBar');



hamburger.addEventListener('click', () =>{

    navLinks.classList.toggle('show');
    scndNavBar.classList.toggle('show');

});