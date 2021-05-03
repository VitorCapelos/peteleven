const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const dots = document.querySelectorAll('.dot');

let index = 0;

function setActive(n) {
	for (slide of slides) slide.classList.remove('active');
	slides[n].classList.add('active');
	for (dot of dots) dot.classList.remove('active');
	dots[n].classList.add('active');
}

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function () {
		setActive(i);
		index = i;
		clearInterval(runSlider);
	});
}

const runSlider = setInterval(function () {
	if (index == slides.length - 1) {
		index = 0;
		setActive(index);
	} else {
		index++;
		setActive(index);
	}
}, 2500);
