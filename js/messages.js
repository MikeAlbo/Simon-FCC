// messages 

var MessageGenerator  = function(){
    
    var messageDisplay = $("#outputScreen p");
    
    var messageAnimation = new TimelineLite();
    
    var messageBank = [
        "Welcome to Simon!!  Press Start to play!",
        "Strict Mode is ON",
        "Strict Mode is OFF",
        "New Game!",
        "DANGER MODE IS ON!!!!!",
        "Danger mode is OFF",
        "Keyboard mode is ON",
        "Keyboard mode is OFF",
        "Try again!",
        "Game Over",
        "You Won!!!"
    ]
    
    this.updateCount = function(count){
        updateMessageContent(count);
    }
    
    this.outputMessage = function(messageIndex){
        TweenLite.to(messageDisplay, .1, {opacity: 0});
        clearMessageScreen();
        updateMessageContent(messageBank[messageIndex]);
        messageAnimation.play();
    }
    
    
    function clearMessageScreen(speed){
        messageDisplay.html('');
    }
    
    function updateMessageContent(content){
        messageDisplay.html(content);
    }
    
    messageAnimation.to(messageDisplay, 3, {opacity: 1});
    messageAnimation.to(messageDisplay, 3, {right: "100%"});
    messageAnimation.pause();
    
}