$('.menu__link').on('click', function(e){
  e.preventDefault();
  let linkId = $(this).attr('href');
  $('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 200}, 1000);

});