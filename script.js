"use strict";


$("#btn").on("click", window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#btn").css("display", "block")
    } else(
        $("#btn").css("display", "none")
    )



})
$("#btn").on("click", function() {
    $(document.body.scrollTop = 0)
    $(document.documentElement.scrollTop = 0)

})


$(window).scroll(function() {
    $("section").each(function() {
        var $x = $(window).scrollTop() + $(window).height();
        var $y = $(this).offset().top + $(window).height();
        if ($x >= $y) {
            $(this).addClass("active")
        }
    })
})
var menuBtn = document.querySelector(".menu-btn");
var button = document.querySelector(".button");
var sideBar = document.querySelector(".side-bar");

var arr = [menuBtn, button];

for (var y = 0; y < arr.length; y++) {

    arr[y].addEventListener("click", function() {
        sideBar.classList.toggle("position");
    });
}