$(document).ready(function(){
	$('#nav__bar__show-sidenav').on('click',function(){
		$('#sidenav').css('width','65vw');
	});

	$('#hide-sidenav').on('click',function(){
		$('#sidenav').css('width','0vw');
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
