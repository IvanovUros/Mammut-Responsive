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


let screenWidth = screen.width;

addEventListener('resize', () => {
  screenWidth = screen.width;
});

function overflowHidden(x) {
  x.style.overflow = 'hidden';
}
function overflowInitial(x) {
  x.style.overflow = 'initial';
}
function overflowScroll(x) {
  x.style.overflow = 'scroll';
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
      mainMenu.classList.add('open')
    } else {
      setTimeout(function() {
        mainMenu.style.transition = 'none';
      }, 300);
      menuBtn.classList.remove('open');
      menuOpen = false;
      overflowInitial(body);
      mainMenu.classList.remove('open')
      subExtentionClothing.classList.remove('open');
      subExtentionFootwear.classList.remove('open');
      subExtentionEquipment.classList.remove('open');
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemClothing.style.translate = '0 0';
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
      if (screenWidth < 1024) {
        setTimeout (overflowInitial, 300, mainMenu);
      } else {
        setTimeout (overflowHidden, 300, mainMenu);
      };
      menuSubExtentionClothingOpen = false;
    };
});

const menuNavItemClothing = document.getElementById('menuNavItemClothing');
const menuNavItemFootwear = document.getElementById('menuNavItemFootwear');
const menuNavItemEquipment = document.getElementById('menuNavItemEquipment');
const menuNavBorderLine = Array.from(document.getElementsByClassName('main-menu-main-nav-border-line'));

const subExtentionClothing = document.getElementById('subExtentionClothing');
const subExtentionFootwear = document.getElementById('subExtentionFootwear');
const subExtentionEquipment = document.getElementById('subExtentionEquipment');

let menuSubExtentionClothingOpen = false;
menuNavItemClothing.addEventListener('mouseover', () => {
  menuSubExtentionClothingOpen = true;
  subExtentionClothing.classList.add ('open');
  subExtentionFootwear.classList.remove('open');
  subExtentionEquipment.classList.remove('open');
  if (screenWidth < 1024) {
    overflowScroll(mainMenu);
    menuNavBorderLine.forEach(menuNavBorderLine => {
      menuNavBorderLine.style.translate = '0 100rem';
    });
    menuNavItemFootwear.style.translate = '0 100rem';
    menuNavItemEquipment.style.translate = '0 100rem';
  } else {
    overflowInitial(mainMenu);
  }
});
menuNavItemFootwear.addEventListener('mouseover', () => {
  subExtentionClothing.classList.remove('open');
  subExtentionFootwear.classList.add ('open');
  subExtentionEquipment.classList.remove('open');
  if (screenWidth < 1024) {
    overflowScroll(mainMenu);
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 100rem';
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 100rem';
  } else {
    overflowInitial(mainMenu);
  }
});
menuNavItemEquipment.addEventListener('mouseover', () => {
  subExtentionEquipment.classList.add ('open');
  subExtentionClothing.classList.remove('open');
  subExtentionFootwear.classList.remove('open');
  if (screenWidth < 1024) {
    overflowScroll(mainMenu);
    menuNavBorderLine[2].style.translate = '0 100rem';
    menuNavBorderLine[0].style.translate = '0 0';
    menuNavBorderLine[1].style.translate = '0 0';
    menuNavItemClothing.style.translate = '0 0';
    menuNavItemFootwear.style.translate = '0 0';
    menuNavItemEquipment.style.translate = '0 0';
  } else {
    overflowInitial(mainMenu);
  }
});
addEventListener('resize', () => {
  if (menuSubExtentionClothingOpen) {
    if (screenWidth < 1024) {
      overflowScroll(mainMenu);
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 100rem';
      });
      menuNavItemFootwear.style.translate = '0 100rem';
      menuNavItemEquipment.style.translate = '0 100rem';
    } else {
      overflowInitial(mainMenu);
      menuNavBorderLine.forEach(menuNavBorderLine => {
        menuNavBorderLine.style.translate = '0 0';
      });
      menuNavItemFootwear.style.translate = '0 0';
      menuNavItemEquipment.style.translate = '0 0';
    };
  };
});