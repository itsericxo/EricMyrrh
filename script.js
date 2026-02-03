window.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const questionImg = document.getElementById("question");
  const resultImg = document.getElementById("result");
  const buttons = document.getElementById("buttons");
  const music = document.getElementById("music");

  /* Store original NO position */
  const baseX = noBtn.offsetLeft;
  const baseY = noBtn.offsetTop;

  /* NO moves slightly but stays nearby */
  noBtn.addEventListener("mouseenter", () => {
    const range = 160; // how far NO can dodge (px)

    const offsetX = Math.random() * range * 2 - range;
    const offsetY = Math.random() * range * 2 - range;

    noBtn.style.left = `${baseX + offsetX}px`;
    noBtn.style.top = `${baseY + offsetY}px`;
  });

  /* YES click */
  yesBtn.addEventListener("click", () => {
    questionImg.style.display = "none";
    buttons.style.display = "none";
    resultImg.style.display = "block";

    if (music) music.play();
    createHearts();
  });

  /* Floating hearts */
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

