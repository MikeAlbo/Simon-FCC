// messages 

var TestMess = function(){
    return "holla";
}

var MessageGenerator  = function(){
    
    var messageAnimation = new TimelineLite({paused: true});
    var x = 1;
    
    function getX(){
        return x;
    }
    
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
    ];
    
    this.getCount  = function(count){
            setX(count).then(function(){
            displayCount.then(function(){
            TweenLite.to(messageDisplay, .2, {opacity: 1});
            }); 
        }).catch(function(err){
            console.log(err);
        })
         
    };
    
    function setX(count) {
        return new Promise(function(resolve, reject){
            x = count;
            if(x){
                resolve(true);
            } else {
                reject("x was not set");
            }
        });
    }
    
    
    this.getMessage = function(index){
        resetMessage();
        messageDisplay.html(messageBank[index]);
        messageAnimation.play();
        
    }
    
    messageAnimation.to(messageDisplay, .1, {opacity: 1});
    messageAnimation.to(messageDisplay, 8, {left: "-200%"});
    messageAnimation.eventCallback("onComplete", updateCount);
    
    
    
//    function displayCount(count){
//        console.log("displayCount!!@");
//        messageDisplay.css({left: "50%", textAlign: "center", opacity: 0}).html(x); 
//    }
    
    var displayCount = new Promise(function(resolve, reject){
        updateCount(getX());
        resolve(true);
    });
    
    function updateCount(x){
        messageDisplay.html(x);
        console.log(x);
        messageDisplay.css({left: "50%", textAlign: "center", opacity: 0});
    }
    
    function resetMessage(){
        messageDisplay.css({left: "200%", width: "1000px", opacity: 0});
    }
    
};


// create new message instance