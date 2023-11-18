/* hide the navigation list when JS  is available */
document.querySelector('HTML').classList.add('js')

const swiper = new Swiper(".mySwiper", {
 slidesPerView: 1,
 autoplay: true,
 // loop: true,
 // spaceBetween: 30,
 slidesPerGroup: 1,
 // loopFillGroupWithBlank: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
 },
});

const swiperBlog = new Swiper(".blog-home__swiper", {
 slidesPerView: 2,
 autoplay: true,
 // loop: true,
 slidesOffsetAfter: 0,
 spaceBetween: 30,
 slidesPerGroup: 1,
 // loopFillGroupWithBlank: true,
 navigation: {
  nextEl: ".blog-home__swiper-btn-next",
  prevEl: ".blog-home__swiper-btn-prev",
 },
 breakpoints: {
  499: {
   slidesPerView: 1,

  },
  768: {
   slidesPerView: 2,

  },
  999: {
   slidesPerView: 3,
   spaceBetweenSlides: 10
  }
 }
});







// const tabBtns = document.querySelectorAll('.blog-section__btn');
// const tabContent = document.querySelectorAll('.blog-section__content');

// if (tabBtns) {
//  tabBtns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//    tabBtns.forEach(btn => btn.classList.remove('active'));
//    btn.classList.add('active');
//    const currentCat = btn.getAttribute('data-tab-target');


//    if (currentCat == 'all') {
//     tabContent.forEach(content => content.classList.add('active'));
//    } else {
//     tabContent.forEach(content => {

//      if (content.getAttribute('data-tab-content') == currentCat) {
//       content.classList.add('active');
//      } else {
//       content.classList.remove('active');
//      }

//     })
//    }


//   })
//  })
// }


// const themeToggle = document.querySelector('.theme-toggle');
// const themeToggleText = document.querySelector('.theme-toggle__text');
// const body = document.querySelector('body');





// function changeTheme(){

//  if(localStorage.getItem('theme-mode')){

//   if(localStorage.getItem('theme-mode') == 'dark-mode'){
//    body.classList.remove('dark-mode');
//    body.classList.add('light-mode');
//    localStorage.setItem('theme-mode', 'light-mode');
//    themeToggleText.innerHTML = 'Тёмный режим'
//   }
//   else{
//    body.classList.remove('light-mode');
//    body.classList.add('dark-mode');
//    localStorage.setItem('theme-mode', 'dark-mode');
//    themeToggleText.innerHTML = 'Светлый режим'

//   }
//  }
// }

// if(themeToggle){
//  themeToggle.addEventListener('click', changeTheme)
// }

// function setThemeOnLoad(){
//  if(localStorage.getItem('theme-mode')){
//   if(localStorage.getItem('theme-mode') == 'dark-mode'){
//    body.classList.remove('light-mode');
//    body.classList.add('dark-mode');
//    themeToggleText.innerHTML = 'Светлый режим'

//   }
//   else{
//    body.classList.remove('dark-mode');
//    body.classList.add('light-mode');
//    themeToggleText.innerHTML = 'Тёмный режим'

//   }
//  }else{
//   localStorage.setItem('theme-mode', 'light-mode');
//  }
// }

// setThemeOnLoad()


let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.nav__popup');


function toggleTabindex(value) {
 let menuItems = menu.querySelectorAll('.menu-link');
 menuItems.forEach((item) => item.setAttribute('tabindex', value));
}

function toggleMenu(e) {
 toggleMenuBtn.classList.toggle('open');
 menu.classList.toggle('open');

 // Hide outline after clicking, but don't hide when using the keyboard
 if (e.screenX !== 0 && e.screenY !== 0) {
  toggleMenuBtn.blur();
 }

 let ariaAttribute = toggleMenuBtn.getAttribute('aria-expanded');
 if (ariaAttribute === 'false') {
  toggleMenuBtn.setAttribute('aria-expanded', 'true');
  toggleTabindex(0);
 } else {
  toggleMenuBtn.setAttribute('aria-expanded', 'false');
  toggleTabindex(-1);
 }
}

toggleMenuBtn.addEventListener('click', toggleMenu);

// On small screens, hide menu items from tab order until menu opens
if (window.innerWidth < 900) {
 toggleTabindex(-1);
}

// This is to avoid animating the menu transitions when window size changes 
window.addEventListener("resize", () => {
 document.body.classList.add('transition-stop');
 clearTimeout(resizeTimer);
 var resizeTimer = setTimeout(function () {
  document.body.classList.remove('transition-stop');
 }, 300);
});


const lang = document.querySelector('.lang');
const langRus = document.querySelector('.lang__rus')
const langKZ = document.querySelector('.lang__kz')
if (screen.width > 992) {
 langRus.innerHTML = langRus.innerHTML.slice(0, 3);
 langKZ.innerHTML = langKZ.innerHTML.slice(0, 3);
}


const menuLinks = document.querySelectorAll('.nav__link.js');


[...menuLinks].forEach(btn=> {
 btn.addEventListener('click', (e)=> {
  e.preventDefault()
  const linkName = e.target.getAttribute('href')
  let blockPosition = document.querySelector(linkName).offsetTop;
  const screenWidth = screen.width;
  const menuBtn = document.querySelector('.menu-button');
  const menuPopup = document.querySelector('.nav__popup')
  if(screenWidth < 993){

   menuBtn.classList.remove('open')
   menuPopup.classList.remove('open')
   window.scrollTo({
    top: blockPosition,
    behavior: 'smooth'
   });
  }else{
   window.scrollTo({
    top: blockPosition  + 2 ,
    behavior: 'smooth'
  });
  }

 })
})