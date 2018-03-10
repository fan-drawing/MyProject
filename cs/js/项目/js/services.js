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
	$('.fir_inf').delay(200).animate({'left':'0px'},2000,'linear');

	$(window).scroll(function(){
		var sT = $('body').scrollTop();
		if(sT >= 200){
			$('.sec_sbox').css({'opacity':1,'transform':'translateX(0px) rotate(0deg)'});
		}
		if(sT >= 400){
			$('.thi_header').css({'opacity':1,'transform':'translateX(0px)'});
			$('.thi_inf').css({'opacity':1,'transform':'translateX(0px)'});
		}
		if(sT >= 850){
			$('.inf_box').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 850){
			$('.word').css({'transform':'scale(1)','opacity':1});
		}

	});












});
