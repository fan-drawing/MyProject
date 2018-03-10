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

	$('.fir_inf_left').animate({'left':'0px'},1000,'linear',function(){
		$('.fir_inf_left').animate({'left':'-15px'},800,'linear',function(){
			$('.fir_inf_left').animate({'left':'0px'},800,'linear')
		});
	});
	$('.fir_inf_right').animate({'right':'0px'},1000,'linear',function(){
		$('.fir_inf_right').animate({'right':'-15px'},800,'linear',function(){
			$('.fir_inf_right').animate({'right':'0px'},800,'linear')
		});
	});
	/*$('.inf_img_box').hover(function(){
		$('.bak').css({'transform':'rotateY(0deg)','opacity':1});
	},function(){
		$('.bak').css('opacity',0);
	});
*/

	$(window).scroll(function(){
		var sT = $('body').scrollTop();
		if(sT >= 300){
			$('.box1').animate({'left':'0px'},1000,'linear',function(){
				$('.box1').animate({'left':'-15px'},800,'linear',function(){
					$('.box1').animate({'left':'0px'},800,'linear')
				});
			});
			$('.box2').css({'transform':'scale(1)','opacity':'1'});
			$('.box3').animate({'right':'0px'},1000,'linear',function(){
				$('.box3').animate({'right':'-15px'},800,'linear',function(){
					$('.box3').animate({'right':'0px'},800,'linear')
				});
			});	
		}
		if(sT >= 1000){
			$('.thi_inf').css({'left':'0px','opacity':1});
		}
		if(sT >= 1500){
			$('.inf_box').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 1500){
			$('.word').css({'transform':'scale(1)','opacity':1});
		}

	});

});