//controller
$(document).ready(function(){
  //calls makeBoard function to create the game board grid
  makeBoard();
});//end of document.ready

//start of model
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
