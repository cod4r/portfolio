let musicPlayed = false;

function toggleCard(card) {
  card.classList.toggle('opened');

  if (card.classList.contains('opened')) {
    // Play music once
    if (!musicPlayed) {
      const music = document.getElementById('birthdayMusic');
      music.play();
      musicPlayed = true;
    }

    // Butterflies fly out
    const rect = card.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
      const butterfly = document.createElement('div');
      butterfly.className = 'butterfly';
      butterfly.style.setProperty('--randX', Math.random());
      butterfly.style.left = `${startX}px`;
      butterfly.style.top = `${startY}px`;
      document.body.appendChild(butterfly);
      setTimeout(() => butterfly.remove(), 4000);
    }
  }
}
