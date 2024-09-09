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

// Loading event progress bar
let count = 0;
let thisCount = 0;
const totalBoxes = 15; // Total number of boxes
const progressContainer = document.getElementById("progress-container");
const percentage = document.getElementById("percentage");

// Configs [Musics | Admins | Socials]

const songs = [
  {
    src: "assets/music/1.mp3",
    title: "#1",
    artist: "BlackCAT",
    image: "assets/images/music_1.jpeg",
  },
  {
    src: "assets/music/2.mp3",
    title: "#2",
    artist: "BlackCAT",
    image: "assets/images/music_2.jpeg",
  },
  {
    src: "assets/music/3.mp3",
    title: "#3",
    artist: "BlackCAT",
    image: "assets/images/music_3.jpeg",
  },
];

const admins = [
  {
    name: "BlackCAT",
    role: "Developer",
    image: "https://i.pravatar.cc/301",
    contact: {
      discord: "cwblackcat",
      email: "some@gta.com",
    },
  },
  {
    name: "Costa",
    role: "Administator",
    image: "https://i.pravatar.cc/303",
    contact: {
      discord: "costa",
      email: "some@gta.com",
    },
  },
  {
    name: "Razi",
    role: "Moderator",
    image: "https://i.pravatar.cc/305",
    contact: {
      discord: "razi",
      email: "some@gta.com",
    },
  },
];

const socials = {
  discord: {
    url: "https://discord.gg/yourdiscord",
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        class="h-6 w-6"
      >
        <path
          d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
        />
      </svg>
    `,
  },
  twitter: {
    url: "https://twitter.com/yourtwitter",
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
      </svg>
    `,
  },
  facebook: {
    url: "https://facebook.com/yourfacebook",
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="h-6 w-6"
      >
        <path
          d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
        />
      </svg>
    `,
  },
  // instagram: {
  //   url: "https://instagram.com/yourinstagram",
  //   svg: ``,
  // },
  // youtube: {
  //   url: "https://youtube.com/youryoutube",
  //   svg: ``,
  // },
};

// ================== Admins ==================

const adminsContainer = document.getElementById("admin-container");

admins.forEach((admin) => {
  const adminCard = `
    <div class="btn btn--secondary shadow-2xl drop-shadow-md" style="height: 150px; width: 300px">
      <span class="btn__content px-5">
        <img src="${admin.image}" alt="${
    admin.name
  } Avatar" class="w-16 h-16 rounded-full" />
        <div class="ml-4">
          <h2 class="text-lg font-semibold">${admin.name}</h2>
          <p class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="h-4 w-4"
              fill="#FFFFFF"
            >
              <path
                d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
              />
            </svg>
            ${admin.contact.discord}
          </p>
          <p class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-3.5 w-3.5"
              fill="#FFFFFF"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            ${admin.contact.email}
          </p>
        </div>
      </span>
      <span class="btn__glitch"></span>
      <span class="btn__label">${admin.role.toUpperCase()}</span>
    </div>
  `;

  adminsContainer.innerHTML += adminCard;
});

// ================== Socials ==================

const socialsContainer = document.getElementById("social-container");

for (const [key, value] of Object.entries(socials)) {
  const socialCard = `
    <a href="${value.url}" target="_blank">
      <button class="btn">
        <span class="btn__content">
          ${value.svg} &nbsp;&nbsp;${key}
        </span>
        <span class="btn__glitch"></span>
        <span class="btn__label">${key.toUpperCase()}<</span>
      </button>
    </a>
  `;

  socialsContainer.insertAdjacentHTML("beforeend", socialCard);
}

// ================== Music Player ==================

document.addEventListener("DOMContentLoaded", function () {
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

  let currentSongIndex = 0;

  function updatePlayer() {
    const song = songs[currentSongIndex];
    musicPlayer.src = song.src;
    albumArt.src = song.image;
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
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
  }

  musicPlayer.addEventListener("ended", handleSongEnd);

  playPauseButton.addEventListener("click", () => {
    if (musicPlayer.paused) {
      attemptPlay();
    } else {
      musicPlayer.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    }
  });

  function updateVolume() {
    const volume = volumeControl.value;
    musicPlayer.volume = volume / 100;
    const volumePercentage = (volume / volumeControl.max) * 100;
    volumeControl.style.background = `linear-gradient(to right, var(--blue-color) ${volumePercentage}%, var(--black-color) ${volumePercentage}%)`;
  }

  const initialVolume = 50;
  volumeControl.value = initialVolume;
  musicPlayer.volume = initialVolume / 100;
  updateVolume();

  volumeControl.addEventListener("input", updateVolume);

  prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
  });

  nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
  });

  updatePlayer();
});

// ================== Progress Bar ==================

for (let i = 0; i < totalBoxes; i++) {
  const box = document.createElement("div");
  box.classList.add(
    "w-4",
    "h-6",
    "sm:w-4",
    "sm:h-6",
    "md:w-6",
    "md:h-8",
    "lg:w-7",
    "lg:h-12",
    "empty-box",
    "border",
    "border-green-400",
    "rounded-sm"
  );
  progressContainer.appendChild(box);
}

let inactivityTimer;
const inactivityDelay = 2000;
const boxes = document.querySelectorAll("#progress-container div");

const handlers = {
  startInitFunctionOrder(data) {
    count = data.count; // Set the total number of items to load
  },

  initFunctionInvoking(data) {
    // Calculate the progress and update the boxes
    const progressPercent = (data.idx / count) * 100;
    this.updateProgress(progressPercent);
    resetInactivityTimer();
  },

  startDataFileEntries(data) {
    count = data.count; // Update count if necessary
    resetInactivityTimer();
  },

  performMapLoadFunction(data) {
    ++thisCount; // Increment the current loaded item count
    const progressPercent = (thisCount / count) * 100;
    this.updateProgress(progressPercent);
    resetInactivityTimer();
  },

  updateProgress(progressPercent) {
    // Ensure that progress-container has the required number of boxes
    const progressContainer = document.getElementById("progress-container");
    while (progressContainer.children.length < totalBoxes) {
      const box = document.createElement("div");
      box.className = "box empty-box"; // Initially empty
      progressContainer.appendChild(box);
    }

    // Calculate how many boxes should be filled
    const filledBoxes = Math.floor((progressPercent / 100) * totalBoxes);

    // Update box styles based on progress
    boxes.forEach((box, index) => {
      if (index < filledBoxes) {
        box.classList.add("filled-box");
        box.classList.remove("empty-box");
      } else {
        box.classList.add("empty-box");
        box.classList.remove("filled-box");
      }
    });

    // Update percentage text
    percentage.innerText = `${Math.floor(progressPercent)}%`;

    // Toggle visibility of the percentage element
    percentage.classList.remove("hidden");

    // Stop blinking if progress is complete
    if (progressPercent >= 100) {
      boxes.forEach((box) => box.classList.remove("blink"));
    }
  },
};

window.addEventListener("message", function (e) {
  (handlers[e.data.eventName] || function () {})(e.data);
  resetInactivityTimer();
});

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    blinkBox();
  }, inactivityDelay);
}

function blinkBox() {
  boxes.forEach((box) => box.classList.remove("blink"));

  const boxToBlink = boxes[0];
  boxToBlink.classList.add("blink");
}

resetInactivityTimer();
