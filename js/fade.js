$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".latest_img").css("opacity","0.7");
		
// ON MOUSE OVER
$(".latest_img").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});


$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".undefined_box").css("opacity","0.7");
		
// ON MOUSE OVER
$(".undefined_box").hover(function () {
										  
// SET OPACITY TO 1000%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.7
}, "slow");
});
});


$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#div").css("opacity","0.5");
		
// ON MOUSE OVER
$("#div").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});