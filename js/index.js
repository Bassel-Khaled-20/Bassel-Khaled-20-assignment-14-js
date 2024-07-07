///<reference types="../@types/jquery" />
$(window).ready(function () {
  

var navInnerWidth = $('nav').innerWidth()
 let openW=$('header span').css('left', navInnerWidth)
 $('nav').css("left", -navInnerWidth+"px")
 $('header span').css("left", "0px")

$('nav li i').on('click', function(){
    $('nav').animate({left: -navInnerWidth+"px"},500)
    $('header span').animate({left: "0"},500)
})
$('.open').on('click', function(){
    $('nav').animate({left: "0px"},500)
    $('header span').animate({left: navInnerWidth+"px"},500)
})
$(".main-content h3").on("click",function(){
    if ($(this).next().is(':visible')) {
        $(".inner").slideUp(500);
    } else {
        $(".inner").slideUp(500);
        $(this).next().slideToggle(500);
    }
    

})





var end = new Date('02/19/2025 10:01 AM').getTime();

function showRemaining() {
    var now = new Date().getTime();
    var distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';
        return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    $(".days").html(days + ' D ');
    $(".hours").html(hours + ' h');
    $(".minutes").html(minutes + ' M');
    $(".seconds").html(seconds + ' S');
}

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer = setInterval(showRemaining, 1000);
showRemaining();
    
var max=100;
$("textarea").on("keyup", function(){
    var length=$(this).val().length
   var index=max-length
   $(".max").html(index)
   if (index <= 0) {
    $(".max-1").css("display", "none")
    $(".available-character").css("display", "block")
    $("button").on("click", function(e){
        e.preventDefault()
    })

   }
   else{
    $(".max-1").css("display", "block")
    $(".available-character").css("display", "none")
    $("button").off("click");
   }
})
$("nav a").on("click", function(){
    let attr=$(this).attr('href')
    let offset=$(attr).offset().top
    $('html , body').animate({scrollTop: offset}, 1500)
})
})
