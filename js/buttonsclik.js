$(function() {
  $("#comfort_cont").fadeOut(1);
  $("#business_cont").fadeOut(1);
  $("#premium_cont").fadeOut(1);

  $("#knopka-1").click(function() {
    $("#comfort_cont").fadeOut(1);
    $("#business_cont").fadeOut(1);
    $("#premium_cont").fadeOut(1);
    $("#standart_cont").fadeIn(100);
  });
  $("#knopka-2").click(function() {
    $("#standart_cont").fadeOut(1);
    $("#business_cont").fadeOut(1);
    $("#premium_cont").fadeOut(1);
    $("#comfort_cont").fadeIn(100);
  });
  $("#knopka-3").click(function() {
    $("#standart_cont").fadeOut(1);
    $("#comfort_cont").fadeOut(1);
    $("#premium_cont").fadeOut(1);
    $("#business_cont").fadeIn(100);
  });
  $("#knopka-4").click(function() {
    $("#standart_cont").fadeOut(1);
    $("#comfort_cont").fadeOut(1);
    $("#business_cont").fadeOut(1);
    $("#premium_cont").fadeIn(100);
  });
});
