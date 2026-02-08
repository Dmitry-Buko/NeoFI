const burger = document.querySelector('.header__burger')
const body = document.body
burger.addEventListener('click', () => {
  body.classList.toggle('open')
})