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
    
    var blue, red, yellow, green;
    
    this.setButtons = function(blue, red, yellow, green){
        blue = blue;
        red = red;
        yellow = yellow;
        green = green;
        console.log(blue, red, yellow, green);
    }
    

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
        setTimeout(function(){
            return e++;
        }, gameSpeed);
    }
    
    // select playback piece
    
    function selectPiece(piece, type){ // type defines add/ remove
        console.log("select piece: ", piece);
        switch(piece){
            case 1 : blueBtn(type); break;
            case 2 : redBtn(type);  break;
            case 3 : yellowBtn(type); break;
            case 4 : greenBtn(type);break;
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
    
    
    // keys and colors
    
    // blue btn
    function blueBtn(type, button){
        if(type == "add"){
            $(blue).addClass("blueActive");
        } else {
            $(blue).removeClass("blueActive");
        }
    }
    
      // red btn
    function redBtn(type, button){
        if(type == "add"){
            $(red).addClass("redActive");
        } else {
            $(red).removeClass("redActive");
        }
    }
    
      // yellow btn
    function yellowBtn(type, button){
        console.log("yellowBtn");
        if(type == "add"){
            $(yellow).addClass("yellowActive");
            console.log("yellowBtn add");
        } else {
            $(yellow).removeClass("yellowActive");
            console.log("yellowBtn remove");
        }
    }
    
      // green btn
    function greenBtn(type, button){
        if(type == "add"){
           $(green).addClass("greenActive");
        } else {
            $(green).removeClass("greenActive");
        }
    }
    
    
    
    // add new move to seq
    this.addMove  = function(){
        data.push(newMove());
        console.log(data);
    };
    
    // playback seq
    
    this.seqPlayback = function(){
        var playback = true;
        var i = 1;
        while(playback){
            console.log("seq playback: ",data[i]);
            selectPiece(data[i -1], "add");
            durationTimeout(selectPiece(data[i -1], "remove"));
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
    
    this.seqValidator = function(move){
        console.log(userTurn);
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
    
    // return data object
    this.getData = function(){
        return data;
    }
    
} // logic constructor


