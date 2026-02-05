// console.log(alert("I kindly request you to please first click on the Music Button the visit then website further."));
document.addEventListener("DOMContentLoaded", () => {

  /* 🎂 Countdown */
  const birthday = new Date("2026-02-07T00:00:00").getTime();
  const timer = document.getElementById("timer");

  setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff <= 0) {
      timer.innerHTML = "🎉 Happy Birthday My Love 🎉";
      return;
    }

    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);

    timer.innerHTML = `${d} days, ${h} hrs, ${m} mins, ${s} secs 💖`;
  }, 1000);

  /* 🎵 Music */
  const music = document.getElementById("bg-music");
  document.addEventListener("click", () => {
    music.play().catch(()=>{});
  }, { once:true });
});

/* 💕 Surprise */
function showLove() {
  document.getElementById("hidden").style.display = "block";
}

/* 🔊 Toggle Music */
function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.paused ? music.play() : music.pause();
}
