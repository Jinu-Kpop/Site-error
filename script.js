document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("welcome-screen").classList.remove("active");
  document.getElementById("main-content").classList.add("active");

  const music = document.getElementById("bg-music");
  const songs = [
    "assets/song1.mp3",
    "assets/song2.mp3"
  ];
  let current = 0;

  function playNext() {
    music.src = songs[current];
    music.play().catch(e => console.log(e));
    music.onended = () => {
      current = (current + 1) % songs.length;
      playNext();
    };
  }

  playNext();
});
