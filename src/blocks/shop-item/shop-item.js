import cart from '../shop-sidebar/shop-sidebar';
import orderListItem from '../order-list-item/order-list-item';

const shopItem = () => {
  $('.addToCart').on('click', function() {
    let productId = $(this).attr('data-id');
    cart(productId);
    orderListItem();
  });
}

export default shopItem;