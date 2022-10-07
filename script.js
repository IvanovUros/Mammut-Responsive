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

const subExtentionClothing = document.getElementById('subExtentionClothing');
const subExtentionFootwear = document.getElementById('subExtentionFootwear');
const subExtentionEquipment = document.getElementById('subExtentionEquipment');

const subExtentionClothingShopByActivity = document.getElementById('subExtentionClothingShopByActivity');
const subExtentionClothingMen = document.getElementById('subExtentionClothingMen');
const subExtentionClothingWomen = document.getElementById('subExtentionClothingWomen');
const subExtentionBorderLine = Array.from(document.getElementsByClassName('main-menu-sub-extention-nav-border-line'));

const clothingSubSubExtentionShopByActivity = document.getElementById('clothingSubSubExtentionShopByActivity');
const clothingSubSubExtentionMen = document.getElementById('clothingSubSubExtentionMen');
const clothingSubSubExtentionWomen = document.getElementById('clothingSubSubExtentionWomen');

const mainMenuSubExtentionNavWrapper = Array.from(document.getElementsByClassName('main-menu-sub-extention-nav-wrapper'));



let screenWidth = screen.width;
let subExtentionClothingOpen = false;
let subExtentionFootwearOpen = false;
let subExtentionEquipmentOpen = false;

window.addEventListener('resize', () => {
  screenWidth = screen.width;
});

function overflowHidden(x) {
  x.style.overflow = 'hidden';
};
function overflowInitial(x) {
  x.style.overflow = 'initial';
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
      overflowInitial(body);
      mainMenu.classList.remove('open');
      subExtentionClothing.classList.remove('open');
      subExtentionFootwear.classList.remove('open');
      subExtentionEquipment.classList.remove('open');
      setTimeout(function () {
        mainMenu.classList.remove('initial');
        mainMenu.classList.remove('scroll');
      }, 250);
      subExtentionClothingOpen = false;
      subExtentionFootwearOpen = false;
      subExtentionEquipmentOpen = false;
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemClothing.style.translate = '0 0';
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
      subExtentionBorderLine.forEach(subExtentionBorderLine => {
        subExtentionBorderLine.style.translate = '0 0';
      });
      clothingSubSubExtentionShopByActivity.style.height = '0';
      clothingSubSubExtentionMen.style.height = '0';
      clothingSubSubExtentionWomen.style.height = '0';
      subExtentionClothingMen.style.translate = '0 0';
      subExtentionClothingWomen.style.translate = '0 0';
    };
});
menuNavItemClothing.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.transition = 'all .4s ease-in-out';
    subExtentionFootwear.style.transition = 'all .4s ease-in-out';
    subExtentionEquipment.style.transition = 'all .4s ease-in-out';
    mainMenu.classList.add('scroll');
    menuNavBorderLine.forEach(menuNavBorderLine => {
      menuNavBorderLine.style.translate = '0 100rem';
    });
    menuNavItemFootwear.style.translate = '0 100rem';
    menuNavItemEquipment.style.translate = '0 100rem';
  } else {
    mainMenu.classList.add ('initial');
  };
  subExtentionClothing.classList.add('open');
  subExtentionFootwear.classList.remove('open');
  subExtentionEquipment.classList.remove('open');
  subExtentionClothingOpen = true;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = false;
});
menuNavItemFootwear.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.transition = 'all .4s ease-in-out';
    subExtentionFootwear.style.transition = 'all .4s ease-in-out';
    subExtentionEquipment.style.transition = 'all .4s ease-in-out';
    mainMenu.classList.add('scroll');
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 100rem';
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 100rem';
  } else {
    mainMenu.classList.add('initial');
  };
  subExtentionFootwear.classList.add('open');
  subExtentionClothing.classList.remove('open');
  subExtentionEquipment.classList.remove('open');
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = true;
  subExtentionEquipmentOpen = false;
});
menuNavItemEquipment.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.transition = 'all .4s ease-in-out';
    subExtentionFootwear.style.transition = 'all .4s ease-in-out';
    subExtentionEquipment.style.transition = 'all .4s ease-in-out';
    mainMenu.classList.add('scroll');
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 0';
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 0';
  } else {
    mainMenu.classList.add('initial');
  };
  subExtentionEquipment.classList.add('open');
  subExtentionClothing.classList.remove('open');
  subExtentionFootwear.classList.remove('open');
  subExtentionClothingOpen = false;
  subExtentionFootwearOpen = false;
  subExtentionEquipmentOpen = true;
});

