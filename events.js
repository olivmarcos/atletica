/*$(".hover").mouseover(function() {
    $(this, "a").css("color", "#F24738");
  });

$(".hover").mouseout(function() {
    $(this, "a").css("color", "black");
});*/

$(".hoverIcons").mouseover(function() {
    $(this, "a").css("color", "#F24738");
  });

$(".hoverIcons").mouseout(function() {
    $(this, "a").css("color", "white");
});


$(".hover").mouseover(function() {
    $(this, "a").addClass("teste");
  });

  $(".hover").mouseout(function() {
    $(this, "a").removeClass("teste");
  });