import orderList from '../order-list/order-list';
import orderListItem from '../order-list-item/order-list-item';
import orderForm from '../order-form/order-form';

const order = () => {
  orderList();
  orderListItem();

  let cityName = $('.city-select option:selected').html();
  $('.order-form [name="order_city"]').val(cityName);

  $('#orderDone').on('click', function(e) {
    e.preventDefault();
    
    if(orderForm()) {
      $('.order').html('');
      console.log('orderDone');
    } else {
      console.log('orderFalse');
    }
  });
}

export default order;