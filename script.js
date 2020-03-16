const allMenuItems = document.querySelectorAll(".nav-bar__item "),
  item1 = document.querySelector(".nav-bar__item--1"),
  item2 = document.querySelector(".nav-bar__item--2"),
  item3 = document.querySelector(".nav-bar__item--3"),
  item4 = document.querySelector(".nav-bar__item--4"),
  item5 = document.querySelector(".nav-bar__item--5"),
  item6 = document.querySelector(".nav-bar__item--6");

const descriptions = document.querySelectorAll(".description-container"),
  description1 = document.querySelector(".description-container--1"),
  description2 = document.querySelector(".description-container--2"),
  description3 = document.querySelector(".description-container--3"),
  description4 = document.querySelector(".description-container--4"),
  description5 = document.querySelector(".description-container--5"),
  description6 = document.querySelector(".description-container--6");

const numberOfDescription = document.querySelector(
  ".description-container__num-block"
);

const content = document.querySelectorAll(".content"),
  about = document.querySelector(".content--about"),
  features = document.querySelector(".content--features"),
  penthouse = document.querySelector(".content--penthouse"),
  choise = document.querySelector(".content--choise");

const tabAbout = document.querySelector(".tabs-block__tab--about"),
  tabFeatures = document.querySelector(".tabs-block__tab--features"),
  tabPenthouse = document.querySelector(".tabs-block__tab--penthouse"),
  tabChoise = document.querySelector(".tabs-block__tab--choise");

const allTabs = document.querySelectorAll(".tabs-block__tab");

const tabsBlock = document.querySelector(".tabs-block");

const line = document.querySelector(".line");

const menuHover = document.querySelector(".nav-bar__item--background-hover");

const allMenuBackgrounds = document.querySelectorAll(
  ".nav-bar__item--background"
);
const allPics = document.querySelectorAll(".pic-block"),
  Pic1 = document.querySelector(".pic-block--1"),
  Pic2 = document.querySelector(".pic-block--2"),
  Pic3 = document.querySelector(".pic-block--3"),
  Pic4 = document.querySelector(".pic-block--4"),
  Pic5 = document.querySelector(".pic-block--5"),
  Pic6 = document.querySelector(".pic-block--6");

const allCutters = document.querySelectorAll("description-container__cutter");

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
  textOverflow(disc);
}


function textOverflow(disc) {
  textBlock = disc.querySelector(".description-container__text");
  cutter = disc.querySelector(".description-container__cutter");
  rows = textBlock.innerHTML.split("\n").length;
  if (rows > 3) {
    cutter.classList.add("description-container__cutter--show");
  }
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
}

function selectTab(tab) {
  allTabs.forEach(function(i) {
    i.classList.remove("tabs-block__tab--border-bottom");
  });
  tab.classList.add("tabs-block__tab--border-bottom");

  activeTab = document.querySelector(".tabs-block__tab--border-bottom");
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
    tabsBlock.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth;
  line.style.right = right + "px";
  left = activeTab.offsetLeft - tabsBlock.offsetLeft;
  line.style.left = left + "px";
}

function hoverOn(tab) {
    activeTab = document.querySelector(".tabs-block__tab--border-bottom");
  
    if (tab.offsetLeft > activeTab.offsetLeft) {
      widthLine = tab.offsetLeft - activeTab.offsetLeft + tab.offsetWidth;
      left = activeTab.offsetLeft - tabsBlock.offsetLeft;
      line.style.left = left + "px";
      line.style.right = "auto";
    } else if (tab.offsetLeft < activeTab.offsetLeft) {
      widthLine = activeTab.offsetLeft - tab.offsetLeft + activeTab.offsetWidth;
      right =
        tabsBlock.offsetWidth - activeTab.offsetLeft - activeTab.offsetWidth;
      line.style.left = "auto";
      line.style.right = right + "px";
    } else if ((tab.offsetLeft = activeTab.offsetLeft)) {
      widthLine = activeTab.offsetWidth;
    }
    line.style.width = widthLine + "px";
  }
  
  function hoverOut() {
    activeTab = document.querySelector(".tabs-block__tab--border-bottom");
    width = activeTab.offsetWidth;
    line.style.width = width + "px";
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
tabAbout.addEventListener("mouseout", () => hoverOut());

tabFeatures.addEventListener("mouseover", () => hoverOn(tabFeatures));
tabFeatures.addEventListener("mouseout", () => hoverOut());

tabPenthouse.addEventListener("mouseover", () => hoverOn(tabPenthouse));
tabPenthouse.addEventListener("mouseout", () => hoverOut());

tabChoise.addEventListener("mouseover", () => hoverOn(tabChoise));
tabChoise.addEventListener("mouseout", () => hoverOut());
