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
        userTurn = false;
    
    
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
        console.log("user turn: " + userTurn);
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
        aiTurn();
        // playback chime and message
    }
    
    // game won
    function gameWon(){
        // game won animation and audio seq
        // reset game
    }
    
    // user clicks button
    function userClicks(move){
        selectPiece(move);
    }
    
    // add new move to seq
    function addMove(){
        return data.push(newMove());
    };
    
    // playback seq
    
//    function seqPlayback(){
//        var i = 0;
//        console.log("data: " + data);
//        setInterval(function(){
//           if(i >= data.length){
//               console.log("setInterval");
//               clearInterval();
//           } else {
//                console.log("data[i]: called on selectPiece: " + data[i]);
//                selectPiece(data[i]);
//                i++;
//           }
//        }, gameSpeed);
//        
//        modifyUserTurn();
//    } // seq playback 
    
    
    // seq playback
    
    function seqPlayback(){
        var i = 0;
        var interval = setInterval(move, gameSpeed);
        function move(){
            if(i == data.length) {
                clearInterval(interval);
                modifyUserTurn();
            } else {
                selectPiece(data[i]);
                i++;
                console.log("move");
            }
        }
        
    }
    
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


