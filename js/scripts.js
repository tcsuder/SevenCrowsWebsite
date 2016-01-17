$("#question1").click(function() {
  $("#faqdrop2").slideUp();
  $("#faqdrop3").slideUp();
  $("#faqdrop1").slideToggle();
  $("#question1 h2").toggleClass("active");
  $("#question2 h2").removeClass("active");
  $("#question3 h2").removeClass("active");
});

$("#question2").click(function() {
  $("#faqdrop1").slideUp();
  $("#faqdrop3").slideUp();
  $("#faqdrop2").slideToggle();
  $("#question2 h2").toggleClass("active");
  $("#question1 h2").removeClass("active");
  $("#question3 h2").removeClass("active");
});

$("#question3").click(function() {
  $("#faqdrop1").slideUp();
  $("#faqdrop2").slideUp();
  $("#faqdrop3").slideToggle();
  $("#question3 h2").toggleClass("active");
  $("#question1 h2").removeClass("active");
  $("#question2 h2").removeClass("active");
});
