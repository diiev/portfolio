const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
close = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

});
close.addEventListener('click', ()=>{
    menu.classList.remove('active');
    hamburger.classList.remove('active');
})
const ratingCounter = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

ratingCounter.forEach((item, i) => {
    if (Number(item.innerHTML.slice(0,-1)) <= 100)
        lines[i].style.width = item.innerHTML;
      
})