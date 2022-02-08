//* -----------------------toggle navbar
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () =>{
  hideSection();
  toggleNavbar();
  document.body.classList.toggle('hide-scrolling');
});
function hideSection(){
  document.querySelector('section.active').classList.toggle('fade-out');
}
function toggleNavbar(){
  document.querySelector('.header').classList.toggle('active');
}

//** ---------------Active Section
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('link-item') && e.target.hash !== ""){
    //activated the overlay to prevent multiple clicks
    document.querySelector('.overlay').classList.add('active'); 
    navToggler.classList.add('hide');
    if(e.target.classList.contains('nav-item')){
      toggleNavbar();
    }
    else{
      hideSection();
      document.body.classList.add('hide-scrolling');
    }
    setTimeout(() =>{
      document.querySelector('section.active').classList.remove('active','fade-out');
      document.querySelector(e.target.hash).classList.add('active');
      window.scrollTo(0,0);
      document.body.classList.remove('hide-scrolling');
      navToggler.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');
    },500);
  }
});
// * -------------- About Tab
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", e => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

//*-------------------intern slider
$(document).ready(function() {
  $(".logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3
        }
      }
    ]
  });
});

//* ------------------- portfolio detail popup
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('view-project-btn')){
    togglePortfolioPopup();
    document.querySelector('.portfolio-popup').scrollTo(0,0);
    portfolioItemDetails(e.target.parentElement);
  }
})
function togglePortfolioPopup(){
  document.querySelector('.portfolio-popup').classList.toggle('open');
  document.body.classList.toggle('hide-scrolling');
  document.querySelector('.main').classList.toggle('fade-out');
}
document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener('click', (e) =>{
  if(e.target.classList.contains('pp-inner')){
    togglePortfolioPopup();
  }
});

function  portfolioItemDetails(portfolioItem){
 document.querySelector('.pp-thumbnail img').src =
 portfolioItem.querySelector('.portfolio-item-thumbnail img').src;

 document.querySelector('.pp-header h3').innerHTML =
 portfolioItem.querySelector('.portfolio-item-title').innerHTML;

 document.querySelector('.pp-body').innerHTML =
 portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}


//dropdeown toggle//
function show(anything){
  document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
  dropdown.classList.toggle('active');
}