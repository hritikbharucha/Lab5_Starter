// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  window.speechSynthesis.onvoiceschanged = populateVoiceList;


  let button = document.getElementById('speak-button');
  button.addEventListener('click', speak);
  function speak(e) {
    let text = document.getElementById('text-to-speak');
    let select = document.getElementById("voice-select");
    let voiceIdentifier = select.options[select.selectedIndex];
    let voices = speechSynthesis.getVoices();
    let selectedVoice = voices.find(voice => voice.name === voiceIdentifier.getAttribute('data-name'));

    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = selectedVoice;

    let pic = document.getElementById('smiley');
    utterance.addEventListener('start', () => {
      pic.src = "assets/images/smiling-open.png";
    });

    utterance.addEventListener('end', () => {
      pic.src = "assets/images/smiling.png";
    });

    speechSynthesis.speak(utterance);
  }
}
