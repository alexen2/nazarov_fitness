import cart from '../shop-sidebar/shop-sidebar';
import order from '../order/order';

const refreshData = (state) => {
  let currentCity = localStorage.getItem('cityName');
  let catalogData = localStorage.getItem('catalogData');

  citySelectRefresh(currentCity);
  catalogRefresh(catalogData);
  cartRefresh();
  orderRefresh();
}

function citySelectRefresh(city) {
  $('.city-select option[value='+city+']').prop('selected', true);
  $('.city-select option[value=select_city]').remove();
}
function catalogRefresh(catalogData) {
  let catalog = JSON.parse(catalogData);
  let cart = JSON.parse(localStorage.getItem('cartData')) || {};
  
  for(let key in catalog) {
    $('#' + key).find('.shop-item__price span').html(catalog[key]);
  }

  if(!$.isEmptyObject(cart)) {
    for(let key in cart) {
      cart[key].price = catalog[key];
    }
  }  

  localStorage.setItem('cartData', JSON.stringify(cart));
}
function orderRefresh(catalogData) {
  order();
}
function cartRefresh() {
  cart();
}
function cartCityRefresh(catalogData) {

}

export default refreshData;