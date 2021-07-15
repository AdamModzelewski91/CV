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
const MSG = document.querySelector('.messege div')

burger.addEventListener('click', function(){
  MSG.classList.toggle('activeMSG');  
})
