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
	if(sT >= 250){
		$('.sec_box_up').css('transform','translateX(0px)')
		$('.sec_box_down').css('transform','translateX(0px)')
	}
	if(sT >= 550){
		$('.thi_sbox').css({'transform':'scale(1)','opacity':1});
	}
	if(sT >= 750){
		$('.four_box').css({'transform':'scale(1)','opacity':1});
	}
	if(sT >= 1500){
		$('.sixth_sbox').css({'transform':'scale(1)','opacity':1});
	}
	if(sT >= 2500){
		$('.sev_inf').delay(200).animate({'left':'0px'},2000,'linear',function(){
			$('.sev_inf').animate({'left':'20px'},500,'linear',function(){
				$('.sev_inf').animate({'left':'0px'},500,'linear');
			});
		});
	}
	if(sT >= 3000){
		$('.inf_box').css({'transform':'scale(1)','opacity':1});
	}
	if(sT >= 3000){
		$('.word').css({'transform':'scale(1)','opacity':1});
	}

});






});