$(document).ready(function(){
	$('#show-sidenav').on('click',function(){
		$('#sidenav').css('width','65vw');
	});
	$('#hide-sidenav').on('click',function(){
		$('#sidenav').css('width','0vw');
	});
	$('#rea').mouseenter(function(){
		$('#menu-rea').css('display','block');
	});
	$('#rea').click(function(){
		$('#menu-rea').css('display','none');
	});
	$('#menu-rea').mouseleave(function(){
		$('#menu-rea').css('display','none');
	});
});
