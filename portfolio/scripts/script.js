const burger_btn = document.querySelector('.menu-btn')
const burger_menu = document.getElementById('burger-menu')
const close_burger = document.querySelector('.menu-close')

const links = document.querySelectorAll('a');

// Loop through each link and set target="_blank"
links.forEach(link => {
  link.setAttribute('target', '_blank');
});

// Open menu
burger_btn.addEventListener('click', () => {
  burger_menu.classList.remove('no-visible', 'animate__slideOutUp');
  burger_menu.classList.add('animate__slideInDown');
});

// Close menu
close_burger.addEventListener('click', () => {
  burger_menu.classList.remove('animate__slideInDown');
  burger_menu.classList.add('animate__slideOutUp');

  // Wait for animation to finish before hiding
  burger_menu.addEventListener('animationend', function handler() {
    burger_menu.classList.add('no-visible');
    burger_menu.removeEventListener('animationend', handler);
  });
});




/* burger_btn.addEventListener('click', ()=>{ 
    burger_menu.classList.remove('no-visible')
    burger_menu.classList.toggle('active')
    

})

close_burger.addEventListener('click', ()=>{ 
        burger_menu.classList.remove('active')
        burger_menu.classList.toggle('no-visible')
        
    } )
 */
