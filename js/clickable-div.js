$(".clickable-div").click(function() {
  window.location = $(this).find("a").attr("href");
  console.log("Div clicked");
  window.alert(5 + 6);
  return false;
});