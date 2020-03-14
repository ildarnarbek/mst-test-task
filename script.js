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
const menu = document.querySelector(".menu-block");


const line = document.querySelector(".line");
// const activeTab = document.querySelector(".menu-block__item--border-bottom");

function switchTab(item) {
  contentBlocks.forEach(function(i) {
    i.classList.add("content-block--hide");
  });
  item.classList.remove("content-block--hide");
}

function selectTab(tab) {
  //  меняется маргин
  menuMargin = tab.offsetLeft - menu.offsetLeft + 2;

  //  меняется ширина подчеркивания

  //  устанавливается подчеркивание
  console.log("маргин от меню" + menuMargin);
  // console.log(firstCenter);
  //   console.log(secondCenter);
  //   console.log('маргин слева '+marginLeft);

  menuItems.forEach(function(i) {
    i.classList.remove("menu-block__item--border-bottom");
  });
  tab.classList.add("menu-block__item--border-bottom");

  line.style.marginLeft = menuMargin + "px";
  activeTab = document.querySelector(".menu-block__item--border-bottom");
  console.log(activeTab);
  width = activeTab.offsetWidth - 4 + "px";
  line.style.width = width;
}

function switchMenu(item, tab) {
  selectTab(tab);
  content.forEach(function(i) {
    i.classList.add("content--hide");
  });
  item.classList.remove("content--hide");
//   line.classList.add('left-location');
}

item1.addEventListener("click", () => switchTab(contentBlock1));
item2.addEventListener("click", () => switchTab(contentBlock2));
item3.addEventListener("click", () => switchTab(contentBlock3));
item4.addEventListener("click", () => switchTab(contentBlock4));
item5.addEventListener("click", () => switchTab(contentBlock5));
item6.addEventListener("click", () => switchTab(contentBlock6));

tabAbout.addEventListener("click", () => switchMenu(about, tabAbout));
tabFeatures.addEventListener("click", () => switchMenu(features, tabFeatures));
tabPenthouse.addEventListener("click", () =>
  switchMenu(penthouse, tabPenthouse)
);
tabChoise.addEventListener("click", () => switchMenu(choise, tabChoise));

function underlineWide(tab) {
  
  activeTab = document.querySelector(".menu-block__item--border-bottom");

  console.log('about '+tabAbout.offsetLeft   + '>' + activeTab.offsetLeft);
  console.log('Features '+tabFeatures.offsetLeft   + '>' + activeTab.offsetLeft);
  console.log('Penthouse'+tabPenthouse.offsetLeft  + '>' + activeTab.offsetLeft);
  console.log('Choise '+ tabChoise.offsetLeft + '>' + activeTab.offsetLeft);

  switch (tab) {
    case tabAbout:
      if (tabAbout.offsetLeft >= activeTab.offsetLeft) {
        // line.style.right = auto;
        widthL =
          tabAbout.offsetLeft - activeTab.offsetLeft + tabAbout.offsetWidth;
      } else {
          right = 23.5 + activeTab.offsetWidth-activeTab.offsetWidth +'px';
          line.style.right = right;
          console.log('right'+right);
        widthL =
          activeTab.offsetLeft - tabAbout.offsetLeft + activeTab.offsetWidth;
          console.log('widthL'+widthL);
      }
      break;
    case tabFeatures:
        if (tabFeatures.offsetLeft >= activeTab.offsetLeft) {
            console.log(tabFeatures.offsetLeft   + '>' + activeTab.offsetLef);
            // line.style.right = '-50px';
            widthL =
            tabFeatures.offsetLeft - activeTab.offsetLeft + tabFeatures.offsetWidth;
          } else {
              right = 23.5 + activeTab.offsetWidth-activeTab.offsetWidth +'px';
              line.style.right = right;
              console.log('right'+right);
            widthL =
              activeTab.offsetLeft - tabFeatures.offsetLeft + activeTab.offsetWidth;
              console.log('widthL'+widthL);
          }
    //   widthL =
    //     tabFeatures.offsetLeft - activeTab.offsetLeft + tabFeatures.offsetWidth;
      break;
    case tabPenthouse:
        if (tabPenthouse.offsetLeft >= activeTab.offsetLeft) {
            console.log(tabPenthouse.offsetLeft  + '>' + activeTab.offsetLef);
            // line.style.right = auto;
            widthL =
            tabPenthouse.offsetLeft - activeTab.offsetLeft + tabPenthouse.offsetWidth;
          } else {
              right = 23.5 + activeTab.offsetWidth-activeTab.offsetWidth +'px';
              line.style.right = right;
              console.log('right'+right);
            widthL =
              activeTab.offsetLeft - tabPenthouse.offsetLeft + activeTab.offsetWidth;
              console.log('widthL'+widthL);
          }
    //   widthL =
    //     tabPenthouse.offsetLeft -
    //     activeTab.offsetLeft +
    //     tabPenthouse.offsetWidth;
      break;
    case tabChoise:
        if (tabChoise.offsetLeft >= activeTab.offsetLeft) {
            console.log(tabChoise.offsetLeft + '>' + activeTab.offsetLef);
            // line.style.right = auto;
            widthL =
            tabChoise.offsetLeft - activeTab.offsetLeft + tabChoise.offsetWidth;
          } else {
              right = 23.5 + activeTab.offsetWidth-activeTab.offsetWidth +'px';
              line.style.right = right;
              console.log('right'+right);
            widthL =
              activeTab.offsetLeft - tabChoise.offsetLeft + activeTab.offsetWidth;
              console.log('widthL'+widthL);
          }
    //   widthL =
    //     tabChoise.offsetLeft - activeTab.offsetLeft + tabChoise.offsetWidth;
      break;
  }

  line.style.width = widthL - 4 + "px";
  console.log("ширина при наведении" + widthL);
}

function hoverOut() {
  activeTab = document.querySelector(".menu-block__item--border-bottom");
  width = activeTab.offsetWidth;
  line.style.width = width - 4 + "px";
  console.log("ширина при убирании" + width);
}

tabAbout.addEventListener("mouseover", () => underlineWide(tabAbout));
tabAbout.addEventListener("mouseout", () => hoverOut());

tabFeatures.addEventListener("mouseover", () => underlineWide(tabFeatures));
tabFeatures.addEventListener("mouseout", () => hoverOut());

tabPenthouse.addEventListener("mouseover", () => underlineWide(tabPenthouse));
tabPenthouse.addEventListener("mouseout", () => hoverOut());

tabChoise.addEventListener("mouseover", () => underlineWide(tabChoise));
tabChoise.addEventListener("mouseout", () => hoverOut());
