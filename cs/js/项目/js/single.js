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
		if(sT >=200){
			$('.words').css({'transform':'translateX(0px)','opacity':1});
		}
		if(sT >=1000){
			$('.leave').css('transform','translateX(0px)');
		}
		if(sT >= 1600){
			$('.inf_box').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 1600){
			$('.word').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >=300){
			run();	
			
		}
	});
	var run = function(){
		$('.main_two').animate({'right':'0px'},1000,'linear',function(){
		$('.main_two').animate({'right':'-30px'},500,'linear',function(){
		$('.main_two').animate({'right':'0px'},500,'linear',function(){
				$('.flytwo').css({'opacity':'1','transform':'translateY(0px)'});
				$('.flythree').css({'opacity':'1','transform':'translateY(0px)'});
				});
			});
		});
		run = null;
	}
});