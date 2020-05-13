$(function(){
	$('.kafes').on('mouseenter',function(){

		$(".hoverBG").animate({opacity:1},500);
		
		$( ".readmore" ).delay("slow").fadeIn();

		$(".text").find('.yerHeader p').animate({fontSize: "30px"},500);
		$(".grid").addClass("gridBlur");
		$(".text").find('.yerContent p').animate({opacity:1},500);
		
	});
	$('.kafes').on('mouseleave',function(){

		$(".hoverBG").animate({opacity:0},500);
		// $( ".readmore" ).hide("drop");
		// $( ".readmore" ).hide( "drop", { direction: "down" }, "slow" );
		$( ".readmore" ).fadeOut();

$(".text").find('.yerContent p').animate({opacity:0},500);
		$(".yerContent").removeClass("yerContentHover");
		$(".text").find('.yerHeader p').animate({fontSize: "50px"},"slow");
		$(".grid").removeClass("gridBlur");
		
	});
})
