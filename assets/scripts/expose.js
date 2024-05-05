// expose.js

window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti();

function init() {
  hornSelection();
  volumeSelection();
}

function hornSelection() {
  const horn = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const hornButton = document.querySelector('#expose button');

  horn.addEventListener('change', () => {
    const hornType = horn.value;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.load();
  });

  hornButton.addEventListener('click', () => {
    if (horn.value === 'party-horn') {
      confetti.addConfetti();
    }
    hornAudio.play();
  });
}

function volumeSelection() {
  const volume = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');

  volume.addEventListener('change', () => {
    const volumeLevel = volume.value;

    if (volumeLevel == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeLevel >= 1 && volumeLevel < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeLevel >= 33 && volumeLevel < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }

    hornAudio.volume = volumeLevel / 100;
  });
}
