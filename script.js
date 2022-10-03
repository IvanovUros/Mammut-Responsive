const body = document.getElementById('body');
const logoWrapper = document.getElementById('logoWrapper');
const overheadBar = document.getElementById('overheadBar');
const menuBtn = document.getElementById('menuBtn');
const menuBtnBurgerTop = document.getElementById('menuBtnBurgerTop');
const menuBtnBurgerMid = document.getElementById('menuBtnBurgerMid');
const menuBtnBurgerBtm = document.getElementById('menuBtnBurgerBtm');
const loopBasketWrapper = document.getElementById('loopBasketWrapper');
const loopBasketItem = Array.from(document.getElementsByClassName('loopBasketItem'));
const loopBasketItemElement = Array.from(document.getElementsByClassName('loopBasketItemElement'));
const loopBasketItemElementWithBorder = Array.from(document.getElementsByClassName('loopBasketItemElementWithBorder'));
const mainMenuOpenClosSwitch = document.getElementById('mainMenuOpenCloseSwitch');
const mainMenu = document.getElementById('mainMenu');
let screenWidth = screen.width;

addEventListener('resize', () => {
  screenWidth = screen.width;
  console.log(screenWidth);
  console.log(menuOpen);
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
  menuBtn.style.translate = '0';
  loopBasketWrapper.style.translate = '0';
  loopBasketWrapper.style.width = '170px';
},1000);
setTimeout( function loopBasketItemAnimation() {
  loopBasketItem.forEach(loopBasketItem => {
  });
},1500);
} else {
  onload = () => {
    overheadBar.style.width = '90%';
      setTimeout( function logoAnimation() {
          logoWrapper.style.translate = '0';
        },1000);
  };
  setTimeout( function menuWrapperAnimation() {
    menuBtn.style.translate = '0';
    loopBasketWrapper.style.translate = '0';
    loopBasketWrapper.style.width = '170px';
  },1000);
  setTimeout( function loopBasketItemAnimation() {
    loopBasketItem.forEach(loopBasketItem => {
    });
  },1000);
};


menuBtn.addEventListener('click', () =>{
  if (screenWidth < 1024) {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      overflowHidden(body);
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      overflowInitial(body);
    }
  } else {
    if (!menuOpen) {
      menuBtn.classList.add('open-laptop');
      menuOpen = true;
      overflowHidden(body);
    } else {
      menuBtn.classList.remove('open-laptop');
      menuOpen = false;
      overflowInitial(body);
    }
  }
});

menuBtn.addEventListener('click', () => {
  console.log(menuOpen);
});