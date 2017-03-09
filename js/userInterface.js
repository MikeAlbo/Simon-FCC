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
            case 83: keyTestFunction("s"); createNewGame();
            break;
            case 68: keyTestFunction("d"); modifyDangerMode();
            break;
            case 88: keyTestFunction("x"); modifyStrictMode();
            break;
            default: return;
        }
    });
    
    function keyTestFunction(e){
        console.log("key: " + e);
    }
    
    // start button
    $(startButton).click(function(){
        createNewGame();
    });
    
    
    // strict button
    
    $(strictButton).click(function(){
        modifyStrictMode();
    });
    
    // danger button 
    $(dangerButton).click(function(){
        modifyDangerMode();
    });
    
    
    // create a new game
    function createNewGame(){
        newGame = new Logic();
        console.log("new game created");
    }
    
    // handle strict mode
    function modifyStrictMode(){
        if(!newGame){
            createNewGame();
        }
        newGame.strictMode();
    }
    
    // handle danger mode
    function modifyDangerMode(){
        if(!newGame){
           createNewGame();
        }
        newGame.dangerMode();
    }
    
}); // doc ready