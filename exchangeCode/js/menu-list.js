$(function(){
	$(".pub_nav").hide();
	$(".info").click(function(){
		$(".pub_nav").toggle();
	});
	$(".pub_nav dl").click(function(){
		$(this).addClass("nav_bg").siblings().removeClass("nav_bg")
	});
})