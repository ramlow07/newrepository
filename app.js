const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu

const mobileMenu = () => {
   menu.classList.toggle('is-active')
   menuLinks.classList.toggle('active') 
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scroll 
const highlightMenu = () => {
   const elem = document.querySelector('.highlight')
   const homeMenu = document.querySelector('#home-page')
   const aboutMenu = document.querySelector('#about-page')
   const servicesMenu = document.querySelector('#services-page')
   let scrollPos = window.scrollY
   
}