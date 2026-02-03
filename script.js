document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const image = document.getElementById("mainImage");
  const buttons = document.getElementById("buttons");
  const music = document.getElementById("bgMusic");

  // No button runs away
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 120) + "px";
  });

  // Yes button click
  yesBtn.addEventListener("click", () => {
    image.src = "./result.png";     // swap image
    buttons.style.display = "none"; // remove buttons
    music.play();
  });
});
