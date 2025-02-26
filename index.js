const tempo = document.getElementById("tempo-value");

async function playAudio(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const audio = new Audio(objectURL);
    audio.play();
}

function increment() {
tempo.value = parseInt(tempo.value) + 1;
}

function decrement() {
    tempo.value = parseInt(tempo.value) - 1;
}

let intervalId = null; 

async function startMetronome() {
    clearInterval(intervalId); // Clear any previous interval first

    const interval = parseInt(tempo.value); // Get the tempo from input

    if (isNaN(interval) || interval <= 0) {
        console.warn("Invalid tempo value");
        return; // Stop execution if tempo is not valid
    }

    const metronomeURL = 'https://github.com/dhirajdalvi2001/Dub-Step-Pads/blob/main/sounds/metronome.mp3?raw=true'

    const response = await fetch(metronomeURL);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const audio = new Audio(objectURL);
    
    audio.play(); // Play immediately

    intervalId = setInterval(() => {
        audio.play();
    }, 60000 / interval); // Convert BPM to milliseconds per beat
}

function stopMetronome() {
    clearInterval(intervalId);
    intervalId = null;
}

tempo.addEventListener('change', startMetronome())