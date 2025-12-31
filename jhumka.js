const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const smileBtn = document.getElementById("smileBtn");
const container = document.querySelector(".container");

/* ===============================
   INTRO SEQUENCE
   =============================== */

setTimeout(() => line1.style.opacity = "1", 800);
setTimeout(() => line2.style.opacity = "1", 2800);
setTimeout(() => smileBtn.style.opacity = "1", 5000);

/* ===============================
   CLICK → CELEBRATION
   =============================== */

smileBtn.addEventListener("click", () => {
  smileBtn.disabled = true;
  smileBtn.style.pointerEvents = "none";

  /* fade jhumka scene */
  container.style.opacity = "0";
  setTimeout(() => container.remove(), 1500);

  startConfetti();

  setTimeout(() => {
    startFireworks();
    showNewYear();
  }, 1200);

  setTimeout(() => {
    showCuteText();
    startHearts();
  }, 4200);
});

/* ===============================
   CONFETTI
   =============================== */

function startConfetti() {
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = randomColor();
    c.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function randomColor() {
  const colors = ["#ff4d6d", "#ffd166", "#4cc9f0", "#9b5de5", "#06d6a0"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* ===============================
   FIREWORKS (MOBILE SAFE)
   =============================== */

let canvas, ctx;

function startFireworks() {
  if (canvas) return; // prevent duplicates

  canvas = document.createElement("canvas");
  canvas.id = "fireworks";
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");

  resizeCanvas();

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      burst(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.45
      );
    }, i * 350);
  }

  setTimeout(() => {
    canvas.style.opacity = "0.6";
  }, 3000);
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  ctx.scale(dpr, dpr);
}

window.addEventListener("resize", () => {
  if (canvas) resizeCanvas();
});

function burst(x, y) {
  for (let i = 0; i < 70; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 30 + Math.random() * 90;

    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = randomColor();
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 12;
    ctx.fill();
  }

  ctx.shadowBlur = 0;
}

/* ===============================
   TEXT
   =============================== */

let textBox;

function showNewYear() {
  textBox = document.createElement("div");
  textBox.id = "newYearText";
  textBox.innerText = "happyyyy newww yeaarrrr";
  document.body.appendChild(textBox);

  setTimeout(() => {
    textBox.style.opacity = "1";
  }, 200);
}

function showCuteText() {
  const cute = document.createElement("div");
  cute.id = "cuteText";
  cute.innerText = "myyy cuteee chashmish 💖✨";
  textBox.appendChild(cute);

  setTimeout(() => {
    cute.style.opacity = "1";
  }, 200);
}

/* ===============================
   HEARTS
   =============================== */

function startHearts() {
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }
}
