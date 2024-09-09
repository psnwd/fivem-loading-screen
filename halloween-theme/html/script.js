/*
 ███████████  ████                    █████       █████████   █████████  ███████████
░░███░░░░░███░░███                   ░░███       ███░░░░░███ ███░░░░░███░█░░░███░░░█
 ░███    ░███ ░███   ██████    ██████ ░███ ████████     ░░░ ░███    ░███░   ░███  ░
 ░██████████  ░███  ░░░░░███  ███░░███░███░░███░███         ░███████████    ░███
 ░███░░░░░███ ░███   ███████ ░███ ░░░ ░██████░ ░███         ░███░░░░░███    ░███
 ░███    ░███ ░███  ███░░███ ░███  ███░███░░███░░███     ███░███    ░███    ░███
 ███████████  █████░░████████░░██████ ████ █████░░█████████ █████   █████   █████
░░░░░░░░░░░  ░░░░░  ░░░░░░░░  ░░░░░░ ░░░░ ░░░░░  ░░░░░░░░░ ░░░░░   ░░░░░   ░░░░░

Author: BlackCAT
Description: This is a simple fivem loading screen with music player.
Version: 1.0.0
GitHub: https://github.com/psnwd/fivem-loading-screen
Website: https://github.com/psnwd
*/

const config = {
  active: {
    user: true,
    music: true,
    background_type: "image",
  },
  background: {
    image: [
      "https://staticg.sportskeeda.com/editor/2023/10/72c9f-16961767736315-1920.jpg",
      "https://cdn.mos.cms.futurecdn.net/7ACjcJTr9cu38JbSXk8rpJ-970-80.jpg.webp",
      "https://www.dexerto.com/cdn-cgi/image/width=1080,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/10/28/gta-online-halloween-2022-header.jpg",
      "https://rockstarintel.com/wp-content/uploads/2022/10/443.jpg",
    ],
    video: [
      "https://www.youtube.com/watch?v=V1bFr2SWP1I",
      "https://www.youtube.com/watch?v=V1bFr2SWP1I",
      "https://www.youtube.com/watch?v=V1bFr2SWP1I",
      "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    ],
  },
  users: [
    {
      name: "BlackCAT",
      email: "",
      role: "admin",
      discord: "@blackcat",
      image: "https://i.pravatar.cc/301",
    },
    {
      name: "COSTA",
      email: "",
      role: "admin",
      discord: "@costa",
      image: "https://i.pravatar.cc/302",
    },
    {
      name: "Razi",
      email: "",
      role: "admin",
      discord: "@razi",
      image: "https://i.pravatar.cc/303",
    },
  ],
  music: [
    {
      active: true,
      title: "Halloween Theme 1",
      artist: "BlackCAT",
      image: "assets/images/music_1.jpeg",
      src: "https://cdn1.suno.ai/eb686e29-c275-41bf-a7f5-d64eebe95675.mp3",
      url: "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    },
    {
      active: true,
      title: "Halloween Theme 2",
      artist: "BlackCAT",
      image: "assets/images/music_2.jpeg",
      src: "https://cdn1.suno.ai/f9120391-258c-4396-9dcc-b936c3bcaee1.mp3",
      url: "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    },
    {
      active: true,
      title: "Halloween Theme 3",
      artist: "BlackCAT",
      image: "assets/images/music_3.jpeg",
      src: "https://cdn1.suno.ai/3a17c282-e155-4f6b-a0d1-da2be40c1179.mp3",
      url: "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    },
    {
      active: true,
      title: "Halloween Theme 4",
      artist: "BlackCAT",
      image: "assets/images/music_3.jpeg",
      src: "https://cdn1.suno.ai/f5143cb7-07d9-490e-88ca-53c9385fe3f2.mp3",
      url: "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    },
    {
      active: true,
      title: "Halloween Theme 4",
      artist: "BlackCAT",
      image: "assets/images/music_3.jpeg",
      src: "https://cdn1.suno.ai/0be6d54a-b5be-465d-872c-cc9c54de2326.mp3",
      url: "https://www.youtube.com/watch?v=V1bFr2SWP1I",
    },
  ],
};

// HTML Elements Main
const admin = document.getElementById("admin-container");
const social = document.getElementById("social-container");

// Music Player HTML Elements
const musicPlayer = document.getElementById("musicPlayer");
const playPauseButton = document.getElementById("playPause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const volumeControl = document.getElementById("volumeSlider");

const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

const albumArt = document.getElementById("albumArt");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

// Music Player Variables
let currentSongIndex = 0;
const initialVolume = 50;

// Load Admin to HTML
function loadAdmin() {
  try {
    config.users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card", "relative");
      card.innerHTML = `
              <div class="h-full">
                  <img src=${
                    user.image
                  } alt="Server Logo" class="rounded-t-2xl" />
                  <div class="text-center font-semibold text-2xl mt-2">${
                    user.name
                  }</div>
                  <div class="flex flex-row flex-wrap font-mono justify-center gap-2 px-4 mt-3">
                      ${
                        user.discord
                          ? `
                          <div class="text-sm flex items-center">
                              <i class="fa-brands fa-discord pr-1"></i>${user.discord}
                          </div>
                      `
                          : ""
                      }
                      ${
                        user.email
                          ? `
                          <div class="text-sm flex items-center">
                              <i class="fa-solid fa-envelope pr-1.5 pl-0.5"></i>${user.email}
                          </div>
                        `
                          : ""
                      }
                  </div>
              </div>
          `;
      admin.appendChild(card);
    });

    // Show Admin
    // admin.classList.remove("hidden");

    // Hide Loader (Not Implemented)
    // document.getElementById("loader").classList.add("hidden");
  } catch (error) {}
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function musicLoad() {
  function updatePlayer() {
    const randomIndex = getRandomNumber(0, config.music.length - 1);
    const song = config.music[randomIndex];
    musicPlayer.src = song.src;
    albumArt.src = song.image;
    console.log(songTitle);
    songTitle.innerHTML = `${song.title}<br><span class="text-sm font-normal">${song.artist}</span>`;
    attemptPlay();
  }

  function attemptPlay() {
    musicPlayer
      .play()
      .then(() => {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
      })
      .catch(() => {
        setTimeout(attemptPlay, 2000);
      });
  }

  function handleSongEnd() {
    let randomIndex;

    do {
      randomIndex = getRandomNumber(0, config.background.music.length - 1);
    } while (currentSongIndex === randomIndex);

    currentSongIndex = randomIndex;
    updatePlayer();
  }

  function updateVolume() {
    const volume = volumeControl.value;
    musicPlayer.volume = volume / 100;
    const volumePercentage = (volume / volumeControl.max) * 100;
    volumeControl.style.background = `linear-gradient(to right, var(--blue-color) ${volumePercentage}%, var(--black-color) ${volumePercentage}%)`;
  }

  // Event Listeners

  musicPlayer.addEventListener("ended", handleSongEnd);
  volumeControl.addEventListener("input", updateVolume);

  playPauseButton.addEventListener("click", () => {
    if (musicPlayer.paused) {
      attemptPlay();
    } else {
      musicPlayer.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    }
  });

  volumeControl.value = initialVolume;
  musicPlayer.volume = initialVolume / 100;

  updateVolume();

  prevButton.addEventListener("click", () => {
    let newIndex;
    do {
      newIndex = getRandomNumber(0, config.music.length - 1);
    } while (newIndex === currentSongIndex);

    currentSongIndex = newIndex;
    updatePlayer();
  });

  nextButton.addEventListener("click", () => {
    let newIndex;
    do {
      newIndex = getRandomNumber(0, config.music.length - 1);
    } while (newIndex === currentSongIndex);

    currentSongIndex = newIndex;
    updatePlayer();
  });

  updatePlayer();
}

// Call Functions
loadAdmin();
musicLoad();
