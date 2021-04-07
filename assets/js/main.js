document.addEventListener("DOMContentLoaded", function(event) { 
 
    
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';

    setTimeout(cleanup, 1000);
}

function cleanup() {
    mainMenu.style.display = 'none';

}





var divs = document.querySelectorAll('.caro_item'), i;

for (i = 0; i < divs.length; ++i) {
//   divs[i].style.color = "green";

divs[i].addEventListener('mouseenter', function(e){

    
    //   console.log(this.children[0]);

      this.children[0].classList.remove('make-red');
      this.children[0].classList.add('make-white');
     
})
}

for (i = 0; i < divs.length; ++i) {
    //   divs[i].style.color = "green";
    
    divs[i].addEventListener('mouseleave', function(e){
    
        
        //   console.log(this.children[0]);
    
          this.children[0].classList.add('make-red');
          this.children[0].classList.remove('make-white');
         
    })
    }
    







  });


