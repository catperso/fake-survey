$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const beverage = $("#beverage").val();
    const born = $("#born").val();
    const yourName = $("#yourName").val();
    const iceCream = $("input:radio[name=flavor]:checked").val();
    const yourColor = $("#yourColor").val();
    $(".yourName").text(yourName);
    $(".born").text(born);
    $(".beverage").text(beverage);
    $(".iceCream").text(iceCream);
    $(".yourColor").text(yourColor);
    $("#output").show();
    $(".yourColor").css("color", yourColor);

  });
});