// Animations

// vars

var animatonDuration = .1,
    keyboardOn = false;

var blueButtonTimeLine = new TimelineLite(),
    redButtonTimeLine = new TimelineLite(),
    yellowButtonTimeLine = new TimelineLite(),
    greenButtonTimeLine = new TimelineLite(),
    dangerModeTimeLine = new TimelineLite(),
    switchAnimation = new TimelineLite(),
    keyboardRotation = new TimelineLite();


// iQuery links

var switchDiv = $("#switch"),
    switchBox = $("#switchBox");

// blue button

blueButtonTimeLine.to(buttonOne, animatonDuration, {backgroundColor: "rgba(61,168,242,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

blueButtonTimeLine.pause();

function blueButtonAnimation(duration){
        blueButtonTimeLine.play();
        setTimeout(function(){blueButtonTimeLine.reverse()}, duration);
    }


// red button

redButtonTimeLine.to(buttonTwo, animatonDuration, {backgroundColor: "rgba(255,84,81,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

redButtonTimeLine.pause();

function redButtonAnimation(duration){
        redButtonTimeLine.play();
        setTimeout(function(){redButtonTimeLine.reverse()}, duration);
    }

// yellow button

yellowButtonTimeLine.to(buttonThree, animatonDuration, {backgroundColor: "rgba(220,250,50,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

yellowButtonTimeLine.pause();

function yellowButtonAnimation(duration){
        yellowButtonTimeLine.play();
        setTimeout(function(){yellowButtonTimeLine.reverse()}, duration);
    }

// green button

greenButtonTimeLine.to(buttonFour, animatonDuration, {backgroundColor: "rgba(34,229,5,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

greenButtonTimeLine.pause();

function greenButtonAnimation(duration){
        greenButtonTimeLine.play();
        setTimeout(function(){greenButtonTimeLine.reverse()}, duration);
    }



// ====== danger mode animation =======

var simonBody = $("#simonBody");
var groupedGamePieces = $("#groupedGamePieces");

function dangerModeAnimation(){
 
    dangerModeTimeLine.to(simonBody, .1, {boxShadow: "10px 15px 25px 10px rgba(244,44,76,1)"});
    
    dangerModeTimeLine.play();
}

function dangerModeReverse(){
    dangerModeTimeLine.to(simonBody, .5, {boxShadow: "5px 10px 25px 1px rgba(50,50,50,.8)"});
    selected = 0;
    dangerRotate(true);
    dangerModeTimeLine.play();
}

var selected = 0;

function dangerRotate(reset){
    selected += (generateNewValue(selected));
    if(reset){
        selected = 0;
        TweenLite.to(groupedGamePieces, 2, {transform: 'rotateZ('+selected+'deg)'});
        TweenLite.to(groupedGamePieces, 2, {transform: 'rotateZ('+ 360 +'deg)'});
    }
    
    TweenLite.to(groupedGamePieces, 2, {transform: 'rotateZ('+selected+'deg)'});
    selected = 0;
}


function generateNewValue(selected){
    return (Math.floor(Math.random() * 360));
}


// ====== keyboard  mode animation =======

$(switchDiv).click(function(){keyboard()});

//activate keyboard
function keyboard(){
    if(!keyboardOn){
        keyboardRotation.play();
        switchAnimation.play();
    } else {
        keyboardRotation.reverse();
        switchAnimation.reverse();
    }
    
    keyboardOn = !keyboardOn;
}


//board rotation
keyboardRotation.to(groupedGamePieces, 1, {transform: 'rotateZ(45deg)'});
keyboardRotation.pause();

// fade in keyboard hints

// keyboard switch animation

switchAnimation.to(switchDiv, .1, {left : "50%", boxShadow: "-2px 1px 5px 1px rgba(50,50,50,.7)", backgroundColor: "rgba(92,217,26,.5)"});
switchAnimation.pause();


