const nav = document.querySelectorAll('.navs');
const head = document.querySelector(".header");
const navs = document.querySelectorAll('.nav');
const body = document.querySelector(".bd");
const cons = document.querySelector(".conses");
var changeCorrect = 3600;
var aboutCorrect = 550;
var pageWidth = window.innerWidth;
if(pageWidth <=1080){
    console.log("mobile");
    aboutCorrect = 1000;
    changeCorrect =3600;
}else{
    console.log("laptop");
    changeCorrect =1388;
    aboutCorrect = 550;
}
function activating(event) {
	this.classList.add("_anima");
}

function deactivating(event) {
	this.classList.remove("_anima");
}



for (let nav of navs){
	nav.addEventListener('mouseover', activating);
	nav.addEventListener('mouseout', deactivating);
}

window.onscroll = function (e) {
	const headed = document.querySelector(".header_cont");
	const abouter = document.querySelector(".about_cont");
	const cons = document.querySelector(".conses");
	const con_title = document.querySelector(".cons_title");
	var scroller = window.scrollY
    console.log(window.scrollY); // Value of scroll Y in px
	if(scroller>=550){
    	abouter.classList.add("_anima");
    }
    if(scroller>=changeCorrect){
    	headed.classList.add("_animate");
    	con_title.style.cssText = "animation: show_cons 1.5s forwards;";
    	cons.style.cssText = "animation: show_cons 1s 500ms forwards;";
    }else{
    	headed.classList.remove("_animate");
    }
}    

// body.addEventListener("scroll", reveal);

// nav.forEach(LinkItem => {LinkItem.addEventListener('click', activating);})