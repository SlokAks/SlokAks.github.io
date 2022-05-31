burger = document.querySelector('.burger');
navList = document.querySelector('.nav-list');
navBar = document.querySelector('.navbar');

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp');
})