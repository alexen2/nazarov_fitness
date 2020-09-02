const tabs = () => {
  $('.tabs__link').on('click', function(e) {
    e.preventDefault();

    let tabId = $(this).attr('href');

    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    
    $('.product-page__tab').removeClass('product-page__tab--active');
    $(tabId).addClass('product-page__tab--active');
  });
}

export default tabs;