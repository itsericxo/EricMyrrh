const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");
const yayImg = document.getElementById("yayImg");
const question = document.getElementById("questionImg");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");

// Create hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Random heart emojis
  const hearts = ["❤️", "💖", "💕", "💘", "💝"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// YES click
yes.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";

  yayImg.style.display = "block";
  result.style.display = "block";

  music.play();

  if (!heartInterval) {
  heartInterval = setInterval(createHeart, 300);
}
});

// NO hover — move inside container
no.addEventListener("mouseenter", () => {
  const maxX = buttons.clientWidth - no.clientWidth;
  const maxY = buttons.clientHeight - no.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});



