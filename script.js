const item1 = document.querySelector(".nav-bar__item--1"),
  item2 = document.querySelector(".nav-bar__item--2"),
  item3 = document.querySelector(".nav-bar__item--3"),
  item4 = document.querySelector(".nav-bar__item--4"),
  item5 = document.querySelector(".nav-bar__item--5"),
  item6 = document.querySelector(".nav-bar__item--6");

const contentBlocks = document.querySelectorAll(".content-block");
const contentBlock1 = document.querySelector(".content-block--1"),
  contentBlock2 = document.querySelector(".content-block--2"),
  contentBlock3 = document.querySelector(".content-block--3"),
  contentBlock4 = document.querySelector(".content-block--4"),
  contentBlock5 = document.querySelector(".content-block--5"),
  contentBlock6 = document.querySelector(".content-block--6");

const content = document.querySelectorAll(".content");
const about = document.querySelector(".content--about"),
  features = document.querySelector(".content--features"),
  penthouse = document.querySelector(".content--penthouse"),
  choise = document.querySelector(".content--choise");

const menuAbout = document.querySelector(".menu-block__item--about"),
  menuFeatures = document.querySelector(".menu-block__item--features"),
  menuPenthouse = document.querySelector(".menu-block__item--penthouse"),
  menuChoise = document.querySelector(".menu-block__item--choise");

function switchTab(item) {
  contentBlocks.forEach(function(i) {
    i.classList.add("content-block--hide");
  });
  item.classList.remove("content-block--hide");
}

function switchMenu(item) {
  content.forEach(function(i) {
    i.classList.add("content--hide");
  });
  item.classList.remove("content--hide");
}

item1.addEventListener("click", () => switchTab(contentBlock1));
item2.addEventListener("click", () => switchTab(contentBlock2));
item3.addEventListener("click", () => switchTab(contentBlock3));
item4.addEventListener("click", () => switchTab(contentBlock4));
item5.addEventListener("click", () => switchTab(contentBlock5));
item6.addEventListener("click", () => switchTab(contentBlock6));

menuAbout.addEventListener("click", () => switchMenu(about));
menuFeatures.addEventListener("click", () => switchMenu(features));
menuPenthouse.addEventListener("click", () => switchMenu(penthouse));
menuChoise.addEventListener("click", () => switchMenu(choise));

// item4.addEventListener(click, () => {
//     console.log('клик');
// })
// item5.addEventListener(click, () => {
//     console.log('клик');
// })
// item6.addEventListener(click, () => {
//     console.log('клик');
// })
