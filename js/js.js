burger = document.querySelector('#burger')
navbar = document.querySelector('#navbar')
rightnav = document.querySelector('#rightNav')


burger.addEventlistener('click', () => {
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
})