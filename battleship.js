//controller
$(document).ready(function(){
  //calls makeBoard function to create the game board grid
  makeBoard();
  //calls the placeShips function to place ships on the board
  placeShips();

    //when click a grid space
    $("td").on("click",
      //run a function
      function(){
        //checks to see if there are torpedos left
        if (torpedosLeft > 0) {
          //get the #id of the td that has been clicked
          var clicked = $(this).attr("id");
          //splits the #id from a string into an array
          clicked.split("");
          //prints clicked to the console for testing purposes
          console.log(clicked);
          //checks to see if the td that has been clicked has a ship
          if (board[clicked[0]][clicked[1]] === aShipIsHere) {
            //adds a class of hit to the td
            $("#" + clicked[0] + clicked[1]).addClass("hit");
            //increments the count of ships that have been hit
            shipsHit = shipsHit + 1;
            //displays the count of ships hit in the view
            $("#hits").text(shipsHit);
            //checks to see if 5 ships have been hit
            if (shipsHit === 5) {
              //add winning message
              $("#winner").text("You WIN!");
            }
          }
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
//create variable for ships that have been hit
var shipsHit = 0;
//create a variable for where a ship has been placed and set the value to -1
var aShipIsHere = -1;

//Purpose: create a function to place five ships randomly on the board
//Signature: nothing ---> return 2 numbers that correspond to positions on the board
//Example: placeShips() ----> [0,3],[1,4],[2,6],[7,5],[1,8]
function placeShips() {
  //checks ships is less than five
  while (ships < 5 ){
    //finds a random number for the row
    var row = Math.floor((Math.random()*10));
    //finds a random number for the column
    var column = Math.floor((Math.random()*10));
    //increments the count of ships for the while loop
    ships = ships + 1;
    //assigns the row and column to a ship position
    board[row][column]= aShipIsHere;
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
