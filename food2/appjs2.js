//tabs
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabsContent = document.querySelectorAll('.tabcontent')


function hideTabContent() {
	tabsContent.forEach(item => {
		item.classList.add('hide', 'fade')
		item.classList.remove('show')
	})

	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active')
	})
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('show', 'fade')
	tabsContent[i].classList.remove('hide')
	tabs[i].classList.add('tabheader__item_active')
}


hideTabContent()
showTabContent()


tabsParent.addEventListener('click', (event) => {
	const target = event.target

	if (target.classList.contains('tabheader__item')) {
		tabs.forEach((item, i) => {
			if (target === item) {
				hideTabContent()
				showTabContent(i)
			}
		})
	}
})

// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelectorAll('[data-modal]')
const closeModalBtn = document.querySelector('.modal__close')

modalTrigger.forEach(item => {
	item.addEventListener('click', openModal)
})

function openModal() {
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'

	clearInterval(modalTimeout)
}

function closeModal() {
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = ''
}

// function makethisAgain (){
//     modalTrigger.classList.add('')
// }

closeModalBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal()
	}
})

function openModalScroll() {
	const page = document.documentElement

	if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
		openModal()

		window.removeEventListener('scroll', openModalScroll)
	}
}
openModalScroll()

// window.addEventListener('scroll', openModalScroll)
// const modalTimeout = setTimeout(openModal, 5000)
//

// data
const deadline = '2022-12-25'

function getTimeRemaining(deadline) {
	const t = new Date(deadline) - new Date(),
		days = Math.floor((t / (1000 * 60 * 60 * 24))),
		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		minutes = Math.floor((t / 1000 / 60) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		"total": t,
		"days": days,
		"hours": hours,
		"minutes": minutes,
		"seconds": seconds
	}
}


function setClock(element, deadline) {
	const elem = document.querySelector(element),
		days = elem.querySelector('#days'),
		hours = elem.querySelector('#hours'),
		minutes = elem.querySelector('#minutes'),
		seconds = elem.querySelector('#seconds');

	setInterval(updateClock, 1000)

	updateClock()


	function makeZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}`
		} else {
			return num
		}
	}

	function updateClock() {
		const t = getTimeRemaining(deadline);
		days.innerHTML = makeZero(t.days);
		hours.innerHTML = makeZero(t.hours);
		minutes.innerHTML = makeZero(t.minutes);
		seconds.innerHTML = makeZero(t.seconds)
	}
}

setClock('.timer', deadline)

// card


class Menu {
	constructor(src, title, description, price) {
		this.src = src
		this.title = title
		this.price = price
		this.description = description
	}

	render() {
		const wrapper = document.querySelector('#cardWrapper')
		const elem = document.createElement('div')
		elem.classList.add('menu__item')

		elem.innerHTML = `
		<div class="menu__item">
			<img src=${this.src} alt="vegy">
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.description}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
			<div class="menu__item-cost">????????:</div>
			<div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
			</div>
		</div>
		`
		wrapper.append(elem)
	}
}

const card1 = new Menu(
	"img/tabs/vegy.jpg",
	"???????? ????????????",
	"???????? \"????????????\" - ?????? ?????????? ???????????? ?? ?????????????????????????? ????????: ???????????? ???????????? ???????????? ?? ??????????????. ?????????????? ???????????????? ?? ???????????????? ??????????. ?????? ?????????????????? ?????????? ?????????????? ?? ?????????????????????? ?????????? ?? ?????????????? ??????????????????!",
	"229"
)
card1.render()



class Menu {
	constructor(src, title, description, price) {
		this.src = src
		this.title = title
		this.price = price
		this.description = description
	}

	render(){
	    const wrapper = document.querySelector('#cardWrapper')
        const elem = document.querySelector('div')
        elem.classList.add('.menu__item')
        elem.innerHTML =`
           <div class ="menu__item>
           
        `
	}
}





//CHANGED TO FETCH REQUEST
//???????????????????? ???? FETCH



// form
const forms = document.querySelectorAll('form')
const message = {
	loading: '???????? ????????????????...',
	success: '??????????????, ?????????? ???????????????? !',
	fail: '??????-???? ?????????? ???? ??????'
}

forms.forEach(item => {
	postData(item)
})

function postData (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const messageBlock = document.createElement('div')
		messageBlock.textContent = message.loading
		form.append(messageBlock)
        //
		// const request = new XMLHttpRequest()
		// request.open('POST', 'server.php')
		// request.setRequestHeader('Content-type', 'application/json')
        //
		// const formData = new FormData(form)
		// const object = {}
        //
		// formData.forEach((item, i) => {
		// 	object[i] = item
		// })
        //
		// const json = JSON.stringify(object)
        //
		// request.send(json)
        //
		// request.addEventListener('load', () => {
		// 	if(request.status === 200){
		// 		console.log(request.response)
		// 		messageBlock.textContent = message.success
		// 	} else {
		// 		messageBlock.textContent = message.fail
		// 	}
		// })
	})
}

let postFetch ={
    method:"POST",
    headers:{
        "Content-type":'application/json'
    },
    body:JSON.stringify()
}
fetch('server.php')
.then(response =>{
    if(response.ok){
        return response.json()
    }else {
        return `Error ${response.status}`
    }
}1