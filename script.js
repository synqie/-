const preview = document.querySelector(".interactive-preview");
const themeButtons = document.querySelectorAll(".theme-button");
const introScreen = document.querySelector(".intro-screen");
const startAudio = document.querySelector("#start-audio");

const themeColors = {
  acid: "#9dff41",
  ember: "#ff5c5c",
  ice: "#5ce1ff",
};

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    preview.dataset.theme = theme;
    preview.style.setProperty("--accent", themeColors[theme]);

    themeButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

preview.style.setProperty("--accent", themeColors.acid);

introScreen.addEventListener(
  "click",
  async () => {
    introScreen.classList.add("is-fading");
    document.body.classList.remove("is-prestart");

    try {
      startAudio.currentTime = 0;
      await startAudio.play();
    } catch (error) {
      console.info("Start audio could not play. Add start-audio.mp3 next to index.html or update the audio src.");
    }

    window.setTimeout(() => {
      introScreen.remove();
    }, 950);
  },
  { once: true },
);
