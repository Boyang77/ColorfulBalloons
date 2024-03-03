const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300', '#FF5733', '#FF5733'];

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  const size = Math.random() * 100 + 50;
  const color = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.background = color;
  balloon.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 8000);
}

function createBalloons() {
  setInterval(createBalloon, 1000);
}

createBalloons();
