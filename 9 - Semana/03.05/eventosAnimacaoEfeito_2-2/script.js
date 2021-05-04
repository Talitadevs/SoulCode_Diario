// 2) Crie uma página contendo uma div e aplique todos os efeitos que você aprender durante a aula(Hide(), show(), toggle(), fadeIn(), fadeOut(), fadeTo(), fadeToggle(), slideUp(), slideDown(), slideToggle()

// hide
$(document).ready(function () {
$("#btnHide").click(function () {
    $("#box").hide();
  });

// show
$("#btnShow").click(function () {
    $("#box").show();
  });

// toggle
    $("#btnToggle").click(function () {
      $("#box").toggle("slow");
    });

// fadeIn
$("#btnFadeIn").click(function () {
    $("#box").fadeIn("1000");
  });

// fadeOut
$("#btnFadeOut").click(function () {
    $("#box").fadeOut("1000");
  });

// fadeTo
$("#btnFadeTo").click(function () {
    $("#box").fadeTo("1000", 0.3);
  });

// fadeTo
$("#btnFadeTo").click(function () {
    $("#box").fadeTo("1000", 0.3);
  });

// fadeToggle
$("#btnFadeToggle").click(function () {
    $("#box").fadeToggle("slow");
  });

// SlideUp
$("#btnSlideUp").click(function () {
    $("#box").slideUp("slow");
  });

// SlideDown
$("#btnSlideDown").click(function () {
    $("#box").slideDown("slow");
  });

// slideToggle
    $("#btnSlideToggle").click(function () {
      $("#box").slideToggle(800);
    });

});

