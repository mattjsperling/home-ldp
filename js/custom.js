//Navbar Box Shadow on Scroll 
 //$(function(){
 //    var div = $('.page-nav');
 //    $(window).scroll(function(){
 //        if($(window).scrollTop() <= 70){
 //       		div.css('box-shadow', 'none');
 //        } else {
 // //         div.css('box-shadow', '0px 2px 5px rgba(0, 0, 0, 0.2)'); 
 // 			div.css('border-bottom', '1px solid #CCCCCC'); 
 //        }
 //    });  
 //})


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $(".page-nav").addClass("nav-border");
    } else {
        $(".page-nav").removeClass("nav-border");
    }
});