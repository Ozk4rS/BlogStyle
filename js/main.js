const navMenu = document.getElementById('nav-menu'),
    toogleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toogleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})