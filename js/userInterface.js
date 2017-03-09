// user interface



$(document).ready(function(){
    
    var boardRotation = 0,
        newGame = null;
    
    // link DOM elements
    var playButton = $("#playButton");
    var buttonOne = $("#simonTouchOne");
    var buttonTwo = $("#simonTouchTwo");
    var buttonThree = $("#simonTouchThree");
    var buttonFour = $("#simonTouchFour");
    
    var output = $("#outputScreen");
    var startButton = $("#startResetButton");
    var strictButton = $("#strictModeButton");
    var dangerButton = $("#dangerButton");
    
    // keyboard listener;
    
    $(document).keydown(function(e){
        switch(e.which){
            case 37: keyTestFunction("left");
            break;
            case 38: keyTestFunction("up");
            break;
            case 39: keyTestFunction("right");
            break;
            case 40: keyTestFunction("down");
            break;
            case 83: keyTestFunction("s")
            break;
            case 68: keyTestFunction("d");
            break;
            case 88: keyTestFunction("x");
            break;
            default: return;
        }
    });
    
    function keyTestFunction(e){
        console.log("key: " + e);
    }
    
    
    // strict button
    
    $(strictButton).click(function(){
        if(!newGame){
            // create a new game
        }
        newGame.strictMode();
    });
    
    // danger button 
    $(dangerButton).click(function(){
        if(!newGame){
            // create new game
        }
        newGame.dangerMode();
    })
    
    
    
}); // doc ready