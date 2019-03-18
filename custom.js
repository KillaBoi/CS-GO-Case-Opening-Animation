$(document).ready(function(){
  $("#openCase").click(function(){


    if ($(this).hasClass('disabled')) {
        return false;
    } else {
         startRoll();
    }

  });
});


function startRoll(){

      $("#openCase").html("Rolling...").addClass("disabled");

      var lineArrays = ['2985px', '2995px', '3005px', '3015px', '3025px', '3035px', '3045px', '3055px', '3065px', '3075px', '3085px', '3095px', '3100px'];

      var landLine = lineArrays[Math.floor(Math.random() * lineArrays.length)];
      console.log(landLine);

  $(".itemBoxAn").animate(
    {right: landLine},
          {
            duration: 12000,
            easing: 'easeOutQuint'
          }
    );
}
