const cart = (producId) => {
  let cartData = JSON.parse(localStorage.getItem('cartData')) || {};
  let catalogData = JSON.parse(localStorage.getItem('catalogData'));
  let catTitles = JSON.parse(localStorage.getItem('catTitles'));

  if(producId) {
    if(!cartData[producId]) {
      addProduct(producId);
    } else {
      refreshProductCount(producId);    
    }

    localStorage.setItem('cartData', JSON.stringify(cartData));
  }  

  refreshProductsPrice();
  renderCartList(cartData);
  renderDelivery();
  renderTotal();

  function addProduct(id) {
    cartData[id] = {
      title: catTitles[id],
      price: catalogData[id],
      count: 1
    }
  }

  function refreshProductCount(id) {
    cartData[id].count += 1;
  }

  function refreshProductsPrice() {
    for(let key in cartData) {
      cartData[key].price = catalogData[key]
    }
  }

  function renderCartList(data) {
    let cartList = $('#shopSidebarList');
    cartList.html('');

    for(let key in data) {
      let li = document.createElement('li');
      li.className = 'shop-sidebar__item';
      li.innerHTML = `
        <div class="shop-sidebar-product">
          <div class="shop-sidebar-product__body">
            <span class="shop-sidebar-product__count">${data[key].count} x </span>
            <span class="shop-sidebar-product__title">${data[key].title}</span>
          </div>

          <div class="shop-sidebar-product__price">${data[key].price}, 00 ₽</div>
        </div>
      `;
      cartList.append(li);
    }
  }

  function renderTotal() {
    let totalSum = 0;

    for(let key in cartData) {
      totalSum += cartData[key].count * cartData[key].price;
    }

    $('.shop-sidebar__footer-total').html(totalSum + ', 00 ₽');
  }
  
  function renderDelivery() {
    let countProduct = 0;

    for(let key in cartData) {
      countProduct += cartData[key].count;
    }

    if(countProduct < 12) {
      $('.shop-sidebar__footer-delivery').html('300, 00 ₽');
    } else {
      $('.shop-sidebar__footer-delivery').html('0, 00 ₽');
    }
  }  
}
export default cart;