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
		if(sT >= 500){
			$('.room_sbox').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 1100){
			$('.inf_box').css({'transform':'scale(1)','opacity':1});
		}
		if(sT >= 1100){
			$('.word').css({'transform':'scale(1)','opacity':1});
		}

	});

	



	var photo = document.getElementsByClassName('photo');
	var imgs = document.getElementsByClassName('img');
	var simg = document.getElementById('img_bg').getElementsByTagName('img');

$('.photo').click(function(){
			$('#pop').fadeIn('slow');
			$('#ppt').delay(800).fadeIn('slow');
		});
		$('.x').click(function(){
			$('#pop').hide();
			$('#ppt').hide();
		});
	console.log(simg);
	for(j=0;j<photo.length;j++){
		photo[j].index = j;
		photo[j].onclick = function(){
			play(this.index);
		}
	}	

	function play(num){
		for(i=0;i<simg.length;i++){
			$('#img_bg').find('img').eq(num).addClass('block').siblings().removeClass('block');
			$('#title').html('title | '+(num+1)+'/6');
		}
		$('.prev').on('click',function(){		
			num--;
			if(num <= 0){
				num = 0;
				$('#title').html('title | '+(num+1)+'/6');
			}
			$('#img_bg').find('img').eq(num).addClass('block').siblings().removeClass('block');
			$('#title').html('title | '+(num+1)+'/6');
		});
		$('.next').on('click',function(){
			num++;	
			if(num>=5){
				num = 5;
				$('#title').html('title | '+(num+1)+'/6');
			}
			$('#img_bg').find('img').eq(num).addClass('block').siblings().removeClass('block');
			$('#title').html('title | '+(num+1)+'/6');
		});

		













	}







});