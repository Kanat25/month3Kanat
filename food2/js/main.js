const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});


//interval

let slideIndex = 0;
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".tabheader__item");
  let sliderSlide = document.querySelectorAll(".tabcontent");
  if (n > slides.length && n > sliderSlide.length) {
    slideIndex += 1;
  }
  if (n < 0) {
    slideIndex = slides.length && slideIndex == sliderSlide.length;
  }

  for (let slide of slides) {
    slide.classList.remove("tabheader__item_active");
  }
  slides[n].classList.add("tabheader__item_active");

  for (let slide of sliderSlide) {
    slide.style.display = "none";
    slide.style.transform ="scale(1.05)"
    slide.style.transitionDuration =".3s"
    // slide.style.borderRadius ="40%"
  }
  sliderSlide[slideIndex].style.display = "block";

}

let timer = setInterval(function () {
  {
    slideIndex++;
    if(slideIndex >3 ){
      slideIndex=0
    }
  }
  showSlides(slideIndex);
}, 2000);


















//MODAL

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal, "modal");
console.log(modalTrigger, " modalTrigger");
console.log(closeModalBtn, " closeModalBtn");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  modal.style.fontSize = "45px"
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
    console.log(event.target);
  }
});

closeModalBtn.addEventListener("click", closeModal);


//scroll modal



modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal()
	}
})

function openModalScroll() {
	const page = document.documentElement

	if (page.scrollTop >= page.scrollHeight) {
		openModal()

		// window.removeEventListener('scroll', openModalScroll)
	}
}
openModalScroll()


//
// fetch("server.php",{
//     method: "POST",
//     headers: {
//         "Content-type"
//     }
// })


//
// const deadline = '2022-5-29'
//
// function getTimeRemaining(deadline) {
// 	const t = new Date(deadline) - new Date(),
// 		days = Math.floor((t / (1000 * 60 * 60 * 24))),
// 		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
// 		minutes = Math.floor((t / 1000 / 60) % 60),
// 		seconds = Math.floor((t / 1000) % 60);
//
// 	return {
// 		"total": t,
// 		"days": days,
// 		"hours": hours,
// 		"minutes": minutes,
// 		"seconds": seconds
// 	};
// };
//
//
// function setClock(element, deadline) {
// 	const elem = document.querySelector(element),
// 		days = elem.querySelector('#days'),
// 		hours = elem.querySelector('#hours'),
// 		minutes = elem.querySelector('#minutes'),
// 		seconds = elem.querySelector('#seconds');
//
// 	setInterval(updateClock, 2000)
//
// 	updateClock()
//
// 	function makeZero(num) {
// 		if (num > 0 && num < 10) {
// 			return `0${num}`
// 		} else {
// 			return num
// 		}
// 	}
//
// 	function updateClock() {
// 		const t = getTimeRemaining(deadline);
// 		days.innerHTML = makeZero(t.days);
// 		hours.innerHTML = makeZero(t.hours);
// 		minutes.innerHTML = makeZero(t.minutes);
// 		seconds.innerHTML = makeZero(t.seconds)
// 	}
// }
//
// setClock('.timer', deadline);
// console.log()