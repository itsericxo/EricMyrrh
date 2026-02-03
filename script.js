window.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const questionImg = document.getElementById("question");
  const resultImg = document.getElementById("result");
  const music = document.getElementById("music");
  const buttons = document.getElementById("buttons");

  if (!noBtn || !yesBtn) {
    console.error("YES or NO button not found");
    return;
  }

  // NO runs away
  noBtn.addEventListener("mouseenter", () => {
    const padding = 40;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = "20";
  });

  // YES click
  yesBtn.addEventListener("click", () => {
    questionImg.style.display = "none";
    buttons.style.display = "none";
    resultImg.style.display = "block";

    if (music) music.play();
    createHearts();
  });

  function createHearts() {
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-20px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.animation = "floatUp 4s linear forwards";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatUp {
      to {
        transform: translateY(-110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
