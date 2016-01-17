$("#question1").click(function() {
  $("#faqdrop2").slideUp();
  $("#faqdrop3").slideUp();
  $("#faqdrop1").slideToggle();
});

$("#question2").click(function() {
  $("#faqdrop1").slideUp();
  $("#faqdrop3").slideUp();
  $("#faqdrop2").slideToggle();
});

$("#question3").click(function() {
  $("#faqdrop1").slideUp();
  $("#faqdrop2").slideUp();
  $("#faqdrop3").slideToggle();
});
