// game logic

var Logic = function(){
    var counter = 0,
        data = [],
        gameSpeed = 1000,
        playbackMoveLength = 1000,
        dangerMode = false,
        strictMode = false,
        startGame = false;
    
    this.addPiece = function(){
        var move = Math.ceil(Math.random() * 4);
        data.push(move); // add data to dataset
        playbackPiece(gameSpeed, playbackMoveLength);
        
    };
    
    function playbackPiece(gameSpeed, playbackMoveLength){
        // gamespeed sets timeout for each piece playback
        // playbackMoveLength sets time each piece plays
        // switch statement used to choose which buttons css to modify and which sound to play
    }
    
}


