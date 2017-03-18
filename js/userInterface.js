// user interface



$(document).ready(function(){
    
    var boardRotation = 0,
        newGame = null;
    
//    // link DOM elements
//    var playButton = $("#playButton");
//    var buttonOne = $("#simonTouchOne");
//    var buttonTwo = $("#simonTouchTwo");
//    var buttonThree = $("#simonTouchThree");
//    var buttonFour = $("#simonTouchFour");
//    
//    var output = $("#outputScreen");
//    var startButton = $("#startResetButton");
//    var strictButton = $("#strictModeButton");
//    var dangerButton = $("#dangerButton");
    
    //var audio = new (window.AudioContext || window.webkitAudioContext)();
    
    

   
    
    // keyboard listener;
    
    $(document).keydown(function(e){
        switch(e.which){
            case 51: handlePieceFour();
            break;
            case 49: handlePieceOne();
            break;
            case 50: handlePieceTwo();
            break;
            case 52: handlePieceThree();
            break;
            case 99 : handlePieceFour();
            break;
            case 97: handlePieceOne();
            break;
            case 98: handlePieceTwo();
            break;
            case 100: handlePieceThree();
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
        // new game message scroll with countdown
        setTimeout(function(){
            newGame.initGame();
        }, 200);
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