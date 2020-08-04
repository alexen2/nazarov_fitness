import form from "./form/form";
import header from "./header/header";
import input from "./input/input";
import menu from "./menu/menu";
import modal from "./modal/modal";
import shop from "./shop/shop";
import order from "./order/order";

window.addEventListener("DOMContentLoaded", () => {
	$("#clearData").on("click", function () {
		localStorage.clear();
	});

	form();
	header();
	input();
	menu();
	modal();
	shop();
	order();
});
