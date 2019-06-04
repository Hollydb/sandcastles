$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
$(document).ready(function() {
  $("div#sandcastle1").click(function() {
    $("body").removeClass();
    $("body").addClass("purple");

  });

  $("div#sandcastle2").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("body").fadetoggle();
  });

  $("div#sandcastle3").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("body").fadetoggle();
  });
});
$(document).ready(function() {
  $("h1").click(function() {
    $("#sandcastle2").slideToggle();
    $("#sandcastle1").slideToggle();
    $("#sandcastle3").slideToggle();
  });

});
