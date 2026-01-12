import './css/Base/normalize.css';
import './css/Base/custom.css';
import './css/SpecialComponents/specialComponents.css';
import './css/Components/header.css';
import './css/Components/home.css';
import './css/Components/sideBar.css';
import './css/Components/productDashboard.css';
import './css/Components/features.css';
import './css/Components/howItWork.css';
import './css/Components/services.css';
import './css/Components/testimonials.css';
import './css/Components/stats.css';
import './css/Components/pricing.css';
import './css/Components/about.css';
import './css/Components/footer.css'
import Typed from "typed.js";
import {createIcons,ChevronDown, Rocket, Atom, MessageCircle, ChartColumnIncreasing,
        Wrench, Menu, Moon, Sun, MoveRight, LayoutGrid, BriefcaseBusiness, PencilRuler, Activity,
        Lock, Map, LaptopMinimalCheck, Palette, Presentation, Star, CalendarDays, ArrowUpFromLine,
        UserPlus, CodeXml, BanknoteArrowUp, Globe, Check, ArrowUp,Plus,Minus,Facebook,Instagram,Twitch,Linkedin } from 'lucide';

// injecting icons
createIcons({
  icons:{
    ChevronDown,
    Rocket,
    Atom,
    MessageCircle,
    ChartColumnIncreasing,
    Wrench,
    Menu,
    Moon,
    Sun,
    MoveRight,
    LayoutGrid,
    BriefcaseBusiness,
    PencilRuler,
    Activity,
    Lock,
    Map,
    LaptopMinimalCheck,
    Palette,
    Presentation,
    Star,
    CalendarDays,
    ArrowUpFromLine,
    UserPlus,
    CodeXml,
    Globe,
    BanknoteArrowUp,
    Check,
    ArrowUp,
    Plus,
    Minus,
    Facebook,
    Instagram,
    Twitch,
    Linkedin
  }
})

/* sideBar logic */
// hide/show sideBar if sideBar button is clicked
const sideBar = document.querySelector('.sideBar');
const sideBarButton = document.querySelector('header .container .navList > li:last-child .sideBarButton');
sideBarButton.addEventListener('click',(e)=>{
  e.stopPropagation();
  sideBar.classList.toggle('show');
});

//hide sideBar if a link on it is clicked
const sideBarLinks = document.querySelectorAll('.sideBar a');
sideBarLinks.forEach((link)=>{
  link.addEventListener('click',()=>{
      sideBar.classList.remove('show');
  }) 
});
//colapse or show why redish menu inside sideBar
const whyRedishMenuAside = document.querySelector('.sideBar .navList li:nth-child(2) .whyRedishMenu');
const whyRedishMenuButton = document.querySelector('.sideBar .navList li:nth-child(2) > button');
const whyRedishMenuButtonSvg = document.querySelector('.sideBar .navList li:nth-child(2) > button svg');
whyRedishMenuButton.addEventListener('click',()=>{
  whyRedishMenuAside.classList.toggle('show');
  whyRedishMenuButtonSvg.classList.toggle('rotate');
})
//(notice there still be some logic for sideBare go to line 57)
/* header logic */
// mode
let mode = 'light'//default
const swithModeButton = document.querySelector(".switchModeButton");
const lightSvg = document.querySelector(".lucide.lucide-sun");
const darkSvg = document.querySelector(".lucide.lucide-moon");
swithModeButton.addEventListener("click",()=>{
  if(mode==='light'){
      lightSvg.style.display = "none";
      darkSvg.style.display = "block";
      mode = 'dark'
  }
  else {
      darkSvg.style.display = "none";
      lightSvg.style.display = "block";
      mode = 'light'
  }
});
// focus redish menu if it get clicked in header
const whyRedish = document.querySelector("header .container .navList li:nth-child(2)");
const whyRedishMenu = document.querySelector("header .container .navList li:nth-child(2) .whyRedishMenu");
const whyRedishMenuSvg = document.querySelector("header .container .navList li:nth-child(2) .navItem svg");
const whyRedishMenuItems = document.querySelectorAll("header .container .navList li:nth-child(2) .whyRedishMenu li");
// add/remove the show class if you click why redish
whyRedish.addEventListener("click",(e)=>{
  e.stopPropagation();
  whyRedishMenu.classList.toggle("show");
  whyRedishMenuSvg.classList.toggle("rotate");
});
// hide menu or hide side bar if there is a click on document outside of them
document.addEventListener('click', (e) => {
  e.stopPropagation();
  if (whyRedishMenu.contains(e.target)===false) {
      whyRedishMenu.classList.remove("show");
      whyRedishMenuSvg.classList.remove("rotate");
  }
  if (sideBar.contains(e.target)===false) {
      sideBar.classList.remove('show');
  }
});
// hide menu if there is a click on menu items them self 
whyRedishMenuItems.forEach((item)=>{
  item.addEventListener("click",(e)=>{
      e.stopPropagation();
      whyRedishMenu.classList.remove("show");
  })
})
/* home */
//  arrow-up button logic
const arrowUp = document.querySelector(".arrowUp");
arrowUp.addEventListener("click",(e)=>{
  e.stopPropagation();
  window.scrollTo(0,0);
});
// show/hide arrow-up if home is visible/hidden in the screen
const home_observer = new IntersectionObserver((entries)=>{
  arrowUp.classList.toggle("show",!entries[0].isIntersecting)
},{
  threshold: 0.1
});
home_observer.observe(document.querySelector(".home"));
// seting date
const dateSpan = document.getElementById("date");
const date = new Date();
dateSpan.textContent = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();

