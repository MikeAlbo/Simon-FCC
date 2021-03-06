
// audio js

var context;

window.addEventListener('load', init, false);

// init the audio context
function init(){
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        console.log("AudioContext created!");
    }
    catch(e) {
        alert("Web Audio not supported in your browser, please try a newer release of Safari, Chrome, or Firefox");
        }
}

// load multiple audio files 

var audioSources = {
    simon1: {
//        playback: "null", 
        webLink : './audioFiles/simonSound1.mp3'
    },
    simon2: {
//        playback: "null", 
        webLink : './audioFiles/simonSound2.mp3'
    },
    simon3: {
//        playback: "null", 
        webLink : './audioFiles/simonSound3.mp3'
    },
    simon4: {
//        playback: "null", 
        webLink : './audioFiles/simonSound4.mp3'
    }
}



function AudioLoadBuffer(source){
    this.source = source;
    
    this.loadData = function(){
        for(var file in source){
           httpReq(file);
        }
    }
    
    function httpReq(file){
        //console.log(url);
        var request = new XMLHttpRequest();
        request.open('GET', source[file].webLink, true);
        request.responseType = 'arraybuffer'; 
        request.onload = function(){
             context.decodeAudioData(request.response, function(res){
                audioSources[file].playback = res;
                 
            });
            
        }
        request.send();  
    } }
    
    
    function playBack(buffer, start = 0){
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(start);
}




var newAudio = new AudioLoadBuffer(audioSources);
newAudio.loadData();


// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create error tone
function errorTone(button){
    playBack(button);
}

// =========  interface with audio playback ==========


function playSound(button) {
    switch (button) {
        case 1 : playBack(audioSources.simon1.playback); break;
        case 2 : playBack(audioSources.simon2.playback); break;
        case 3 : playBack(audioSources.simon3.playback); break;
        case 4 : playBack(audioSources.simon4.playback); break;
        default : console.log("bad input");
    }
}