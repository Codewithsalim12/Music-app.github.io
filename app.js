const mysong = document.getElementById("mysong");
const icon = document.getElementById("icon");
const nextButton = document.getElementById("next-button");
const playingGif = document.getElementById("playing-Gif");

let songSources = [
  "assets/song-1.mp3",
  "assets/song-2.mp3",
  "assets/song-3.mp3",
  "assets/song-4.mp3",
  "assets/song-5.mp3",
  "assets/song-6.mp3",

  // Add more song sources here
];

let currentSongIndex = 0;

icon.addEventListener("click", () => {
  if (mysong.paused) {
    mysong.play();
    icon.src = "/assets/pause.png";
    playingGif.style.display = "block";
  } else {
    mysong.pause();
    icon.src = "/assets/play.png";
    playingGif.style.display = "none";
  }
});

nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songSources.length;
  mysong.src = songSources[currentSongIndex];
  mysong.play();
  icon.src = "/assets/pause.png";
});

mysong.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songSources.length;
  mysong.src = songSources[currentSongIndex];
  mysong.play();
  icon.src = "/assets/pause.png";
});
mysong.addEventListener("timeupdate", () => {
  const progressBar = document.getElementById("progress");

  progressBar.value = (mysong.currentTime / mysong.duration) * 100;
});

// Add event listener to update volume control

const volumeControl = document.getElementById("volume");

volumeControl.addEventListener("input", () => {
  mysong.volume = volumeControl.value / 100;
});
