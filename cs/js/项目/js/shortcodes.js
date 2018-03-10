$(function(){
	window.onload=function(){
		setTimeout(function(){
			window.scrollTo(0,0);
		},0);
	}
	$('.top_nav_left').animate({'left':'0px'},1000,'linear',function(){
		$('.top_nav_left').animate({'left':'-20px'},500,'linear',function(){
			$('.top_nav_left').animate({'left':'0px'},500,'linear')
		});
	});
	$('.top_nav_right').animate({'right':'0px'},1000,'linear',function(){
		$('.top_nav_right').animate({'right':'-20px'},500,'linear',function(){
			$('.top_nav_right').animate({'right':'0px'},500,'linear')
		});
	});
	$(window).scroll(function(){
		var sT = $('body').scrollTop();
		
		if(sT >= 1800){
			$('.inf_box').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 1800){
			$('.word').css({'transform':'scale(1)','opacity':1});
		}

	});


});