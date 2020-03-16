const item1 = document.querySelector(".nav-bar__item--1"),
  item2 = document.querySelector(".nav-bar__item--2"),
  item3 = document.querySelector(".nav-bar__item--3"),
  item4 = document.querySelector(".nav-bar__item--4"),
  item5 = document.querySelector(".nav-bar__item--5"),
  item6 = document.querySelector(".nav-bar__item--6");

const descriptions = document.querySelectorAll(".description-container");
const description1 = document.querySelector(".description-container--1"),
  description2 = document.querySelector(".description-container--2"),
  description3 = document.querySelector(".description-container--3"),
  description4 = document.querySelector(".description-container--4"),
  description5 = document.querySelector(".description-container--5"),
  description6 = document.querySelector(".description-container--6");

const numberOfDescription = document.querySelector(
  ".description-container__num-block"
);

const content = document.querySelectorAll(".content");
const about = document.querySelector(".content--about"),
  features = document.querySelector(".content--features"),
  penthouse = document.querySelector(".content--penthouse"),
  choise = document.querySelector(".content--choise");

const tabAbout = document.querySelector(".menu-block__item--about"),
  tabFeatures = document.querySelector(".menu-block__item--features"),
  tabPenthouse = document.querySelector(".menu-block__item--penthouse"),
  tabChoise = document.querySelector(".menu-block__item--choise");

const menuItems = document.querySelectorAll(".menu-block__item");
// переделать меню на таб
const menu = document.querySelector(".menu-block");

const line = document.querySelector(".line");

const menuHover = document.querySelector(".nav-bar__item--background-hover");
const allMenuItems = document.querySelectorAll(".nav-bar__item ");
const allMenuBackgrounds = document.querySelectorAll(
  ".nav-bar__item--background"
);
const allPics = document.querySelectorAll(".pic-block");

const Pic1 = document.querySelector(".pic-block--1");
const Pic2 = document.querySelector(".pic-block--2");
const Pic3 = document.querySelector(".pic-block--3");
const Pic4 = document.querySelector(".pic-block--4");
const Pic5 = document.querySelector(".pic-block--5");
const Pic6 = document.querySelector(".pic-block--6");
// const activeTab = document.querySelector(".menu-block__item--border-bottom");

function switchMenu(item, pic, disc, num) {
  numberOfDescription.innerHTML = num + "/6";

  let previous = document.querySelector(".nav-bar__item--selected");
  selectMenuItem(item);
  let current = document.querySelector(".nav-bar__item--selected");

  if (previous.offsetTop > current.offsetTop) {
    pic.style.top = "auto";
    pic.style.bottom = 0;
    disc.style.top = 0;
    disc.style.bottom = "auto";
  } else if (previous.offsetTop < current.offsetTop) {
    pic.style.top = 0;
    pic.style.bottom = "auto";
    disc.style.top = "auto";
    disc.style.bottom = 0;
  }

  swithPicture(pic);
  swithDescription(disc);
}

function selectMenuItem(item) {
  allMenuItems.forEach(function(i) {
    i.classList.remove("nav-bar__item--selected");
  });
  item.classList.add("nav-bar__item--selected");
  allMenuBackgrounds.forEach(function(i) {
    i.classList.remove("nav-bar__item--background-hover");
  });
  item.firstElementChild.classList.add("nav-bar__item--background-hover");
}

function swithPicture(pic) {
  allPics.forEach(function(i) {
    i.classList.remove("pic-show");
  });
  pic.classList.add("pic-show");

  pic.addEventListener("transitionend", function() {
    allPics.forEach(function(i) {
      i.classList.remove("current-pic");
    });
    pic.classList.add("current-pic");
  });
}
function swithDescription(disc) {
  descriptions.forEach(function(i) {
    i.classList.remove("disc-show");
  });
  disc.classList.add("disc-show");

  // disc.addEventListener("transitionend", function() {
  //     descriptions.forEach(function(i) {
  //     i.classList.remove("current-disc");
  //   });
  //   disc.classList.add("current-disc");
  // });
}

function selectTab(tab) {
  menuItems.forEach(function(i) {
    i.classList.remove("menu-block__item--border-bottom");
  });
  tab.classList.add("menu-block__item--border-bottom");

  activeTab = document.querySelector(".menu-block__item--border-bottom");
  width = activeTab.offsetWidth + "px";
  line.style.width = width;
}

function switchTab(item, tab) {
  selectTab(tab);
  content.forEach(function(i) {
    i.classList.add("content--hide");
  });
  item.classList.remove("content--hide");

  right =
    menu.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth + "px";
  line.style.right = right;
  left = activeTab.offsetLeft - menu.offsetLeft + "px";
  line.style.left = left;
}

item1.addEventListener("click", () => switchMenu(item1, Pic1, description1, 1));
item2.addEventListener("click", () => switchMenu(item2, Pic2, description2, 2));
item3.addEventListener("click", () => switchMenu(item3, Pic3, description3, 3));
item4.addEventListener("click", () => switchMenu(item4, Pic4, description4, 4));
item5.addEventListener("click", () => switchMenu(item5, Pic5, description5, 5));
item6.addEventListener("click", () => switchMenu(item6, Pic6, description6, 6));

tabAbout.addEventListener("click", () => switchTab(about, tabAbout));
tabFeatures.addEventListener("click", () => switchTab(features, tabFeatures));
tabPenthouse.addEventListener("click", () =>
  switchTab(penthouse, tabPenthouse)
);
tabChoise.addEventListener("click", () => switchTab(choise, tabChoise));

function hoverOn(tab) {
  activeTab = document.querySelector(".menu-block__item--border-bottom");

  if (tab.offsetLeft > activeTab.offsetLeft) {
    widthLine = tab.offsetLeft - activeTab.offsetLeft + tab.offsetWidth;
    left = activeTab.offsetLeft - menu.offsetLeft + "px";
    line.style.left = left;
    line.style.right = "auto";
  } else if (tab.offsetLeft < activeTab.offsetLeft) {
    widthLine = activeTab.offsetLeft - tab.offsetLeft + activeTab.offsetWidth;
    right =
      menu.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth + "px";
    line.style.left = "auto";
    line.style.right = right;
  } else if ((tab.offsetLeft = activeTab.offsetLeft)) {
    widthLine = activeTab.offsetWidth;
  }
  line.style.width = widthLine + "px";
}

function hoverOut() {
  activeTab = document.querySelector(".menu-block__item--border-bottom");
  width = activeTab.offsetWidth;
  line.style.width = width + "px";
  console.log("ширина при убирании" + width);
}

tabAbout.addEventListener("mouseover", () => hoverOn(tabAbout));
tabAbout.addEventListener("mouseout", () => hoverOut());

tabFeatures.addEventListener("mouseover", () => hoverOn(tabFeatures));
tabFeatures.addEventListener("mouseout", () => hoverOut());

tabPenthouse.addEventListener("mouseover", () => hoverOn(tabPenthouse));
tabPenthouse.addEventListener("mouseout", () => hoverOut());

tabChoise.addEventListener("mouseover", () => hoverOn(tabChoise));
tabChoise.addEventListener("mouseout", () => hoverOut());