/* why redish logic*/
/* features logic */
const features_observer = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
      entries[0].target.classList.add("show");
      features_observer.unobserve(entries[0].target);
  }
},{
  threshold: 0.2,
});
features_observer.observe(document.querySelector(".whyRedish .features .container"));
/* how it work logic */
// title
const How_it_work_title = new Typed('.whyRedish .howItWork h2 span', {
  strings: ['work?'],
  typeSpeed: 120,
  backSpeed: 70,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});
// boxes
const box1 = document.querySelector(".whyRedish .howItWork .container .info .box:nth-child(1)");
const box2 = document.querySelector(".whyRedish .howItWork .container .info .box:nth-child(2)");
const box3 = document.querySelector(".whyRedish .howItWork .container .info .box:nth-child(3)");
const How_it_work_box_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
      if(entry.isIntersecting){
          entry.target.classList.add("show");
          How_it_work_box_observer.unobserve(entry.target);
      }
  })
},{
threshold: 0.2 
});
How_it_work_box_observer.observe(box1);
How_it_work_box_observer.observe(box2);
How_it_work_box_observer.observe(box3);

/* testimonials logic */
//title
const testimonials_Title = new Typed(".whyRedish .testimonials .sectionsTitle span",{
  strings: ['Testimonials'],
  typeSpeed: 50,
  backDelay: 2500,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  fadeOut: true
});

/* stats logic */
//title
const stats_Title = new Typed(".whyRedish .stats h2 span",{
  strings: ['Awesome Stats !'],
  typeSpeed: 50,
  backDelay: 2500,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  fadeOut: true
});
//counting
const stats = document.querySelector(".whyRedish .stats .container");
const rates = document.querySelectorAll(".whyRedish .stats .box .number");
const stats_observer = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting===true){
      rates.forEach((rate)=>{
          let counter = 0 ;
          const counting = setInterval(()=>{
              rate.textContent = counter ;
              if(counter === parseInt(rate.dataset.value)){
                  clearInterval(counting) ;
              }
              else{
                  counter++ ;
              }
          },60)
      });
      stats_observer.unobserve(stats);
  }
},{
  threshold: 0.4
});
stats_observer.observe(stats);

/* services logic */
//title
const services_title = new Typed(".services h2 span",{
  strings: ['Services!'],
  typeSpeed: 80,
  backDelay: 5000,
  loop: true,
  showCursor: false,
  fadeOut: true
});
/* About logic */
// Question and answers
const Buttons = document.querySelectorAll(".QuestionsAnswers .question .question-section .icon");
Buttons.forEach(function(button){
    button.addEventListener("click",function(){
      button.querySelector(".plus").classList.toggle("hide-plus");
      button.querySelector(".minus").classList.toggle("show-minus");
      button.parentElement.nextElementSibling.classList.toggle("show-answer");
    });
});