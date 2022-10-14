const body = document.getElementById('body');
const logoWrapper = document.getElementById('logoWrapper');
const overheadBar = document.getElementById('overheadBar');
const menuBtnBorder = document.getElementById('menuBtnBorder');
const menuBtn = document.getElementById('menuBtn');
const menuBtnBurgerTop = document.getElementById('menuBtnBurgerTop');
const menuBtnBurgerMid = document.getElementById('menuBtnBurgerMid');
const menuBtnBurgerBtm = document.getElementById('menuBtnBurgerBtm');
const loopBasketWrapper = document.getElementById('loopBasketWrapper');
const mainMenuOpenClosSwitch = document.getElementById('mainMenuOpenCloseSwitch');
const mainMenu = document.getElementById('mainMenu');
const mainMenuNavWrapper = document.getElementById('mainMenuNavWrapper');

const menuNavItemClothing = document.getElementById('menuNavItemClothing');
const menuNavItemFootwear = document.getElementById('menuNavItemFootwear');
const menuNavItemEquipment = document.getElementById('menuNavItemEquipment');
const menuNavBorderLine = Array.from(document.getElementsByClassName('main-menu-main-nav-border-line'));

const mainMenuSubExtentionClothing = document.getElementById('mainMenuSubExtentionClothing');
const mainMenuSubExtentionFootwear = document.getElementById('mainMenuSubExtentionFootwear');
const mainMenuSubExtentionEquipment = document.getElementById('mainMenuSubExtentionEquipment');


let screenWidth = screen.width;
let subExtentionClothingOpen = false;
let subExtentionFootwearOpen = false;
let subExtentionEquipmentOpen = false;
let subSubExtentionClothingShopByActivityOpen = false;
let subSubExtentionClothingMenOpen = false;
let subSubExtentionClothingWomenOpen = false;


window.addEventListener('resize', () => {
  screenWidth = screen.width;
});

function overflowHidden(x) {
  x.style.overflow = 'hidden';
};
function overflowVisible(x) {
  x.style.overflow = 'visible';
};
function overflowScroll(x) {
  x.style.overflow = 'scroll';
};
function displayNone(x) {
  x.style.display = 'none';
};
function displayBlock (x) {
  x.style.display = 'initial';
}

let menuOpen = false;
if(screenWidth < 1024) {
onload = () => {
  overheadBar.style.width = '90%';
    setTimeout( function logoAnimation() {
        logoWrapper.style.translate = '0';
      },1000);
};
setTimeout( function menuWrapperAnimation() {
  menuBtnBorder.style.translate = '0';
  loopBasketWrapper.style.translate = '0';
  loopBasketWrapper.style.width = '170px';
},1000);
} else {
  onload = () => {
    overheadBar.style.width = '90%';
      setTimeout( function logoAnimation() {
          logoWrapper.style.translate = '0';
        },1000);
  };
  setTimeout( function menuWrapperAnimation() {
    menuBtnBorder.style.translate = '0';
    loopBasketWrapper.style.translate = '0';
    loopBasketWrapper.style.width = '170px';
  },1000);
};
menuBtn.addEventListener('click', () =>{
  mainMenu.style.transition = 'all .3s ease-in-out';
    if (!menuOpen) {
      mainMenu.style.transition = 'all .3s ease-in-out';
      menuBtn.classList.add('open');
      menuOpen = true;
      overflowHidden(body);
      mainMenu.classList.add('open');
    } else {
      setTimeout(function() {
        mainMenu.style.transition = 'none';
      }, 300);
      menuBtn.classList.remove('open');
      menuOpen = false;
      overflowVisible(body);
      mainMenu.classList.remove('open');
      setTimeout(function () {
        mainMenu.classList.remove('initial');
        mainMenu.classList.remove('scroll');
      }, 250);
    };
    mainMenuClosingAnimation();
});
function mainMenuClosingAnimation() {
  menuNavBorderLine.forEach(menuNavBorderLine => {
    menuNavBorderLine.style.translate = '0 0';
  });
  menuNavItemClothing.style.translate = '0 0';
  menuNavItemFootwear.style.translate = '0 0';
  menuNavItemEquipment.style.translate = '0 0';
  mainMenuSubExtentionClothing.classList.remove('open');
  mainMenuSubExtentionFootwear.classList.remove('open');
  mainMenuSubExtentionEquipment.classList.remove('open');
  setTimeout(overflowHidden, 300, mainMenu);
  setTimeout(overflowHidden, 300, mainMenuSubExtentionClothing);
  setTimeout(overflowHidden, 300, mainMenuSubExtentionFootwear);
  setTimeout(overflowHidden, 300, mainMenuSubExtentionEquipment);
  subExtentionBorderLine.forEach(subExtentionBorderLine => {
    subExtentionBorderLine.style.translate = '0 0';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 0';
    mainMenuSubItemFootwearWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
    mainMenuSubSubExtentionNavEquipmentShopByActivity.classList.remove('open');
    subExtentionClothingOpen = false;
    subExtentionFootwearOpen = false;
    subExtentionEquipmentOpen = false;
    subSubExtentionFootwearShopByActivityOpen = false;
    subSubExtentionFootwearMenOpen = false;
    subSubExtentionFootwearWomenOpen = false;
    subSubExtentionEquipmentOpen = false;
    subExtentionEquipmentLazyItems.forEach(subExtentionEquipmentLazyItems => {
      subExtentionEquipmentLazyItems.style.translate = '0 0';
    });
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundFootwear.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');

  });
};

