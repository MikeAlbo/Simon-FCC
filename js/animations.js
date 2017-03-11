// Animations

// vars

var animatonDuration = .1;

var blueButtonTimeLine = new TimelineLite(),
    redButtonTimeLine = new TimelineLite(),
    yellowButtonTimeLine = new TimelineLite(),
    greenButtonTimeLine = new TimelineLite();

// blue button

blueButtonTimeLine.to(buttonOne, animatonDuration, {backgroundColor: "rgba(50,200,250,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

blueButtonTimeLine.pause();

function blueButtonAnimation(duration){
        blueButtonTimeLine.play();
        setTimeout(function(){blueButtonTimeLine.reverse()}, duration);
    }


// red button

redButtonTimeLine.to(buttonTwo, animatonDuration, {backgroundColor: "rgba(250,50,50,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

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

greenButtonTimeLine.to(buttonFour, animatonDuration, {backgroundColor: "rgba(50,250,100,1)", boxShadow: " inset 1px 1px 50px 5px white"} );

greenButtonTimeLine.pause();

function greenButtonAnimation(duration){
        greenButtonTimeLine.play();
        setTimeout(function(){greenButtonTimeLine.reverse()}, duration);
    }

