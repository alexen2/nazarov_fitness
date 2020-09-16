const header = () => {
	$(".header__btn").click(function () {
		if ($("body .header__btn--opened").length) {
			$(".header__right").fadeOut(100);
		} else {
			$(".header__right").fadeIn(100);
		}

		$(".header__right").toggleClass("header__mobile");
		$(".header__btn").toggleClass("header__btn--opened");
		$("body").toggleClass("overflow-heidden ");
	});
	$(window).resize(function () {
		if ($(window).width() > 991) {
			$(".header__btn").removeClass("header__btn--opened");
		}
	});
	let scrolled = 0;

	changeScrolled();

	$(window).scroll(function () {
		let $this = $(this),
			st = $this.scrollTop();

		menuScrollDesktop(st);
	});

	$(window).resize(function () {
		let st = $(window).width();

		menuDesktopShow(st);
		changeScrolled();
	});

	function menuScrollDesktop(st) {
		if (st > scrolled) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	}

	function menuDesktopShow(st) {
		if (st > 992) {
			$(".header__right").attr("style", "");

			if ($(".overflow-heidden").length) {
				$("body").removeClass("overflow-heidden");
			}
		}
	}

	function changeScrolled() {
		scrolled = 0;
	}
};

export default header;
