"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var mainMenu = document.querySelector('.mainMenu');
  var closeMenu = document.querySelector('.closeMenu');
  var openMenu = document.querySelector('.openMenu');
  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);

  function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
  }

  function close() {
    mainMenu.style.top = '-100%';
  }

  var divs = document.querySelectorAll('.caro_item'),
      i;

  for (i = 0; i < divs.length; ++i) {
    //   divs[i].style.color = "green";
    divs[i].addEventListener('mouseenter', function (e) {
      //   console.log(this.children[0]);
      this.children[0].classList.remove('make-red');
      this.children[0].classList.add('make-white');
    });
  }

  for (i = 0; i < divs.length; ++i) {
    //   divs[i].style.color = "green";
    divs[i].addEventListener('mouseleave', function (e) {
      //   console.log(this.children[0]);
      this.children[0].classList.add('make-red');
      this.children[0].classList.remove('make-white');
    });
  }
});