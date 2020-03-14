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

const menuItems = document.querySelectorAll(".menu-block__item");
const line = document.querySelector(".line");

function switchTab(item) {
  contentBlocks.forEach(function(i) {
    i.classList.add("content-block--hide");
  });
  item.classList.remove("content-block--hide");
}

// let width = menuAbout.width()
// console.log(width);

function select(button) {
  let activeButton = document.querySelector(".menu-block__item--border-bottom");
  let activeButtonWidth = activeButton.offsetWidth;
  let width = button.offsetWidth;

  console.log(width);
  console.log(activeButtonWidth);
  //   let firstCenter = (activeButton.offsetRight - activeButton.offsetLeft)/2;
  let firstCenter = activeButton.offsetLeft + activeButtonWidth / 2;
  let secondCenter = button.offsetLeft + width / 2;
  console.log(firstCenter);
  console.log(secondCenter);
  let marginLine = 24 + secondCenter - firstCenter + "px";
  console.log(marginLine);

  menuItems.forEach(function(i) {
    i.classList.remove("menu-block__item--border-bottom");
  });
  button.classList.add("menu-block__item--border-bottom");
  //   switch (button) {
  //     case menuFeatures:
  //       line.style.marginLeft = "150px";
  //       line.style.width = "10px";
  //       break;
  //   }
  let middleWidthLine = width - 4 + 'px';
  line.style.width = middleWidthLine;
  line.style.marginLeft = marginLine;
}

function switchMenu(item, button) {
  select(button);
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

menuAbout.addEventListener("click", () => switchMenu(about, menuAbout));
menuFeatures.addEventListener("click", () =>
  switchMenu(features, menuFeatures)
);
menuPenthouse.addEventListener("click", () =>
  switchMenu(penthouse, menuPenthouse)
);
menuChoise.addEventListener("click", () => switchMenu(choise, menuChoise));

function underlineWide(item) {
  let activeButton = document.querySelector(".menu-block__item--border-bottom");
  let widthL = 0;
  switch (item) {
    case menuFeatures:
      menuFeatures.style.color = "blueviolet";
      //   line.style.transition = '0.5s';
      //   let widthButton = menuFeatures.offsetWidth;
      widthL = menuFeatures.offsetLeft - activeButton.offsetLeft + menuFeatures.offsetWidth - 4 +"px";
        console.log(widthL);
      break;
    case menuPenthouse:
      menuPenthouse.style.color = "blueviolet";
      //   line.style.transition = '0.5s';
      widthL = menuPenthouse.offsetLeft - activeButton.offsetLeft + menuPenthouse.offsetWidth - 4 + "px";
      break;
  }

  line.style.width = widthL;
}
function underlineShort(item) {
   let widthLineOut = 0;
  switch (item) {
    case menuFeatures:
      menuFeatures.style.color = "black";
      widthLineOut = menuFeatures.offsetWidth - 4 + 'px';
      
      break;
    case menuPenthouse:
      menuPenthouse.style.color = "black";
      widthLineOut = menuPenthouse.offsetWidth - 4 + 'px';
      break;
  }
  line.style.width = widthLineOut;
}

menuFeatures.addEventListener("mouseover", () => underlineWide(menuFeatures));
menuFeatures.addEventListener("mouseout", () => underlineShort(menuFeatures));

menuPenthouse.addEventListener("mouseover", () => underlineWide(menuPenthouse));
menuPenthouse.addEventListener("mouseout", () => underlineShort(menuPenthouse));

// console.log('навел')

// item4.addEventListener(click, () => {
//     console.log('клик');
// })
// item5.addEventListener(click, () => {
//     console.log('клик');
// })
// item6.addEventListener(click, () => {
//     console.log('клик');
// })
