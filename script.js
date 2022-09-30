const logoWrapper = document.getElementById('logoWrapper');
const overheadBar = document.getElementById('overheadBar');
const menuBtn = document.getElementById('menuBtn');
const loopBasketWrapper = document.getElementById('loopBasketWrapper');
const loopBasketItem = Array.from(document.getElementsByClassName('loopBasketItem'));
const loopBasketItemElement = Array.from(document.getElementsByClassName('loopBasketItemElement'));
const loopBasketItemElementWithBorder = Array.from(document.getElementsByClassName('loopBasketItemElementWithBorder'));
let screenWidth = screen.width;
console.log(screenWidth);


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
}