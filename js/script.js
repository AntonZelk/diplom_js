
document.getElementById("burger").onclick = function(){
    addMenu();
}

function addMenu(){
	document.getElementById("menu").classList.toggle("show");
	document.getElementById("corz").classList.toggle("show");
}
(function () {
	$('.burger').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();


timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

function time() {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	timestr=" " + thour+ " часов " + tmin + " минут "+ tsec + " секунд";
	document.getElementById('timer').innerHTML=timestr;
	window.setTimeout("time()",1000);
}

time();

const fire = document.querySelectorAll('.fireCat');
const act = document.getElementById('act');
const container1 = document.getElementById('container1');
const advantages = document.getElementById('advantages');
const font = document.querySelectorAll('.font');
const smoke = document.querySelectorAll('.smoke');
const mainPage = document.querySelectorAll('.mainPage');
const aboutPage = document.querySelectorAll('.aboutPage');
const piu = document.querySelectorAll('.piu');
const sale = document.getElementById('sale');
const catalogFire = document.getElementById('catalogFire');
const catalogFont = document.getElementById('catalogFont');
const catalogSmoke = document.getElementById('catalogSmoke');
const containerCart = document.getElementById('containerCart');


const closePage = () =>{
	sale.style.display = 'none';
	act.style.display = 'none';
    advantages.style.display = 'none';
	container1.style.display = 'none';
}
const closeCatalog = () =>{
	catalogFire.style.display = 'none';
	catalogFont.style.display = 'none';
	catalogSmoke.style.display = 'none';
	catalogPiu.style.display = 'none';
}
const openAllpage = () =>{
	closeCatalog();
	sale.style.display = 'flex';
	act.style.display = 'block';
    advantages.style.display = 'flex';
	 container1.style.display = 'flex';
}
let openPage = (element) =>{
	if (element = fire){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			catalogFire.style.display = 'flex';
			catalogFont.style.display = 'none';
			catalogSmoke.style.display = 'none';
			catalogPiu.style.display = 'none';
			closePage();
			cart.containerCart.style.display = 'none';
		 })
		}
	} 
	if (element = font){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			closePage();
			catalogFire.style.display = 'none';
			catalogFont.style.display = 'flex';
			catalogSmoke.style.display = 'none';
			catalogPiu.style.display = 'none';
			cart.containerCart.style.display = 'none';
			})
		}
	}
	if (element = smoke){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			closePage();
			catalogFire.style.display = 'none';
			catalogFont.style.display = 'none';
			catalogSmoke.style.display = 'flex';
			catalogPiu.style.display = 'none';
			cart.containerCart.style.display = 'none';
			})
		}
	}
	if (element = piu){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			closePage();
			catalogFire.style.display = 'none';
			catalogFont.style.display = 'none';
			catalogSmoke.style.display = 'none';
			catalogPiu.style.display = 'flex';
			cart.containerCart.style.display = 'none';
			})
		}
	}
	if (element = mainPage ){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			openAllpage();
			cart.containerCart.style.display = 'none';
			})
		}
	}
	if (element = aboutPage ){
		for(let i = 0; i < element.length; i++){
		element[i].addEventListener('click', () =>{
			openAllpage();
			cart.containerCart.style.display = 'none';
			})
		}
	}
	
}
openPage();




