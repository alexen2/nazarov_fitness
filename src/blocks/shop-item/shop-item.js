import cart from '../shop-sidebar/shop-sidebar';

const shopItem = () => {
  $('.addToCart').on('click', function() {
    let productId = $(this).attr('data-id');
    cart(productId);
  });
}

export default shopItem;