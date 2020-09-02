import headerCart from '../header/header--cart';

const orderList = () => {
  let cartData = JSON.parse(localStorage.getItem('cartData')) || {};
  
  renderOrderList(cartData);
  rederOrderTotal(cartData);

  function renderOrderList(data) {
    let orderItemCount = 0;
    let orderList = $('#orderList');
    orderList.html('');

    for(let key in data) {
      ++orderItemCount;

      let li = document.createElement('li');
      li.className = 'order-list__item';
      li.innerHTML = `
        <div class="order-list-item">
          <div class="order-list-item__body">
            <span class="order-list-item__number">${orderItemCount}.</span>
            <span class="order-list-item__title">${data[key].title}</span>
          </div>
      
          <div class="order-list-item__action">
            <div class="order-list-item__price">${data[key].price},00 ₽</div>
            <div class="order-list-item__action-body">
              <button class="btn cartDel" type="button" data-id="${key}">
                <svg class="icon icon--cart-del ">
                  <use xlink:href="images/icons.svg#icon--cart-del"></use>
                </svg>
              </button>
      
              <div class="order-list-item__count-wrap">
                <button class="btn cartMinus" type="button" data-id="${key}"><span class="btn__text">-</span></button>
                <span class="order-list-item__count">${data[key].count}</span>
                <button class="btn cartPlus" type="button" data-id="${key}"><span class="btn__text">+</span></button>
              </div>
            </div>
          </div>
        </div>
      `;
      orderList.append(li);
    }
  }

  function rederOrderTotal(data) {
    let orderSumTotal = 0;
    let orderSumDelivery = 300;
    let orderSumTotalDelivery = 0;
    let orderCountProduct = 0;

    let orderTotal = $('.order-list__total');
    let orderDelivery = $('.order-list__delivery');
    let orderTotalDelivery = $('.order-list__total-delivery');

    for(let key in data) {
      orderCountProduct += data[key].count;

      orderSumTotal += data[key].count * data[key].price;
    }

    orderTotal.html(orderSumTotal + ' ₽');

    if(orderCountProduct > 11) {
      orderSumDelivery = 0;
    }

    orderDelivery.html(orderSumDelivery + ' ₽');

    orderTotalDelivery.html(orderSumTotal + orderSumDelivery + ' ₽');

    headerCart(orderCountProduct);
  }
}

export default orderList;