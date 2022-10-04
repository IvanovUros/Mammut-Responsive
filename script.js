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
    }
});

const menuNavItemClothing = document.getElementById('menuNavItemClothing');
const menuNavItemFootwear = document.getElementById('menuNavItemFootwear');
const menuNavItemEquipment = document.getElementById('menuNavItemEquipment');
const menuNavBorderLine = Array.from(document.getElementsByClassName('main-menu-main-nav-border-line'));

const subExtentionClothing = document.getElementById('subExtentionClothing');
const subExtentionFootwear = document.getElementById('subExtentionFootwear');
const subExtentionEquipment = document.getElementById('subExtentionEquipment');



menuNavItemClothing.addEventListener("mouseover", () => {
  subExtentionClothing.style.height = '100rem';
  subExtentionFootwear.style.height = '0rem';
  menuNavItemFootwear.style.translate = '0 100rem';
  menuNavItemEquipment.style.translate = '0 100rem';
  subExtentionEquipment.style.height = '0rem';
  menuNavBorderLine.forEach(menuNavBorderLine => {
    menuNavBorderLine.style.translate = '0 100rem';
  });
});
menuNavItemFootwear.addEventListener("mouseover", () => {
  subExtentionClothing.style.height = '0rem';
  menuNavItemFootwear.style.translate = '0 0';
  subExtentionFootwear.style.height = '100rem';
  menuNavBorderLine[0].style.translate = '0 0';
  menuNavBorderLine[1].style.translate = '0 100rem';
  menuNavBorderLine[2].style.translate = '0 100rem';
  subExtentionEquipment.style.height = '0rem';
  menuNavItemEquipment.style.translate = '0 100rem';
});
menuNavItemEquipment.addEventListener("mouseover", () => {
  subExtentionClothing.style.height = '0rem';
  subExtentionFootwear.style.height = '0rem';
  subExtentionEquipment.style.height = '100rem';
  menuNavItemEquipment.style.translate = '0 0';
  menuNavBorderLine[2].style.translate = '0 100rem';
  menuNavBorderLine[0].style.translate = '0 0';
  menuNavBorderLine[1].style.translate = '0 0';
  menuNavItemFootwear.style.translate = '0 0rem';
});
mainMenuNavWrapper.addEventListener('mouseout', () => {
  subExtentionClothing.style.height = '0rem';
  subExtentionFootwear.style.height = '0rem';
  subExtentionEquipment.style.height = '0rem';
  menuNavItemClothing.style.translate = '0 0rem';
  menuNavItemFootwear.style.translate = '0 0rem';
  menuNavItemEquipment.style.translate = '0 0rem';
  menuNavBorderLine.forEach(menuNavBorderLine => {
    menuNavBorderLine.style.translate = '0 0rem';
  });
});





  






