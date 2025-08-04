console.log("Welcome to my portfolio site!");

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

function startEmojiRain() {
  const emojis = ["🎉", "💻", "🌟", "😎", "⚡", "🚀"];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-2em";
    emoji.style.fontSize = "24px";
    emoji.style.animation = "fall 2s ease-out forwards";
    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }
}



