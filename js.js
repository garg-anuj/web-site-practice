burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
})