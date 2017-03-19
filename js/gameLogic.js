// game logic

var Logic = function(){
    var counter = 0,
        data = [],
        gameSpeed = 1000,
        duration = 250,
        userClickSpeed = 100,
        dangerMode = false,
        strictMode = false,
        startGame = false,
        userTurn = false,
        message;
    
//    message = new MessageGenerator();
    
    // generate a new move
    function newMove(){
        return Math.ceil(Math.random() * 4);
    }
    
    // select playback piece
    
    function selectPiece(piece){ // type defines add/ remove
        switch(piece){
            case 1 : blueButtonAnimation(duration); break;
            case 2 : redButtonAnimation(duration);  break;
            case 3 : yellowButtonAnimation(duration); break;
            case 4 : greenButtonAnimation(duration);  break;
            default : console.log("bad piece: ", piece ); break;
        }
    }
    
    //modify user turn
    function modifyUserTurn(){
        userTurn = !userTurn;
        //console.log("user turn: " + userTurn);
    }
    
    // handle error input
    function errorInput(input){
        // playback piece audio (error tone) and flash piece
       setTimeout(function(){
            selectPiece(input);
            errorTone();
            modifyUserTurn();
           
           if(strictMode || dangerMode){
            return endGame();
           }    
           
           messages.playMessage(8);
           //console.log("user error, non strict mode");
           seqPlayback();
            counter = 0;
       }, 500);
        // message output
        
    };

    // end game 
    function endGame(){
        //console.log("user error, strict mode");
        messages.playMessage(9);
        data = [];
        counter = 0;
        aiTurn();
    }
    // seq complete
    function seqComplete(){
        counter = 0;
        modifyUserTurn();
        aiTurn();
        // playback chime and message
    }
    
    // game won
    function gameWon(){
        messages.playMessage(10);
        // reset game
    }
    
    // user clicks button
    function userClicks(move){
        playSound(move);
        selectPiece(move);
    }
    
    // add new move to seq
    function addMove(){
        return data.push(newMove());
    };
    
    // seq playback
    
    function seqPlayback(){
        var i = 0;
        var interval = setInterval(move, gameSpeed);
        function move(){
            if(i == data.length) {
                clearInterval(interval);
                modifyUserTurn();
                if(dangerMode) {
                    dangerRotate();
                }
            } else {
                playSound(data[i]);
                selectPiece(data[i]);
                i++;
                //console.log("move");
            }
        }
        
    }
    
    // ai turn
    function aiTurn(){
        addMove();
        seqPlayback();
        setTimeout(function(){
            messages.updateCount(data.length);
        }, 1000);
    }
    
    
    // init  the game via userInterface
    this.initGame = function(){
        addMove();
        seqPlayback();
    }
    
    
    // user seqValidator
       this.seqValidator = function(move){
        if(userTurn){
            userClicks(move);
            if(move == data[counter]){
               counter++; 
            } else {
                errorInput(data[counter]);
            }
            
            if(counter == 20){
            return gameWon();
            }
        
            if(counter == data.length){
            seqComplete();
            }
           
        }
        

    }
    
    
    
    
    // strict mode 
    this.strictMode = function(){
        strictMode = !strictMode;
        //console.log("strict mode: ", strictMode);
        if(strictMode){
            messages.playMessage(1);
        } else {
            messages.playMessage(2);
        }
    }
    
    // danger mode
    this.dangerMode = function(){
        dangerMode = !dangerMode;
        dangerMode ? dangerModeAnimation() : dangerModeReverse();
        if(dangerMode){
            messages.playMessage(4);
        } else {
            messages.playMessage(5);
        }
        //console.log("danger mode: ", dangerMode);
    }
    
    // return data object
    this.getData = function(){
        return data;
    }
    
} // logic constructor


