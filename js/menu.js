'use strict';

document.querySelector(".menu__burger--show").onclick = function() {
	document.querySelector(".menu__items--mobile").classList.toggle("menu__items--mobile-show");
	document.querySelector(".menu__burger--show").classList.toggle("menu__burger--hide");
}
