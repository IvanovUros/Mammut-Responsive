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
  subExtentionBorderLine.forEach(subExtentionBorderLine => {
    subExtentionBorderLine.style.translate = '0 0';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
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
    mainMenuSubExtentionClothing.classList.add('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  }
  if (subExtentionFootwearOpen) {
    overflowVisible(mainMenu);
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.add('open');
    mainMenuSubExtentionEquipment.classList.remove('open');
  }
  if (subExtentionEquipmentOpen) {
    overflowVisible(mainMenu);
    mainMenuSubExtentionClothing.classList.remove('open');
    mainMenuSubExtentionFootwear.classList.remove('open');
    mainMenuSubExtentionEquipment.classList.add('open');
  }
};
menuNavItemClothing.addEventListener('mouseover',() => {
  subExtentionClothingOpen = true;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
  }
});
menuNavItemFootwear.addEventListener('mouseover',() => {
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = true;
  subExtentionEquipmentOpen = false;
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
  }
});
menuNavItemEquipment.addEventListener('mouseover',() => {
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = true;
  if (screenWidth < 1024) {
    mainMenuSubExtentionOpeningAnimationMobile();
  } else {
    mainMenuSubExtentionOpeningAnimationLaptop();
  }
});


const subExtentionBorderLine = Array.from(document.getElementsByClassName('main-menu-sub-extention-border-line'));
const mainMenuSubItemClothingShopByActivity = document.getElementById('mainMenuSubItemClothingShopByActivity');
const mainMenuSubItemClothingMen = document .getElementById('mainMenuSubItemClothingMen');
const mainMenuSubItemClothingWomen = document .getElementById('mainMenuSubItemClothingWomen');
const mainMenuSubSubExtentionNavClothingShopByActivity = document.querySelector('.main-menu-sub-sub-nav-clothing-shop-by-activity');
const mainMenuSubSubExtentionNavClothingMen = document.querySelector('.main-menu-sub-sub-nav-clothing-men');
const mainMenuSubSubExtentionNavClothingWomen = document.querySelector('.main-menu-sub-sub-nav-clothing-women');

function mainMenuSubSubExtentionOpeningAnimationMobile () {
  if (subSubExtentionClothingShopByActivityOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 60rem';
    subExtentionBorderLine[1].style.translate = '0 60rem';
    subExtentionBorderLine[2].style.translate = '0 60rem';
    mainMenuSubItemClothingMen.style.translate = '0 60rem';
    mainMenuSubItemClothingWomen.style.translate = '0 60rem';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  }
  if (subSubExtentionClothingMenOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 60rem';
    subExtentionBorderLine[2].style.translate = '0 60rem';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 60rem';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.add('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  }
  if (subSubExtentionClothingWomenOpen) {
    overflowScroll(mainMenuSubExtentionClothing);
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 0';
    subExtentionBorderLine[2].style.translate = '0 60rem';
    mainMenuSubItemClothingShopByActivity.style.translate = '0 0';
    mainMenuSubItemClothingMen.style.translate = '0 0';
    mainMenuSubItemClothingWomen.style.translate = '0 0';
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.add('open');
  }
};
function mainMenuSubSubExtentionOpeningAnimationLaptop () {
  if (subSubExtentionClothingShopByActivityOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.add('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if(subSubExtentionClothingMenOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.add('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.remove('open');
  };
  if(subSubExtentionClothingWomenOpen) {
    overflowVisible(mainMenuSubExtentionClothing);
    mainMenuSubSubExtentionNavClothingShopByActivity.classList.remove('open');
    mainMenuSubSubExtentionNavClothingMen.classList.remove('open');
    mainMenuSubSubExtentionNavClothingWomen.classList.add('open');
  };
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
  }
});


