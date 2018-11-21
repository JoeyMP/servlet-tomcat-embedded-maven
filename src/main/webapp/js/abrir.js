/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('.menu-bar').on('click',function (){
    $('.contenido').toggleClass('abrir');
});

$(document).ready(function(){
    var altura=$("ul").offset().top;
    
    $(window).scroll(function(){
        if ($(window).scrollTop()>=altura) {
            $("ul").css("margin-top","0");
            $("ul").css("position","fixed");
        }else{
            $("ul").css("margin-top","0px");
            $("ul").css("position","static");
        }
    });
});