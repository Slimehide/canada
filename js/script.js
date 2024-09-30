$(document).ready(function(){
	if ($('.happy__clients').length) {
		$('.happy__clients .list').webTicker({
			startEmpty:false,
			hoverpause:false,
			duplicate:true,
			speed:30
		});
	}


	$('.scrollable__btn--pricing').on("click" ,function(e){
		e.preventDefault();
		$('html').animate({ 
    	    scrollTop: $(".pricing__complex").offset().top 
        }, 900
        );
	});

	$('.video__article .media>a').on('click' ,function(e){
		e.preventDefault();
		$(this).closest('.media').find("iframe").fadeIn(300);
		$(this).closest('.media').find('iframe').attr('src' , $(this).closest('.media').find('iframe').attr("data-src"));
	});

	$('.faq__wrapper .box>.elem').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).find('.desc').slideUp(300);
		} else {
			$('.faq__wrapper .box>.elem').removeClass('opened');
			$('.faq__wrapper .box>.elem .desc').slideUp(300);
			$(this).addClass('opened');
			$(this).find('.desc').slideDown(300);
		}
	});
});