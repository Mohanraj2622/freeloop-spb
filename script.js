document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}
  fetch("https://script.google.com/macros/s/AKfycbwRTuXI4PMjGI9lIqwK4Pih00i0kHsLw2pudIFLs13ESrXbfFGjIpFWP3qn8qCkiLbI8A/exec")
    .then(response => response.text())
    .then(count => {
      document.getElementById("visit-count").textContent = count;
    })
    .catch(error => console.error("Error fetching visit count:", error));

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Aanenna Pennena",
    artist: "S.P.B",
    url: "Aanenna Pennena.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aasayilae (Duet)",
    artist: "S.P.B",
    url: "Aasayilae (Duet).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aayulin-Andhi-Varai",
    artist: "S.P.B",
    url: "Aayulin-Andhi-Varai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ada Vaa Vaa Raaja",
    artist: "S.P.B",
    url: "Ada Vaa Vaa Raaja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Antha Vanatha Pola Manam",
    artist: "S.P.B",
    url: "Antha Vanatha Pola Manam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Athi Kaalai Kaatre Nillu",
    artist: "S.P.B",
    url: "Athi Kaalai Kaatre Nillu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Atho Antha Nadhioram",
    artist: "S.P.B",
    url: "Atho Antha Nadhioram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhage-Azhage",
    artist: "S.P.B",
    url: "Azhage-Azhage.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chinna Kanmanikkulle",
    artist: "S.P.B",
    url: "Chinna Kanmanikkulle.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enakkoru-Sinegidhi",
    artist: "S.P.B",
    url: "Enakkoru-Sinegidhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enna Paduvathu",
    artist: "S.P.B",
    url: "Enna Paduvathu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennai-Kaanavillaiye",
    artist: "S.P.B",
    url: "Ennai-Kaanavillaiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennavale-Adi-Ennavale",
    artist: "S.P.B",
    url: "Ennavale-Adi-Ennavale-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennavo-Ennavo",
    artist: "S.P.B",
    url: "Ennavo-Ennavo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Erani-Kuradhani",
    artist: "S.P.B",
    url: "Erani-Kuradhani-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hello-Doctor",
    artist: "S.P.B",
    url: "Hello-Doctor.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Indiraiyo-Ival-Sundariyo",
    artist: "S.P.B",
    url: "Indiraiyo-Ival-Sundariyo-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Iniya Gaanam",
    artist: "S.P.B",
    url: "Iniya Gaanam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Inji Idupazhagi",
    artist: "S.P.B",
    url: "Inji Idupazhagi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Inji Idupazhagi",
    artist: "S.P.B",
    url: "Inji Idupazhagi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "June-July-Maathadhil",
    artist: "S.P.B",
    url: "June-July-Maathadhil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaatru-Kuthirayile",
    artist: "S.P.B",
    url: "Kaatru-Kuthirayile-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalikum-Pennin",
    artist: "S.P.B",
    url: "Kadhalikum-Pennin-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalluri-Salai",
    artist: "S.P.B",
    url: "Kalluri-Salai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannu Padapoguthaiyah",
    artist: "S.P.B",
    url: "Kannu Padapoguthaiyah.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalikum-Pennin",
    artist: "S.P.B",
    url: "Kadhalikum-Pennin-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalluri-Salai",
    artist: "S.P.B",
    url: "Kalluri-Salai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannu Padapoguthaiyah",
    artist: "S.P.B",
    url: "Kannu Padapoguthaiyah.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Karpoora Bommai",
    artist: "S.P.B",
    url: "Karpoora Bommai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kollayile-Thennai",
    artist: "S.P.B",
    url: "Kollayile-Thennai-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Koondukkulla",
    artist: "S.P.B",
    url: "Koondukkulla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kuyil Paatu (Duet)",
    artist: "S.P.B",
    url: "Kuyil Paatu (Duet).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mannil Indha",
    artist: "S.P.B",
    url: "Mannil Indha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Marumagale Marumagale",
    artist: "S.P.B",
    url: "Marumagale Marumagale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mississippi-Nadhi-Kulunga",
    artist: "S.P.B",
    url: "Mississippi-Nadhi-Kulunga.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mukkala-Mukkabala",
    artist: "S.P.B",
    url: "Mukkala-Mukkabala-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mustafa-Mustafa",
    artist: "S.P.B",
    url: "Mustafa-Mustafa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Muthumani Maala",
    artist: "S.P.B",
    url: "Muthumani Maala.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee Pathi Naan Pathi",
    artist: "S.P.B",
    url: "Nee Pathi Naan Pathi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nil Nil Padhil Sol Sol",
    artist: "S.P.B",
    url: "Nil Nil Padhil Sol Sol.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Vennila",
    artist: "S.P.B",
    url: "Oh-Vennila.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru Nayagan",
    artist: "S.P.B",
    url: "Oru Nayagan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paadura",
    artist: "S.P.B",
    url: "Paadura.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pettai-Rap",
    artist: "S.P.B",
    url: "Pettai-Rap-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poongaatrile Oru Kaalai",
    artist: "S.P.B",
    url: "Poongaatrile Oru Kaalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Santhaikku Vantha Kili",
    artist: "S.P.B",
    url: "Santhaikku Vantha Kili.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Santhu Pottu",
    artist: "S.P.B",
    url: "Santhu Pottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Senthoora-Poove",
    artist: "S.P.B",
    url: "Senthoora-Poove.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Shenbagame Shenbagame (Male)",
    artist: "S.P.B",
    url: "Shenbagame Shenbagame (Male).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thanniyile Nenanja",
    artist: "S.P.B",
    url: "Thanniyile Nenanja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thendral Thaan",
    artist: "S.P.B",
    url: "Thendral Thaan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thendrale",
    artist: "S.P.B",
    url: "Thendrale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unnai Thottu",
    artist: "S.P.B",
    url: "Unnai Thottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Urvashi-Urvashi",
    artist: "S.P.B",
    url: "Urvashi-Urvashi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaan Nilave",
    artist: "S.P.B",
    url: "Vaan Nilave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaanam Thottu Pona",
    artist: "S.P.B",
    url: "Vaanam Thottu Pona.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaaranam Aayiram",
    artist: "S.P.B",
    url: "Vaaranam Aayiram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaasal Idhu Vaasal",
    artist: "S.P.B",
    url: "Vaasal Idhu Vaasal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaazhkai Embadhu",
    artist: "S.P.B",
    url: "Vaazhkai Embadhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vazhividu Vazhividu",
    artist: "S.P.B",
    url: "Vazhividu Vazhividu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Welcome-Boys-Welcome-Girls",
    artist: "S.P.B",
    url: "Welcome-Boys-Welcome-Girls.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "spb-cover-2.png"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "spb-cover-2.png",
      "spb-cover-3.png",
      "spb-cover-4.png",
      "spb-cover.png"
    
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
