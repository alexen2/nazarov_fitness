import city from "../city/city";
import shopItem from "../shop-item/shop-item";
import cart from "../shop-sidebar/shop-sidebar";

const shop = () => {
	loadShopCatTitles();
	city();
	shopItem();
	cart();
};

function loadShopCatTitles() {
	let catTitles = {
		borshch_s_mitbolami: "Борщ",
		solyanka_s_mitbolami: "Солянка",
		suplapsha_s_mitbolami: "Суп лапша куриная",
		lagman_s_mitbolami: "Лагман",
		tom_yam_s_fishbolami: "Том Ям",
		tom_kkha_s_mitbolami: "Том Кха",
		ma_po_tofu_s_farshem: "Ма По Тофу",
		fo_s_mitbolami: "Фо с митболами",
		miso_s_fishbolami: "Мисо",
	};

	localStorage.setItem("catTitles", JSON.stringify(catTitles));
}

export default shop;
