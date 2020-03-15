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
// const activeTab = document.querySelector(".menu-block__item--border-bottom");

const lc = item1.firstElementChild;
console.log(allMenuBackgrounds);

function switchMenu(contant, item) {
  contentBlocks.forEach(function(i) {
    i.classList.add("content-block--hide");
  });
  contant.classList.remove("content-block--hide");

  allMenuItems.forEach(function(i) {
    i.classList.remove("nav-bar__item--selected");
  });
  item.classList.add("nav-bar__item--selected");

  allMenuBackgrounds.forEach(function(i) {
    i.classList.remove("nav-bar__item--background-hover");
  });
  item.firstElementChild.classList.add("nav-bar__item--background-hover");
}

function selectTab(tab) {
  menuItems.forEach(function(i) {
    i.classList.remove("menu-block__item--border-bottom");
  });
  tab.classList.add("menu-block__item--border-bottom");

  activeTab = document.querySelector(".menu-block__item--border-bottom");
  width = activeTab.offsetWidth - 4 + "px";
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

item1.addEventListener("click", () => switchMenu(contentBlock1, item1));
item2.addEventListener("click", () => switchMenu(contentBlock2, item2));
item3.addEventListener("click", () => switchMenu(contentBlock3, item3));
item4.addEventListener("click", () => switchMenu(contentBlock4, item4));
item5.addEventListener("click", () => switchMenu(contentBlock5, item5));
item6.addEventListener("click", () => switchMenu(contentBlock6, item6));

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
  line.style.width = width - 4 + "px";
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
