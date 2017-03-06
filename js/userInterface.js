// user interface

var boardRotation = 0;

$(document).ready(function(){
    
    // danger button demo
    $("#dangerButton").on("click", function(){
        
        boardRotation += 90;
        
        $("#groupedGamePieces").css("transform", "rotate("+boardRotation+"deg)");
        
        $("#outputScreen p").text(boardRotation);
    });
}); // doc ready