function mainMenuSubExtentionOpeningAnimationMobile () {
  if (subExtentionClothingOpen) {
    overflowScroll(mainMenu);
    menuNavBorderLine.forEach(menuNavBorderLine => {
      menuNavBorderLine.style.translate = '0 100rem';
    });
    menuNavItemFootwear.style.translate = '0 100rem';
    menuNavItemEquipment.style.translate = '0 100rem';
    mainMenuSubExtentionClothing.classList.add('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  };
  if (subExtentionFootwearOpen) {
    overflowScroll(mainMenu);
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 100rem';
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 100rem';
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.add('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  };
  if (subExtentionEquipmentOpen) {
    overflowScroll(mainMenu);
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 0rem';
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 0';
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.add('open');
  };
};
function mainMenuSubExtentionOpeningAnimationLaptop() {
  if (subExtentionClothingOpen) {
    overflowVisible(mainMenu);
    subSubExtentionBackgroundFootwear.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubExtentionClothing.classList.add('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  }
  if (subExtentionFootwearOpen) {
    overflowVisible(mainMenu);
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.add('open');
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  }
  if (subExtentionEquipmentOpen) {
    overflowVisible(mainMenu);
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.add('open');
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
  };
};
function mainMenuSubExtentionClosingAnimation () {
  if (subExtentionClothingOpen) {
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
    mainMenuSubSubExtentionNavEquipmentShopByActivity.classList.remove('open');
    subExtentionBorderLine[3].style.translate = '0 0';
    subExtentionBorderLine[4].style.translate = '0 0';
    subExtentionBorderLine[5].style.translate = '0 0';
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 0';
    mainMenuSubItemFootwearWomen.style.translate = '0 0';
    subExtentionBorderLine[6].style.translate = '0 0';
    subExtentionBorderLine[7].style.translate = '0 0';
    subExtentionBorderLine[8].style.translate = '0 0';
    subExtentionBorderLine[9].style.translate = '0 0';
    subExtentionBorderLine[10].style.translate = '0 0';
    subExtentionBorderLine[11].style.translate = '0 0';
    subExtentionEquipmentLazyItems[1].style.translate = '0 0';
    subExtentionEquipmentLazyItems[2].style.translate = '0 0';
    subExtentionEquipmentLazyItems[3].style.translate = '0 0';
    subExtentionEquipmentLazyItems[4].style.translate = '0 0';
    subExtentionEquipmentLazyItems[5].style.translate = '0 0';
  };
  if (subExtentionFootwearOpen) {
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
    mainMenuSubSubExtentionNavEquipmentShopByActivity.classList.remove('open');
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 0';
    subExtentionBorderLine[2].style.translate = '0 0';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    subExtentionBorderLine[6].style.translate = '0 0';
    subExtentionBorderLine[7].style.translate = '0 0';
    subExtentionBorderLine[8].style.translate = '0 0';
    subExtentionBorderLine[9].style.translate = '0 0';
    subExtentionBorderLine[10].style.translate = '0 0';
    subExtentionBorderLine[11].style.translate = '0 0';
    subExtentionEquipmentLazyItems[1].style.translate = '0 0';
    subExtentionEquipmentLazyItems[2].style.translate = '0 0';
    subExtentionEquipmentLazyItems[3].style.translate = '0 0';
    subExtentionEquipmentLazyItems[4].style.translate = '0 0';
    subExtentionEquipmentLazyItems[5].style.translate = '0 0';
  };
  if (subExtentionEquipmentOpen) {
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
    subExtentionBorderLine[3].style.translate = '0 0';
    subExtentionBorderLine[4].style.translate = '0 0';
    subExtentionBorderLine[5].style.translate = '0 0';
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 0';
    mainMenuSubItemFootwearWomen.style.translate = '0 0';
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 0';
    subExtentionBorderLine[2].style.translate = '0 0';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    
  };
}
menuNavItemClothing.addEventListener('mouseover', () => {
  subExtentionClothingOpen = true;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingWomenOpen = false;
  subSubExtentionFootwearShopByActivityOpen = false;
  subSubExtentionFootwearMenOpen = false;
  subSubExtentionFootwearWomenOpen = false;
  subSubExtentionEquipmentOpen = false;
  mainMenuSubExtentionClosingAnimation();
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
    setTimeout(overflowHidden, 300, mainMenuSubExtentionFootwear);
    setTimeout(overflowHidden, 300, mainMenuSubExtentionEquipment);
  };
  
});
menuNavItemFootwear.addEventListener('mouseover',() => {
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = true;
  subExtentionEquipmentOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingWomenOpen = false;
  subSubExtentionFootwearShopByActivityOpen = false;
  subSubExtentionFootwearMenOpen = false;
  subSubExtentionFootwearWomenOpen = false;
  subSubExtentionEquipmentOpen = false;
  mainMenuSubExtentionClosingAnimation();
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
    setTimeout(overflowHidden, 300, mainMenuSubExtentionClothing);
    setTimeout(overflowHidden, 300, mainMenuSubExtentionEquipment);
  }
});
menuNavItemEquipment.addEventListener('mouseover',() => {
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = true;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingWomenOpen = false;
  subSubExtentionFootwearShopByActivityOpen = false;
  subSubExtentionFootwearMenOpen = false;
  subSubExtentionFootwearWomenOpen = false;
  mainMenuSubExtentionClosingAnimation();
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
    setTimeout(overflowHidden, 300, mainMenuSubExtentionFootwear);
    setTimeout(overflowHidden, 300, mainMenuSubExtentionClothing);
  }
});


const subExtentionBorderLine = Array.from(document.getElementsByClassName('main-menu-sub-extention-border-line'));
const subExtentionEquipmentLazyItems = Array.from(document.getElementsByClassName('main-menu-sub-extention-nav-item-equipment'));
const mainMenuSubItemClothingShopByActivity = document.getElementById('mainMenuSubItemClothingShopByActivity');
const mainMenuSubItemClothingMen = document .getElementById('mainMenuSubItemClothingMen');
const mainMenuSubItemClothingWomen = document .getElementById('mainMenuSubItemClothingWomen');
const mainMenuSubItemFootwearShopByActivity = document.getElementById('mainMenuSubItemFootwearShopByActivity');
const mainMenuSubItemFootwearMen = document.getElementById('mainMenuSubItemFootwearMen');
const mainMenuSubItemFootwearWomen = document.getElementById('mainMenuSubItemFootwearWomen');
const mainMenuSubSubExtentionNavClothingShopByActivity = document.querySelector('.main-menu-sub-sub-nav-clothing-shop-by-activity');
const mainMenuSubSubExtentionNavClothingMen = document.querySelector('.main-menu-sub-sub-nav-clothing-men');
const mainMenuSubSubExtentionNavClothingWomen = document.querySelector('.main-menu-sub-sub-nav-clothing-women');
const mainMenuSubSubExtentionNavFootwearShopByActivity = document.querySelector('.main-menu-sub-sub-nav-footwear-shop-by-activity');
const mainMenuSubSubExtentionNavFootwearMen = document.querySelector('.main-menu-sub-sub-nav-footwear-men');
const mainMenuSubSubExtentionNavFootwearWomen = document.querySelector('.main-menu-sub-sub-nav-footwear-women');
const subSubExtentionBackgroundClothing = document.querySelector('.main-menu-sub-sub-extention-background-clothing');
const subSubExtentionBackgroundFootwear = document.querySelector('.main-menu-sub-sub-extention-background-footwear');
const subSubExtentionBackgroundEquipment = document.querySelector('.main-menu-sub-sub-extention-background-equipment');
const mainMenuSubItemEquipmentShopByActivity = document.getElementById('mainMenuSubExtentionNavItemEquipmentShopByActivity');
const mainMenuSubSubExtentionNavEquipmentShopByActivity = document.querySelector('.main-menu-sub-sub-nav-equipment-shop-by-activity');

let subSubExtentionFootwearShopByActivityOpen = false;
let subSubExtentionFootwearMenOpen = false;
let subSubExtentionFootwearWomenOpen = false;
let subSubExtentionEquipmentOpen = false;


function mainMenuSubSubExtentionOpeningAnimationMobile () {
  if (subSubExtentionClothingShopByActivityOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 40rem';
    subExtentionBorderLine[1].style.translate = '0 40rem';
    subExtentionBorderLine[2].style.translate = '0 40rem';
    mainMenuSubItemClothingMen.style.translate = '0 40rem';
    mainMenuSubItemClothingWomen.style.translate = '0 40rem';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if (subSubExtentionClothingMenOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 55rem';
    subExtentionBorderLine[2].style.translate = '0 55rem';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 55rem';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.add('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if (subSubExtentionClothingWomenOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 0';
    subExtentionBorderLine[2].style.translate = '0 55rem';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.add('open');
  };
  if (subSubExtentionFootwearShopByActivityOpen) {
    overflowScroll(mainMenuSubExtentionFootwear);
    subExtentionBorderLine[3].style.translate = '0 25rem';
    subExtentionBorderLine[4].style.translate = '0 25rem';
    subExtentionBorderLine[5].style.translate = '0 25rem';
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 25rem';
    mainMenuSubItemFootwearWomen.style.translate = '0 25rem';
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
  };
  if (subSubExtentionFootwearMenOpen) {
    overflowScroll(mainMenuSubExtentionFootwear);
    subExtentionBorderLine[3].style.translate = '0 0';
    subExtentionBorderLine[4].style.translate = '0 40rem';
    subExtentionBorderLine[5].style.translate = '0 40rem';
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 0';
    mainMenuSubItemFootwearWomen.style.translate = '0 40rem';
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.add('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
  };
  if (subSubExtentionFootwearWomenOpen) {
    overflowScroll(mainMenuSubExtentionFootwear);
    subExtentionBorderLine[3].style.translate = '0 0';
    subExtentionBorderLine[4].style.translate = '0 0';
    subExtentionBorderLine[5].style.translate = '0 35rem';
    mainMenuSubItemFootwearShopByActivity.style.translate = '0 0';
    mainMenuSubItemFootwearMen.style.translate = '0 0';
    mainMenuSubItemFootwearWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.add('open');
  };
  if(subSubExtentionEquipmentOpen) {
    overflowScroll(mainMenuSubExtentionEquipment);
    subExtentionEquipmentLazyItems[1].style.translate = '0 50rem';
    subExtentionEquipmentLazyItems[2].style.translate = '0 50rem';
    subExtentionEquipmentLazyItems[3].style.translate = '0 50rem';
    subExtentionEquipmentLazyItems[4].style.translate = '0 50rem';
    subExtentionEquipmentLazyItems[5].style.translate = '0 50rem';
    subExtentionBorderLine[6].style.translate = '0 50rem';
    subExtentionBorderLine[7].style.translate = '0 50rem';
    subExtentionBorderLine[8].style.translate = '0 50rem';
    subExtentionBorderLine[9].style.translate = '0 50rem';
    subExtentionBorderLine[10].style.translate = '0 50rem';
    subExtentionBorderLine[11].style.translate = '0 50rem';
    mainMenuSubSubExtentionNavEquipmentShopByActivity.classList.add('open');
  }
};
function mainMenuSubSubExtentionOpeningAnimationLaptop () {
  if (subSubExtentionClothingShopByActivityOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    subSubExtentionBackgroundClothing.classList.add('open');
    subSubExtentionBackgroundFootwear.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if(subSubExtentionClothingMenOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    subSubExtentionBackgroundClothing.classList.add('open');
    subSubExtentionBackgroundFootwear.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.add('open');
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if(subSubExtentionClothingWomenOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    subSubExtentionBackgroundClothing.classList.add('open');
    subSubExtentionBackgroundFootwear.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.add('open');
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
  };
  if(subSubExtentionFootwearShopByActivityOpen) {
    overflowVisible(mainMenuSubExtentionFootwear);
    subSubExtentionBackgroundFootwear.classList.add('open');
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
  };
  if(subSubExtentionFootwearMenOpen) {
    overflowVisible(mainMenuSubExtentionFootwear);
    subSubExtentionBackgroundFootwear.classList.add('open');
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.add('open');
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.remove('open');
  };
  if(subSubExtentionFootwearWomenOpen) {
    overflowVisible(mainMenuSubExtentionFootwear);
    subSubExtentionBackgroundFootwear.classList.add('open');
    subSubExtentionBackgroundClothing.classList.remove('open');
    subSubExtentionBackgroundEquipment.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearWomen.classList.add('open');
    mainMenuSubSubExtentionNavFootwearShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavFootwearMen.classList.remove('open');
  };
  if(subSubExtentionEquipmentOpen) {
    overflowVisible(mainMenuSubExtentionEquipment);
    subSubExtentionBackgroundEquipment.classList.add('open');
    mainMenuSubSubExtentionNavEquipmentShopByActivity.classList.add('open');
  }
};

mainMenuSubItemClothingShopByActivity.addEventListener('mouseover', () => {
  subSubExtentionClothingShopByActivityOpen = true;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingWomenOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  }
});
mainMenuSubItemClothingMen.addEventListener('mouseover', () => {
  subSubExtentionClothingShopByActivityOpen = false;
  subSubExtentionClothingMenOpen = true;
  subSubExtentionClothingWomenOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  }
});
mainMenuSubItemClothingWomen.addEventListener('mouseover', () => {
  subSubExtentionClothingShopByActivityOpen = false;
  subSubExtentionClothingMenOpen = false;
  subSubExtentionClothingWomenOpen = true;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  };
});
mainMenuSubItemFootwearShopByActivity.addEventListener('mouseover', () => {
  subSubExtentionFootwearShopByActivityOpen = true;
  subSubExtentionFootwearMenOpen = false;
  subSubExtentionFootwearWomenOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  };
});
mainMenuSubItemFootwearMen.addEventListener('mouseover', () => {
  subSubExtentionFootwearShopByActivityOpen = false;
  subSubExtentionFootwearMenOpen = true;
  subSubExtentionFootwearWomenOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  };
});
mainMenuSubItemFootwearWomen.addEventListener('mouseover', () => {
  subSubExtentionFootwearShopByActivityOpen = false;
  subSubExtentionFootwearMenOpen = false;
  subSubExtentionFootwearWomenOpen = true;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  };
});
mainMenuSubItemEquipmentShopByActivity.addEventListener('mouseover', () => {
  subSubExtentionEquipmentOpen = true;
  if (screenWidth < 1024) {
    mainMenuSubSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubSubExtentionOpeningAnimationLaptop();
  };
});




