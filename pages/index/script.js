const hamburger = document.querySelector(".mobile-nav-header");
const mobileNav = document.querySelector(".mobile-nav");
const x = document.querySelector(".fa-xmark");

hamburger.addEventListener("click", () => {
	mobileNav.classList.toggle("active");
});

x.addEventListener("click", () => {
	mobileNav.classList.toggle("active");
});

window.onscroll = function (event) {
	if (mobileNav.classList.contains("active")) {
		mobileNav.classList.toggle("active");
	}
};

(function () {
	var doc = document.documentElement;
	var w = window;

	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;

	var header = document.getElementById("site-header");

	var checkScroll = function () {
		/*
		 ** Find the direction of scroll
		 ** 0 - initial, 1 - up, 2 - down
		 */

		curScroll = w.scrollY || doc.scrollTop;
		if (curScroll > prevScroll) {
			//scrolled up
			direction = 2;
		} else if (curScroll < prevScroll) {
			//scrolled down
			direction = 1;
		}

		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}

		prevScroll = curScroll;
	};

	var toggleHeader = function (direction, curScroll) {
		if (direction === 2 && curScroll > 48) {
			//replace 52 with the height of your header in px

			header.classList.add("hide");
			prevDirection = direction;
		} else if (direction === 1) {
			header.classList.remove("hide");
			prevDirection = direction;
		}
	};

	window.addEventListener("scroll", checkScroll);
})();
