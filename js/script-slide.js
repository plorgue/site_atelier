var title;
var numSlide = 0;
var NUMBRE_OF_SLIDE_PORTES = 12;
var NUMBER_OF_SLIDE_FENETRES = 10;
var NUMBER_OF_SLIDE_GARAGE = 9;
var NUMBER_OF_SLIDE_PORTAILS = 9;
var NUMBER_OF_SLIDE_VOLETS = 9;
var nbrSlide = new Map();
nbrSlide.set("Portes - Menuiserie LORGUE",NUMBRE_OF_SLIDE_PORTES);
nbrSlide.set("Fenêtres - Menuiserie LORGUE",NUMBER_OF_SLIDE_FENETRES);
nbrSlide.set("Portes de garage - Menuiserie LORGUE",NUMBER_OF_SLIDE_GARAGE);
nbrSlide.set("Portails - Menuiserie LORGUE",NUMBER_OF_SLIDE_PORTAILS);
nbrSlide.set("Volets - Menuiserie LORGUE",NUMBER_OF_SLIDE_VOLETS);
var ids = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13"];

$(document).ready(function(){
	title = this.title;
	init();

	$('.bar').click(function(){
		numSlide = ids.indexOf(this.id);
		for(let pas = 0; pas<nbrSlide.get(title);pas++){
			document.getElementById(ids[pas]).style.backgroundColor = "";
		}
		this.style.backgroundColor = "#fff";
		document.getElementById("s1").style.marginLeft = "-"+numSlide*window.innerWidth.toString()+"px";		
		resizeSlider();		
	});
	$('svg').mouseover(function(){
		this.style.backgroundColor = "#fff4";
	});
	$('svg').mouseleave(function(){
		this.style.backgroundColor = "#969C90a0";
	});
	$('svg').click(function(){
		var svg = this;
		setTimeout(function(){
			svg.style.backgroundColor = "#969C90a0";
		},400);
		this.style.backgroundColor = "#fff8";
		var currentMargin = document.getElementById("s1").style.marginLeft;
		var currentMarginInt = parseInt(currentMargin.substring(0,currentMargin.length-2));
		var windowWidth = window.innerWidth;
		if(currentMargin == "0px" && $(this).attr("id") == "left"){
			document.getElementById("s1").style.marginLeft = "-"+(nbrSlide.get(title)-1)*windowWidth+"px";
			document.getElementById(ids[nbrSlide.get(title)-1]).style.backgroundColor = "#fff";
			document.getElementById("b1").style.backgroundColor = "";
			numSlide = nbrSlide.get(title)-1;
		}else if(currentMargin == "-"+(nbrSlide.get(title)-1)*windowWidth+"px" && $(this).attr("id") == "right"){
			document.getElementById("s1").style.marginLeft = "0px";
			document.getElementById("b1").style.backgroundColor = "#fff";
			document.getElementById(ids[nbrSlide.get(title)-1]).style.backgroundColor = "";
			numSlide = 0;
		}else if($(this).attr("id") == "right"){
			document.getElementById("s1").style.marginLeft = (parseInt(currentMargin.substring(0,currentMargin.length-2))-windowWidth)+"px";
			document.getElementById("b"+(-currentMarginInt/parseInt(windowWidth)+1)).style.backgroundColor = "";
			document.getElementById("b"+(-currentMarginInt/parseInt(windowWidth)+2)).style.backgroundColor = "#fff";
			numSlide = numSlide + 1;
		}else{
			document.getElementById("s1").style.marginLeft = (parseInt(currentMargin.substring(0,currentMargin.length-2))+windowWidth)+"px";
			document.getElementById("b"+(-currentMarginInt/parseInt(windowWidth)+1)).style.backgroundColor = "";
			document.getElementById("b"+(-currentMarginInt/parseInt(windowWidth))).style.backgroundColor = "#fff";
			numSlide = numSlide - 1;
		}	
		resizeSlider();
	});
});

function init()
{
	document.getElementById("b1").style.backgroundColor = "#fff";
	document.getElementById("s1").style.marginLeft = "0px";
	document.getElementById("left").style.backgroundColor = "#969C90a0";
	document.getElementById("right").style.backgroundColor = "#969C90a0";
	resizeSlider();
}

function resizeSlider()
{
	if(title != "Portes - Menuiserie LORGUE" && window.innerWidth<800){
		var imgFrame = document.getElementById("slides").getElementsByTagName("div")[numSlide].getElementsByTagName("img")[0];
		var imgFrameWidth = imgFrame.width;
		var img = new Image();
		img.src = imgFrame.src;
		var imgFrameHeight = img.height*imgFrameWidth/img.width;
		document.getElementById("slidershow").style.height = imgFrameHeight+"px";
	}else if(window.innerWidth>800){
		document.getElementById("slidershow").style.height = "";
	}
}