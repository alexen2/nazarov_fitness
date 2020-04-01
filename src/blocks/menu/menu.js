$('.menu__item--dropdown').on('click', function(e) {
  if($(window).width() < 1199) {
    e.preventDefault();

    if($(this).find('.menu__level-2--open').length) {
      $(this).find('.menu__level-2').fadeOut(500);
    } else {
      $(this).find('.menu__level-2').fadeIn(500);
    }
  
    $(this).find('.menu__level-2').toggleClass('menu__level-2--open');
  }
});


// jQuery(function($){
// 	$(document).mouseout(function (e){
//     let div = $('.menu__level-2');
//     let user_bag = $('.menu__item--dropdown'); 
// 		if (!div.is(e.target) && div.has(e.target).length === 0) { 
//       if(!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
//         $('.menu__level-2--open').fadeOut(500);
//         div.removeClass('menu__level-2--open');
//       }
// 		}
// 	});
// });

$('.menu__level-2').on('click', function(e) {
  e.stopPropagation();
});