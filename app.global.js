$(document).on("ready", function () {
    "use strict";
    $(".mobile-burger").click(function(){
        if ($(".main-navigation ul").hasClass("active")) {
            $(this).removeClass("active");
            $(".main-navigation ul").removeClass("active");
            console.log("NAV-ACIVE");
        } else {
            $(this).addClass("active");
            $(".main-navigation ul").addClass("active");
            console.log("NAV-NOT-ACTIVE");
        }                        
    });
  });