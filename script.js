document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const main = document.getElementById("main");
  const yesScreen = document.getElementById("yesScreen");
  const music = document.getElementById("bgMusic");

  // No button runs away
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // Yes button click
  yesBtn.addEventListener("click", () => {
    main.classList.add("hidden");
    yesScreen.classList.remove("hidden");
    music.play();
  });
});
