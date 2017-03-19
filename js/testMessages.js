var messages = {
    messageBank : [
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
    ],
    count: 1,
    
    updateCount : function(count){
        this.count = count;
        messageDisplay.css({width: "100%", left: "50%"});
        messageDisplay.html(count);
        TweenLite.to(messageDisplay, .1, {opacity: 1});
    },
    
    playMessage : function(index){
        //TweenLite.to(messageDisplay, .25, {opacity: 0});
        messageDisplay.css({width: "1000px", left: "160%"});
        messageDisplay.html(this.messageBank[index]);
        messageAnimation.play(0);
        messageAnimation.eventCallback("onComplete", this.updateCount, [this.count]);
    }

}

var messageAnimation = new TimelineLite({paused: true});
messageAnimation.to(messageDisplay, .1, {opacity: 1});
messageAnimation.to(messageDisplay, 7, {left: "-160%"}, "-=.1");
messageAnimation.to(messageDisplay, .1, {opacity: 0}, "-=.1");