window.addEventListener('resize', () => {
  if (screenWidth >= 1024) {
    if (subExtentionClothingOpen) {
      mainMenu.classList.remove('scroll');
      mainMenu.classList.add('initial');
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemClothing.style.translate = '0 0';
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
    };
    if (subExtentionFootwearOpen) {
      mainMenu.classList.remove('scroll');
      mainMenu.classList.add('initial');
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemClothing.style.translate = '0 0';
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
    };
    if (subExtentionEquipmentOpen) {
      mainMenu.classList.remove('scroll');
      mainMenu.classList.add('initial');
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemClothing.style.translate = '0 0';
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
    };
  } else {
    if (subExtentionClothingOpen) {
      mainMenu.classList.remove('initial');
      mainMenu.classList.add('scroll');
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 100rem';
      });
      menuNavItemFootwear.style.translate = '0 100rem';
      menuNavItemEquipment.style.translate = '0 100rem';
    };
    if (subExtentionFootwearOpen) {
      mainMenu.classList.remove('initial');
      mainMenu.classList.add('scroll');
      menuNavBorderLine[0].style.translate = '0 0';
      menuNavBorderLine[1].style.translate = '0 100rem';
      menuNavBorderLine[2].style.translate = '0 100rem';
      menuNavItemEquipment.style.translate = '0 100rem';
    };
    if (subExtentionEquipmentOpen) {
      mainMenu.classList.remove('initial');
      mainMenu.classList.add('scroll');
      menuNavBorderLine[0].style.translate = '0 0';
      menuNavBorderLine[1].style.translate = '0 0';
      menuNavBorderLine[2].style.translate = '0 100rem';
      
    };
  };
});
subExtentionClothingShopByActivity.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.overflow = 'auto';
    mainMenuSubExtentionNavWrapper[0].style.overflow = 'auto';
    subExtentionBorderLine.forEach(subExtentionBorderLine => {
    subExtentionBorderLine.style.translate = '0 40rem';
    });
    subExtentionClothingMen.style.translate = '0 40rem';
    subExtentionClothingWomen.style.translate = '0 40rem';
    clothingSubSubExtentionShopByActivity.style.height = '40rem';
    clothingSubSubExtentionMen.style.height = '0';
    clothingSubSubExtentionWomen.style.height = '0';
  } else {
    subExtentionClothing.style.overflow = 'visible';
    clothingSubSubExtentionShopByActivity.style.width = 'calc(100vw/3)';
  }
});
subExtentionClothingMen.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.overflow = 'auto';
    subExtentionClothingMen.style.translate = '0 0';
    subExtentionClothingWomen.style.translate = '0 40rem';
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 40rem';
    subExtentionBorderLine[2].style.translate = '0 40rem';
  
    clothingSubSubExtentionShopByActivity.style.height = '0';
    clothingSubSubExtentionMen.style.height = '40rem';
    clothingSubSubExtentionWomen.style.height = '0';
  } else {

  }

});
subExtentionClothingWomen.addEventListener('mouseover', () => {
  if (screenWidth < 1024) {
    subExtentionClothing.style.overflow = 'auto';
    subExtentionClothingMen.style.translate = '0 0';
    subExtentionClothingWomen.style.translate = '0 0';
    subExtentionBorderLine[0].style.translate = '0 0';
    subExtentionBorderLine[1].style.translate = '0 0';
    subExtentionBorderLine[2].style.translate = '0 40rem';

    clothingSubSubExtentionShopByActivity.style.height = '0';
    clothingSubSubExtentionMen.style.height = '0';
    clothingSubSubExtentionWomen.style.height = '40rem';
  }
});






