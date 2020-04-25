$(document).ready(function(){			
	$('#menu-button').click(function(){
		document.getElementById("sidenav").style.width = '300px';
	});
	$('#closebtn').click(function(){
		document.getElementById("sidenav").style.width = '0px';
	});
	$('#rea').mouseenter(function(){
		document.getElementById("nav-rea").style.display = 'block';
	});
	$('#rea').click(function(){
		document.getElementById("nav-rea").style.display = 'none';
	});
	$('#nav-rea').mouseenter(function(){
		document.getElementById("nav-rea").style.display = 'block';
	});
	$('#nav-rea').mouseleave(function(){
		document.getElementById("nav-rea").style.display = 'none';
	});
});