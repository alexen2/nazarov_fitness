const orderForm = () => {
  let orderFormDone = true;  

  $('.order-form__required').each(function (index, element) {
    if($(element).val() == '') {
      orderFormDone = false;
      $(element).addClass('order-form__error');
    } else {
      $(element).removeClass('order-form__error');
    }
  });

  return orderFormDone;
}

export default orderForm;