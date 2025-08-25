// Reserved for optional enhancements (e.g., animations).
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggle.textContent = "🔊";
    } else {
      audio.pause();
      toggle.textContent = "🔈";
    }
  });
});
