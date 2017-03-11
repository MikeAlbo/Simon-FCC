// game logic

var Logic = function(){
    var counter = 0,
        data = [],
        gameSpeed = 1000,
        duration = 1000,
        userClickSpeed = 100,
        dangerMode = false,
        strictMode = false,
        startGame = false,
        userTurn = false;
    
    
    // generate a new move
    function newMove(){
        return Math.ceil(Math.random() * 4);
    }
    
    // timeout for move duration
    function durationTimeout(e){
        setTimeout(function(){
            return e;
        }, duration);
    }
    
    // timeout for seq speed
    function seqSpeed(e){
        console.log("e: " + e);
        setTimeout(function(){
            console.log("seqSpeed: " + e++);
            return e++;
        }, gameSpeed);
    }
    
    // select playback piece
    
    function selectPiece(piece, type){ // type defines add/ remove
        switch(piece){
            case 1 : console.log("blue"); break;
            case 2 : console.log("red");  break;
            case 3 : console.log("yellow"); break;
            case 4 : console.log("green");break;
            default : console.log("bad piece: ", piece ); break;
        }
    }
    
    //modify user turn
    function modifyUserTurn(){
        userTurn = !userTurn;
    }
    
    // handle error input
    function errorInput(){
        // playback piece audio (error tone) and flash piece
      if(strictMode){
          //reset game
      }    
    };
    
    // seq complete
    function seqComplete(){
        counter = 0;
        modifyUserTurn();
        // playback chime and message
    }
    
    // game won
    function gameWon(){
        // game won animation and audio seq
        // reset game
    }
    
    // user clicks button
    function userClicks(move){
        selectPiece(move, "add");
        setTimeout(function(){
           return selectPiece(move, "remove");
        }, userClickSpeed);
    }
    
    // add new move to seq
    function addMove(){
        data.push(newMove());
        console.log("add move: ");
        console.log(data);
    };
    
    // playback seq
    
//    function seqPlayback(){
//        console.log("seq playback");
//        var playback = true;
//        var i = 1;
//        console.log("while outside of while loop: " + i);
//        while(playback){
//            console.log("i entering while loop: " + i);
//            console.log(data[i -1]);
//            selectPiece(data[i -1], "add");
//            durationTimeout(selectPiece(data[i -1], "remove"));
//            if(i < data.length) {
//                setTimeout(function(){
//                    i++;
//                    console.log("inside of timeout: " + i);
//                }, gameSpeed);
//            } else {
//                modifyUserTurn();
//                return !playback;
//            }
//        } 
//        return;   
//    };  // seq playback
    
    function seqPlayback(){
        for(var i = 0; i < data.length; i++){
            setTimeout(function(){
                selectPiece(data[i - 1], "add");
                durationTimeout(selectPiece(data[i - 1], "remove"));
            }, gameSpeed);
        }
        
        modifyUserTurn();
    } // seq playback 
    
    // ai turn
    function aiTurn(){
        addMove();
        seqPlayback();
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
                errorInput();
            }
        }
        
        if(counter == 20){
            return gameWon();
        }
        
        if(counter == data.length){
            seqComplete();
            aiTurn();
            
        }
    }
    
    
    
    
    // strict mode 
    this.strictMode = function(){
        strictMode = !strictMode;
    }
    
    // danger mode
    this.dangerMode = function(){
        dangerMode = !dangerMode;
    }
    
    // return data object
    this.getData = function(){
        return data;
    }
    
} // logic constructor


