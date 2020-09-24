import cart from '../shop-sidebar/shop-sidebar';
import orderListItem from '../order-list-item/order-list-item';

const productPage = () => {
	if($('.productPageAddToCart').length) {
		const addToCard = $('.productPageAddToCart');
		const productID = $(addToCard).data('id');
		let producCount = parseInt($('.quantity').find('input').val());

		$('.quantity-down').on('click', function() {
			if(producCount > 1) {
				producCount -= 1;
				$('.quantity').find('input').val(producCount);
			}
		});

		$('.quantity-up').on('click', function() {
			producCount += 1;
			$('.quantity').find('input').val(producCount);
		});

		$(addToCard).on('click', function() {
			for(let i = producCount; i > 0; i--) {
				cart(productID);
    		orderListItem();
			}
		});		
	}
}

export default productPage;
