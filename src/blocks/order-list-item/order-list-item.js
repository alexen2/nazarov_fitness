import refreshData from '../refresh-data/refresh-data';

const orderListItem = () => {
  $('.cartDel').on('click', function() {
    let orderItemId = $(this).attr('data-id');
    let cartData = JSON.parse(localStorage.getItem('cartData')) || {};

    delete cartData[orderItemId];

    localStorage.setItem('cartData', JSON.stringify(cartData));

    refreshData();
  });

  $('.cartMinus').on('click', function() {
    let orderItemId = $(this).attr('data-id');
    let cartData = JSON.parse(localStorage.getItem('cartData')) || {};

    if(cartData[orderItemId].count > 1) {
      cartData[orderItemId].count -= 1;
    }

    localStorage.setItem('cartData', JSON.stringify(cartData));

    refreshData();
  });

  $('.cartPlus').on('click', function() {
    let orderItemId = $(this).attr('data-id');
    let cartData = JSON.parse(localStorage.getItem('cartData')) || {};

    cartData[orderItemId].count += 1;

    localStorage.setItem('cartData', JSON.stringify(cartData));

    refreshData();
  });
}

export default orderListItem;