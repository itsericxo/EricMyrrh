const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const yesScreen = document.getElementById("yesScreen");
const music = document.getElementById("bgMusic");

// No button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button click
yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
  music.play();
  startHearts();
});

// Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
