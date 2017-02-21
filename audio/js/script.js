// SONGS

var blondieMusic = document.getElementById("myAudio"); 

var nancyMusic = document.getElementById("myAudio2"); 

var dollyMusic = document.getElementById("myAudio3");

var madonnaMusic = document.getElementById("myAudio4");  

// IMAGES

var blondieImg = document.getElementById("blondiebw");

var nancyImg = document.getElementById("nancyimg");

var dollyImg = document.getElementById("dollyimg");

var madonnaImg = document.getElementById("madonnaimg");



// BLONDIE

function playAudio() { 
    blondieMusic.play();
    blondieImg.src='images/blondie.jpg'; 
    pauseAudio2();
    nancyImg.src='images/nancybw.jpg';
    pauseAudio3();
    dollyImg.src='images/dollybw.jpg';
    pauseAudio4();
    madonnaImg.src='images/madonnabw.jpg';
} 

function pauseAudio() { 
    blondieMusic.pause(); 
    blondieImg.src='images/blondiebw.jpg';
} 

// NANCY

function playAudio2() { 
    nancyMusic.play();
    nancyImg.src='images/nancy.jpg';
    pauseAudio();
    blondieImg.src='images/blondiebw.jpg';
    pauseAudio3();
    dollyImg.src='images/dollybw.jpg';
    blondieImg.src='images/blondiebw.jpg';
    pauseAudio4();
    madonnaImg.src='images/madonnabw.jpg'; 

} 

function pauseAudio2() { 
    nancyMusic.pause(); 
    nancyImg.src='images/nancybw.jpg';
} 

// DOLLY

function playAudio3() { 
    dollyMusic.play();
    dollyImg.src='images/dolly.jpg'; 
    pauseAudio();
    blondieImg.src='images/blondiebw.jpg';
    pauseAudio2();
    nancyImg.src='images/nancybw.jpg';
    blondieImg.src='images/blondiebw.jpg';
    pauseAudio4();
    madonnaImg.src='images/madonnabw.jpg'; 
} 

function pauseAudio3() { 
    dollyMusic.pause(); 
    dollyimg.src='images/dollybw.jpg';
} 

// MADONNA

function playAudio4() { 
    madonnaMusic.play();
    madonnaImg.src='images/madonna.jpg'; 
    pauseAudio();
    blondieImg.src='images/blondiebw.jpg';
    pauseAudio2();
    nancyImg.src='images/nancybw.jpg';
    pauseAudio3();
    dollyImg.src='images/dollybw.jpg';
} 

function pauseAudio4() { 
    madonnaMusic.pause(); 
    madonnaimg.src='images/madonnabw.jpg';
} 


