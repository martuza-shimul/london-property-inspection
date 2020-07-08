const header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	if (scrollPos > 80) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

$("body").scrollspy({ target: ".navbar" });

$(document).ready(function () {
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy("refresh");
	});
});

var service = document.querySelector(".service-item");
var serviceName;
var eicrSub = document.querySelector(".eicr-sub");
var gasSub = document.querySelector(".gas-sub");
var epcSub = document.querySelector(".epc-sub");
var patSub = document.querySelector(".pat-sub");
var patcSub = document.querySelector(".patc-sub");

document.querySelector(".service-item").addEventListener("change", function () {
	// console.log("You selected: ", this.value);
	serviceName = this.value.trim();
	// console.log(serviceName);
	if (serviceName == "Electrical Certificate (EICR) - Residential") {
		eicrSub.classList.remove("hide");

		gasSub.classList.add("hide");
		epcSub.classList.add("hide");
		patSub.classList.add("hide");
		patcSub.classList.add("hide");
	} else if (serviceName == "Gas Safety Certificate - CP12") {
		gasSub.classList.remove("hide");
		eicrSub.classList.add("hide");

		epcSub.classList.add("hide");
		patSub.classList.add("hide");
		patcSub.classList.add("hide");
	} else if (serviceName == "EPC (Residential)") {
		epcSub.classList.remove("hide");
		eicrSub.classList.add("hide");
		gasSub.classList.add("hide");

		patSub.classList.add("hide");
		patcSub.classList.add("hide");
	} else if (serviceName == "PAT Testing Residential") {
		patSub.classList.remove("hide");
		eicrSub.classList.add("hide");
		gasSub.classList.add("hide");
		epcSub.classList.add("hide");

		patcSub.classList.add("hide");
	} else if (serviceName == "PAT Testing Commercial") {
		patcSub.classList.remove("hide");
		eicrSub.classList.add("hide");
		gasSub.classList.add("hide");
		epcSub.classList.add("hide");
		patSub.classList.add("hide");
	} else {
		eicrSub.classList.add("hide");
		gasSub.classList.add("hide");
		epcSub.classList.add("hide");
		patSub.classList.add("hide");
		patcSub.classList.add("hide");
	}
});

// mobile menu hide after click
// const menuPath = document.querySelector(".navbar-collapse ");
// const navPath = document.querySelector(".nav-link ");
// let allNavLink = document.querySelectorAll(".nav-link ");

// for (let i = 0; i < 4; i++) {
// 	allNavLink[i].addEventListener("click", () => {
// 		menuPath.classList.remove("show");
// 	});
// }

// //Quote engine code

// const qepath = document.querySelector(".quote-engine-wrapper .first");
// const qepathSecond = document.querySelector(".quote-engine-wrapper .second");
// const qepathType = document.querySelector(".quote-engine-wrapper .type");
// const qepathThird = document.querySelector(".quote-engine-wrapper .third");
// const qepathFourth = document.querySelector(".quote-engine-wrapper .fourth");
// const qepathLast = document.querySelector(".quote-engine-wrapper .last");
// // let lists = document.querySelectorAll(".first-wrapper .first input");
// // let firstPath = document.querySelectorAll(".quote-engine-wrapper .first input");

// const handleRadioClick = () => {
// 	// qepath.getElementsByTagName('input')[3].checked
// 	let list = qepath.getElementsByTagName("input");
// 	let counter = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		// const decision = list[i].checked;
// 		if (list[i].checked) {
// 			qepath.classList.add("hide");
// 			qepathSecond.classList.remove("hide");
// 			counter++;
// 		}
// 	}
// 	if (counter == 0) {
// 		qepath.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
// 	}
// };
// const handlePrice = () => {
// 	// qepath.getElementsByTagName('input')[3].checked
// 	let list = qepathSecond.getElementsByTagName("input");
// 	let counter = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		// const decision = list[i].checked;
// 		if (list[i].checked) {
// 			qepathSecond.classList.add("hide");
// 			qepathFourth.classList.remove("hide");
// 			counter++;
// 		}
// 	}
// 	if (counter == 0) {
// 		qepathSecond.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
// 	}
// };

// const handleSecond = () => {
// 	// e.preventDefault();
// 	let list = qepathSecond.getElementsByTagName("input");
// 	let counter = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		// const decision = list[i].checked;
// 		if (list[i].checked) {
// 			qepathSecond.classList.add("hide");
// 			qepathThird.classList.remove("hide");
// 			counter++;
// 		}
// 	}
// 	if (counter == 0) {
// 		qepathSecond.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
// 	}
// };

// // const handleType = () => {
// // 	let list = qepathType.getElementsByTagName("input");
// // 	let counter = 0;
// // 	for (let i = 0; i < list.length; i++) {
// // 		// const decision = list[i].checked;
// // 		if (list[i].checked) {
// // 			qepathType.classList.add("hide");
// // 			qepathLast.classList.remove("hide");
// // 			counter++;
// // 		}
// // 	}
// // 	if (counter == 0) {
// // 		qepathType.innerHTML += `<p class= "text-center red" style="font-weight: bold;" >Please select something</p>`;
// // 	}
// // };

// const handleThird = () => {
// 	let list = qepathThird.getElementsByTagName("input");
// 	let counter = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		// const decision = list[i].checked;
// 		if (list[i].checked) {
// 			qepathThird.classList.add("hide");
// 			qepathFourth.classList.remove("hide");
// 			// qepathLast.classList.remove("hide");
// 			counter++;
// 		}
// 	}
// 	if (counter == 0) {
// 		qepathThird.innerHTML += `<p class= "text-center red" style="font-weight: bold;" >Please select something</p>`;
// 	}
// };

// const handleFourth = () => {
// 	let list = qepathFourth.getElementsByTagName("input");
// 	let counter = 0;
// 	for (let i = 0; i < list.length; i++) {
// 		// const decision = list[i].checked;
// 		if (list[i].checked) {
// 			qepathFourth.classList.add("hide");
// 			qepathLast.classList.remove("hide");
// 			counter++;
// 		}
// 	}
// 	if (counter == 0) {
// 		qepathFourth.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
// 	}
// };
