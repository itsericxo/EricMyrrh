const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");
const question = document.getElementById("questionImg");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");

// YES click
yes.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";
  result.style.display = "block";
  music.play();
});

// NO hover — move around but stay visible
no.addEventListener("mouseenter", () => {
  const maxX = buttons.clientWidth - no.clientWidth;
  const maxY = buttons.clientHeight - no.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});
