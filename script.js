$('nav ul li a').on('click', function(){
  const goToSection = '#' + $(this).attr('class');
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top    
  })
})

const windowHeight = $(window).height();

$(document).on('scroll', function(){
  if($(window).scrollTop() > windowHeight){
    $('nav ul').addClass('active');
  }
  else{
    $('nav ul').removeClass('active');
  }
})

const burger = document.querySelector('.fa-comment-dots');
const MSG = document.querySelector('.messege div');


burger.addEventListener('click', function(){
  MSG.classList.toggle('activeMSG');  
})
const messege = document.querySelector('.messege');
messege.style.opacity = '0';


window.addEventListener('scroll', function(){   
  messege.style.transition = '0.2s';  
    if (scrollY  > 1500) {
    messege.style.opacity = '1';
   
   
  } else {  
    messege.style.opacity = '0';    
}
})

