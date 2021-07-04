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