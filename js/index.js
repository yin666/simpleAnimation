var slideIndex = 0;

showSlides();
//slider method
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//slide up and slide down toggle
function showInstruction(e){
	document.querySelector('.footer').style.display="block";
	slide = document.querySelector('.photos');
	slide.style.height="22.8rem";
	slide.classList.remove('slide-up');
	slide.classList.add('slide-down');
}

// initially the opacity animation isn't hidden ,this timer is to resolve this problem.
setTimeout(function(){
	document.querySelector(".header-ios-android").style.opacity=1;
},1000)

//animation photo on the top
window.onload=function(){ 
 var logo = document.querySelector(".top-logo ");
	logo.classList.remove('move-0');
	logo.classList.add("move-05");
} 

function androidLink(event){
	window.location.href = "http://www.iconfont.cn/";
}

function iosLink(event){
	var i = Math.round(Math.random() * 10);
    if (i % 2 >= 0) {
        location.href = "http://www.iconfont.cn/";
    }
}


