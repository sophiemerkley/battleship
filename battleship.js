//controller
$(document).ready(function(){
  //calls makeBoard function to create the game board grid
  makeBoard();

    //when click a grid space
    $("td").on("click",
      function(){
        if (torpedosLeft > 0) {
          //add the class of grey to the squares
          $(this).addClass("grey");
          //turns space off after clikced
          $(this).off("click");
          //decrease the number of torpedoes by one
          torpedosLeft = torpedosLeft - 1;
          //printing number of torpedos left to the dom
          $("#torpedos").text(torpedosLeft);

        }
      });



});//end of document.ready

//start of model
//create variable for torpedos left and set it to 0
var torpedosLeft = 25;
//create the array for the board
var board =[[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]];

//create variable for ships
var ships = 0;
//Purpose: create a function to place five ships randomly on the board
//Signature: nothing ---> return 2 numbers that correspond to positions on the board
//Example: placeShips() ----> [0,3],[1,4],[2,6],[7,5],[1,8]
function placeShips() {
  while (ships < 5 ){
    var row = Math.floor((Math.random()*10));
    var column = Math.floor((Math.random()*10));
    ships = ships + 1;
    board[row][column]= -1;
  }
}

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
