import orderList from '../order-list/order-list';
import orderListItem from '../order-list-item/order-list-item';
import orderForm from '../order-form/order-form';

const order = () => {
  orderList();
  orderListItem();

  $('#orderDone').on('click', function() {
    if(orderForm()) {
      console.log('orderDone');
    } else {
      console.log('orderFalse');
    }
  });
}

export default order;