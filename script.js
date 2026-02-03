document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const image = document.getElementById("mainImage");
  const buttons = document.getElementById("buttons");
  const music = document.getElementById("bgMusic");

  // NO button runs away but stays on screen
  noBtn.addEventListener("mouseenter", () => {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // YES button click
  yesBtn.addEventListener("click", () => {
    image.src = "./result.png";     // swap image
    buttons.style.display = "none"; // hide buttons
    music.play();                   // play music
  });
});
