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

  if(!$('.order-form__iagree input').prop('checked')) {
    orderFormDone = false;
    $('.order-form__iagree').addClass('order-form__error');
  } else {
    $('.order-form__iagree').removeClass('order-form__error');
  }

  if(orderFormDone) {
    sendOrderForm();
  }

  return orderFormDone;
}

function sendOrderForm() {
  console.log('sendOrderForm');
}

export default orderForm;