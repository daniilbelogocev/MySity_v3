window.onscroll = function (e) {
	const ul = document.querySelector(".begin_cont");
	var scroller = window.scrollY;
	console.log(scroller);
	if(scroller>=550){
		ul.classList.add("_show")
	}
}

const places1 = document.querySelectorAll("._first");
const arrowLeft1 = document.querySelector("._left._one");
const arrowRight1 = document.querySelector("._right._one");

var currentPlace1 = 1;
places1[currentPlace1].classList.add("_activ");

console.log(places1.length);

arrowRight1.onclick = function(e){
	if(currentPlace1 == places1.length-1){
		currentPlace1 = 0;
		places1[currentPlace1].classList.add("_activ");
		places1[places1.length-1].classList.remove("_activ");
	}else{
		currentPlace1 +=1;
		places1[currentPlace1].classList.add("_activ");
		places1[currentPlace1-1].classList.remove("_activ");
	}
	
	
}

arrowLeft1.onclick = function(e){
	if(currentPlace1 == 0){
		currentPlace1 = places1.length-1;
		places1[currentPlace1].classList.add("_activ");
		places1[0].classList.remove("_activ");
	}else{
		currentPlace1 -=1;
		places1[currentPlace1].classList.add("_activ");
		places1[currentPlace1+1].classList.remove("_activ");
	}
	
}