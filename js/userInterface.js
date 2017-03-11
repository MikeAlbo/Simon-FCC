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
            case 37: handlePieceFour();
            break;
            case 38: handlePieceOne();
            break;
            case 39: handlePieceTwo();
            break;
            case 40: handlePieceThree();
            break;
            case 83: createNewGame();
            break;
            case 68: modifyDangerMode();
            break;
            case 88: modifyStrictMode();
            break;
            default: return;
        }
    });
    
    
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
    
    //==================================
    
    // main buttons
    
    // btn 1
    $(buttonOne).click(function(){
        handlePieceOne();
    });
    
    // btn 2
    $(buttonTwo).click(function(){
        handlePieceTwo();
    });
    
    // btn 3
    $(buttonThree).click(function(){
       handlePieceThree(); 
    });
    
    // btn 4
    $(buttonFour).click(function(){
       handlePieceFour(); 
    });
    
    
    //==================================
    
    
    // create a new game
    function createNewGame(){
        newGame = new Logic();
        newGame.setButtons(buttonOne, buttonTwo, buttonThree, buttonFour);
        // new game message scroll with countdown
        setTimeout(function(){
            newGame.addMove();
            newGame.seqPlayback();
        }, 500);
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
    
    // handle piece one
    function handlePieceOne(){
        if(newGame){
            newGame.seqValidator(1);
        }
    }
    
    // handle piece two
    function handlePieceTwo(){
        if(newGame){
            newGame.seqValidator(2);
        }
    }
    
    // handle piece Three
    function handlePieceThree(){
        if(newGame){
            newGame.seqValidator(3);
        }
    }
    
    // handle piece four
    function handlePieceFour(){
        if(newGame){
            newGame.seqValidator(4);
        }
    }
    
    
}); // doc ready