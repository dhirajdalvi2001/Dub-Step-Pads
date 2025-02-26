const tempo = document.getElementById("tempo-value");

function playAudio(url) {
    new Audio(url).play();
}

function increment() {
tempo.value = parseInt(tempo.value) + 1;
}

function decrement() {
    tempo.value = parseInt(tempo.value) - 1;
}

let intervalId = null; 

function startMetronome() {
    clearInterval(intervalId); // Clear any previous interval first

    const interval = parseInt(tempo.value); // Get the tempo from input

    if (isNaN(interval) || interval <= 0) {
        console.warn("Invalid tempo value");
        return; // Stop execution if tempo is not valid
    }

    console.log("Playing metronome at BPM:", interval);
    
    new Audio('./metronome.mp3').play(); // Play immediately

    intervalId = setInterval(() => {
        console.log("Metronome Tick", 60000 / interval);
        new Audio('./metronome.mp3').play();
    }, 60000 / interval); // Convert BPM to milliseconds per beat
}

function stopMetronome() {
    clearInterval(intervalId);
    intervalId = null;
}