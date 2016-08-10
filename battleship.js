//controller
$(document).ready(function(){
  //calls makeBoard function to create the game board grid
  makeBoard();

    //when click a grid space
    $("td").on("click",
      //add the class of grey to the squares
      function(){
        if (torpedosLeft > 0) {
          $(this).addClass("grey");
          torpedosLeft = torpedosLeft - 1;
          $("#torpedos").text(torpedosLeft);
        }
      });


});//end of document.ready

//start of model
//create variable for torpedos left and set it to 0
var torpedosLeft = 25;
// Pupose: create a function to keep track of torpedos left
//Signature: nothing --> number
//Examples: torpedoDecrementer() --> 24;


// Purpose: to create gameBoard using loops
// Signature: nothing ->
// Examples: gameBoard() -> table
function makeBoard() {
  //create a for loop for the tr
  for (var row=0; row<10; row++) {
    //create and append 10 tables rows to the table
    $("#gameBoard").append("<tr></tr>");
      //create a for loop for the tds
      for (var column=0; column<10; column++) {
      //create and append 10 table datas to the last row in loop
      $("tr").last().append('<td id = "' + row + column + '"></td>');
      }
  }
}
