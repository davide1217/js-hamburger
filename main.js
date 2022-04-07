const hamburger = document.querySelector('.header-right > a')
const cancel = document.querySelector('.hamburger-menu > a')
const menu = document.querySelector('.hamburger-menu')


hamburger.addEventListener('click', function() {
  menu.classList.add('active')
})

cancel.addEventListener('click', function() {
  menu.classList.remove('active')
})



