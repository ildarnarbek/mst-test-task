const content = document.querySelectorAll(".content"),
  about = document.querySelector(".content--about"),
  features = document.querySelector(".content--features"),
  penthouse = document.querySelector(".content--penthouse"),
  choise = document.querySelector(".content--choise"),
  allTabs = document.querySelectorAll(".tabs-block__tab"),
  tabAbout = document.querySelector(".tabs-block__tab--about"),
  tabFeatures = document.querySelector(".tabs-block__tab--features"),
  tabPenthouse = document.querySelector(".tabs-block__tab--penthouse"),
  tabChoise = document.querySelector(".tabs-block__tab--choise"),
  tabsBlock = document.querySelector(".tabs-block"),
  line = document.querySelector(".line").style;

const allMenuItems = document.querySelectorAll(".nav__item"),
  item1 = document.querySelector(".nav__item--1"),
  item2 = document.querySelector(".nav__item--2"),
  item3 = document.querySelector(".nav__item--3"),
  item4 = document.querySelector(".nav__item--4"),
  item5 = document.querySelector(".nav__item--5"),
  item6 = document.querySelector(".nav__item--6"),
  allMenuBackgrounds = document.querySelectorAll(".nav__item--background"),
  descriptions = document.querySelectorAll(".description-block"),
  description1 = document.querySelector(".description-block--1"),
  description2 = document.querySelector(".description-block--2"),
  description3 = document.querySelector(".description-block--3"),
  description4 = document.querySelector(".description-block--4"),
  description5 = document.querySelector(".description-block--5"),
  description6 = document.querySelector(".description-block--6"),
  numberOfDescription = document.querySelector(".description-block__num-block"),
  allPics = document.querySelectorAll(".pic-block"),
  Pic1 = document.querySelector(".pic-block--1"),
  Pic2 = document.querySelector(".pic-block--2"),
  Pic3 = document.querySelector(".pic-block--3"),
  Pic4 = document.querySelector(".pic-block--4"),
  Pic5 = document.querySelector(".pic-block--5"),
  Pic6 = document.querySelector(".pic-block--6"),
  allCutters = document.querySelectorAll("description-block__cutter");

function switchClass(all, item, style) {
  all.forEach(function(i) {
    i.classList.remove(style);
  });
  item.classList.add(style);
}

function selectTab(tab) {
  switchClass(allTabs, tab, "tabs-block__tab--border-bottom");
  activeTab = document.querySelector(".tabs-block__tab--border-bottom");
  width = activeTab.offsetWidth + "px";
  line.width = width;
}

function switchTab(item, tab) {
  selectTab(tab);
  content.forEach(function(i) {
    i.classList.add("content--hide");
  });
  item.classList.remove("content--hide");

  right = tabsBlock.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth;
  line.right = right + "px";
  left = activeTab.offsetLeft - tabsBlock.offsetLeft;
  line.left = left + "px";
}

function hoverOn(tab) {
  activeTab = document.querySelector(".tabs-block__tab--border-bottom");

  if (tab.offsetLeft > activeTab.offsetLeft) {
    widthLine = tab.offsetLeft - activeTab.offsetLeft + tab.offsetWidth;
    left = activeTab.offsetLeft - tabsBlock.offsetLeft;
    line.left = left + "px";
    line.right = "auto";
  } else if (tab.offsetLeft < activeTab.offsetLeft) {
    widthLine = activeTab.offsetLeft - tab.offsetLeft + activeTab.offsetWidth;
    right =
      tabsBlock.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth;
    line.left = "auto";
    line.right = right + "px";
  } else if ((tab.offsetLeft = activeTab.offsetLeft)) {
    widthLine = activeTab.offsetWidth;
  }
  line.width = widthLine + "px";
}

function hoverOut() {
  activeTab = document.querySelector(".tabs-block__tab--border-bottom");
  width = activeTab.offsetWidth;
  line.width = width + "px";
}

function selectMenuItem(item) {
  switchClass(allMenuItems, item, "nav__item--selected");

  allMenuBackgrounds.forEach(function(i) {
    i.classList.remove("nav__item--background-hover");
  });
  item.firstElementChild.classList.add("nav__item--background-hover");
}

function swithPicture(pic) {
  switchClass(allPics, pic, "pic-show");

  pic.addEventListener("transitionend", function() {
    switchClass(allPics, pic, "current-pic");
  });
}

function swithDescription(disc) {
  switchClass(descriptions, disc, "disc-show");
}

function switchMenu(item, pic, disc, num) {
  numberOfDescription.innerHTML = num + "/6";

  let previous = document.querySelector(".nav__item--selected");
  selectMenuItem(item);
  let current = document.querySelector(".nav__item--selected");

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
  textOverflow(disc);
}

function textOverflow(disc) {
  textBlock = disc.querySelector(".description-block__text");
  cutter = disc.querySelector(".description-block__cutter");
  rows = textBlock.innerHTML.split("\n").length;
  if (rows > 3) {
    cutter.classList.add("description-block__cutter--show");
  }
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

tabAbout.addEventListener("mouseover", () => hoverOn(tabAbout));
tabFeatures.addEventListener("mouseover", () => hoverOn(tabFeatures));
tabPenthouse.addEventListener("mouseover", () => hoverOn(tabPenthouse));
tabChoise.addEventListener("mouseover", () => hoverOn(tabChoise));

tabAbout.addEventListener("mouseout", () => hoverOut());
tabFeatures.addEventListener("mouseout", () => hoverOut());
tabPenthouse.addEventListener("mouseout", () => hoverOut());
tabChoise.addEventListener("mouseout", () => hoverOut());
