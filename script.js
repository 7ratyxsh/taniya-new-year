/* ===============================
   INDEX PAGE — GIFT FLOW
   =============================== */

const screen = document.getElementById("screen");
const overlay = document.getElementById("giftOverlay");
const video = document.getElementById("giftVideo");
const bouquet = document.getElementById("bouquet");
const textBox = document.getElementById("giftText");
const lines = document.querySelectorAll("#giftText .line");
const continueBtn = document.getElementById("continueBtn");

/* YES clicked */
function showGift() {
  screen.style.display = "none";
  overlay.style.display = "flex";

  video.style.opacity = "1";
  video.currentTime = 0;
  video.play();

  video.onended = () => {
    video.style.opacity = "0";
    setTimeout(showBouquet, 500);
  };
}

/* bouquet + text */
function showBouquet() {
  bouquet.style.opacity = "1";
  textBox.style.opacity = "1";

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
    }, i * 700);
  });

  setTimeout(() => {
    continueBtn.style.opacity = "1";
  }, 2300);
}

/* NO */
function goNo() {
  window.location.href = "no.html";
}

/* CONTINUE → JHUMKA */
continueBtn.addEventListener("click", () => {
  window.location.href = "jhumka.html";
});
