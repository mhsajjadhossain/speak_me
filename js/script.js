let ask = document.querySelector('#ask');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

btn.addEventListener('click', function () {
    let c = ask.value.toLowerCase();
    let reply = '';

    if (c.match('hello')) {
        reply = 'Hello there. How can I help you';
    }
    else if (c.match('How are you')) {
        reply = 'I\'m good!and you';
    }
    else if (c.match('what can you do')) {
        reply = 'I can fuck your ass!';
    }
    else if (c.match('sing me a song')) {
        reply = 'Baby baby baby oooooooooo';
    }
    else if(c.match('who am i')){
        reply = 'you are a motherchod'
    }

    var kotha = new SpeechSynthesisUtterance(reply);
    var voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.speak(kotha);
    kotha.voice = voices[5]; 

    result.innerHTML = reply;


})