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
        return Math.ceil(Math.random * 4);
    }
    
    // timeout for move duration
    function durationTimeout(e){
        setTimeout(function(){
            return e;
        }, duration);
    }
    
    // timeout for seq speed
    function seqSpeed(e){
        setTimeout(function(){
            return e++;
        }, gameSpeed);
    }
    
    // select playback piece
    
    function selectPiece(piece, type, button){ // type defines add/ remove
        switch(piece){
            case 1 : console.log("blue"); buttonModClass(type, button); break;
            case 2 : console.log("red");  buttonModClass(type, button);  break;
            case 3 : console.log("yellow"); buttonModClass(type, button); break;
            case 4 : console.log("green"); buttonModClass(type, button);break;
            default : console.log("bad piece"); break;
        }
    }
    
    //modify user turn
    function modifyUserTurn(){
        userTurn = !userTurn;
    }
    
    // handle error input
    function erroInput(){
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
    function userClicks(move, button){
        selectPiece(move, "add", button);
        setTimeout(function(){
           return selectPiece(move, "remove", button);
        }, userClickSpeed);
    }
    
    
    // keys and colors
    
    // btn modify class
    function buttonModClass(type, button){
        if(type == "add"){
            button.addClass("buttonActive");
        } else {
            button.removeClass("buttonActive");
        }
    }
    
    
    
    // add new move to seq
    this.addMove  = function(){
        data.push(newMove());
    };
    
    // playback seq
    
    this.seqPlayback = function(){
        var playback = true;
        var i = 0;
        while(playback){
            selectPiece(data[i], "add");
            durationTimeout(selectPiece(data[i], "remove"));
            if(i < data.length) {
                i = seqSpeed(i);   
            } else {
                modifyUserTurn();
                return !playback;
            }
        } 
        return;   
    };  // seq playback
    
    
    // user seqValidator
    
    this.seqValidator = function(move, button){
        if(userTurn){
            userClicks(move, button);
            if(move == data[counter]){
               counter++; 
            } else {
                handleErrorInput();
            }
        }
        
        if(counter == 20){
            return gameWon();
        }
        
        if(counter == data.length){
            return seqComplete();
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
    
} // logic constructor


