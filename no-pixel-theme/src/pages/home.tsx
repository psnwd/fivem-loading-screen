import { useEffect, useRef, useState } from "react";
import CustomButton from "~/components/loading/custom-button";
import MainLogo from "~/components/loading/main-logo";
import ProcessBar from "~/components/loading/process-bar";

function Home() {
  const [audioMuted, setAudioMuted] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioSources = [
    "https://cdn1.suno.ai/5493538c-5c64-4925-9d1e-f8c5f95aab8c.mp3",
    "https://cdn1.suno.ai/a05d35e0-328b-4d66-89c5-422e52873de2.mp3",
    "https://cdn1.suno.ai/2cc62747-617c-4635-85a7-900f9419d35d.mp3",
  ];

  const videoSources = [
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_bird.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_cat.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_rat.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_rabbit.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_deer.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_raccoon.webm",
    "https://assets.nopixel.net/dev/images/loadingscreen/loadingscreen_overlay_cow.webm",
  ];

  // Preload the next video in the background
  const preloadNextVideo = (nextIndex: number) => {
    const video = document.createElement("video");
    video.src = videoSources[nextIndex];
    video.load();
  };

  const handleVideoProgress = () => {
    if (videoRef.current) {
      const remainingTime =
        videoRef.current.duration - videoRef.current.currentTime;

      // Check if the video is in its last 2 seconds
      if (remainingTime <= 2) {
        const nextIndex = (currentVideoIndex + 1) % videoSources.length;
        preloadNextVideo(nextIndex);
        setCurrentVideoIndex(nextIndex);
      }
    }
  };

  useEffect(() => {
    const playRandomAudio = () => {
      const randomIndex = Math.floor(Math.random() * audioSources.length);
      const selectedAudio = audioSources[randomIndex];

      if (audioRef.current) {
        audioRef.current.src = selectedAudio;
        audioRef.current.load();
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(() => {});
      }
    };

    const onUserInteraction = () => {
      playRandomAudio();
      window.removeEventListener("click", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
    };

    window.addEventListener("click", onUserInteraction);
    window.addEventListener("scroll", onUserInteraction);

    return () => {
      window.removeEventListener("click", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
    };
  }, []);

  const muteAudio = () => {
    if (audioRef.current && audioRef.current.muted) {
      audioRef.current.muted = false;
    } else if (audioRef.current) {
      audioRef.current.muted = true;
    }
  };

  const [progress, setProgress] = useState(0);
  const countRef = useRef(0);
  const thisCountRef = useRef(0);

  useEffect(() => {
    const handlers: {
      [key: string]: (data: any) => void;
    } = {
      startInitFunctionOrder(data: { count: number }) {
        countRef.current = data.count;
      },
      initFunctionInvoking(data: { idx: number }) {
        setProgress((data.idx / countRef.current) * 100);
      },
      startDataFileEntries(data: { count: number }) {
        countRef.current = data.count;
      },
      performMapLoadFunction(_data: { name: string }) {
        thisCountRef.current += 1;
        setProgress((thisCountRef.current / countRef.current) * 100);
      },
    };

    const messageHandler = (e: { data: { eventName: string } }) => {
      (handlers[e.data.eventName] || function () {})(e.data);
    };

    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <div
      className="p-5 w-full h-full absolute bg-no-repeat bg-center flex select-none mix-blend-multiply"
      style={{
        backgroundImage: "",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="h-full flex flex-col justify-end items-start gap-[2vh]">
        <div className="flex flex-row justify-start items-center pl-[0.8vh] gap-[0.8vh]">
          <CustomButton
            name="twitter"
            image="/assets/twitter.svg"
            height={100}
            width={40}
          />
          <CustomButton
            name="youtube"
            image="/assets/youtube.svg"
            height={100}
            width={40}
          />
          <CustomButton
            name="store"
            image="/assets/store.png"
            height={100}
            width={70}
          />
          <CustomButton
            name="logo"
            image="/assets/logo.png"
            height={100}
            width={70}
          />
        </div>

        <div className="flex flex-row justify-start items-center">
          <MainLogo loadingProgress={progress} />

          <div className="flex flex-col justify-center items-center gap-[0.6vh] ml-[calc(0.092592592vh*-10)]">
            <div
              className="bg-[url('/assets/buttonTop.svg')] hover:drop-shadow-custom font-semibold bg-cover bg-no-repeat bg-center flex-shrink-0 text-white text-center flex justify-center items-center w-[calc(0.092592592vh*209.5)] h-[calc(0.092592592vh*44)] ml-[calc(0.092592592vh*-115)] cursor-pointer transition-all duration-200 ease-in-out"
              style={{
                backgroundSize: "100% 100%",
              }}
            >
              Hansamali
            </div>

            <ProcessBar box_count={13} progress={progress} />

            <div className="flex flex-row justify-center items-center">
              <div
                className="bg-[url('/assets/buttonBottom.svg')] hover:drop-shadow-custom gap-1 bg-cover bg-no-repeat bg-center flex-shrink-0 text-white text-center flex justify-center items-center w-[calc(0.092592592vh*209.5)] h-[calc(0.092592592vh*44)] ml-[calc(0.092592592vh*-55)] cursor-pointer transition-all duration-200 ease-in-out"
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                v1.0 <span className="font-thin text-xs">(beta)</span>
              </div>

              <div
                className="bg-[url('/assets/playerButton.svg')] ml-[calc(0.092592592vh*-50)] hover:drop-shadow-custom w-[10vh] h-[4vh] gap-1 bg-cover bg-no-repeat bg-center flex-shrink-0 text-white text-center flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
                style={{
                  backgroundSize: "100% 100%",
                }}
                onClick={() => {
                  muteAudio();
                  setAudioMuted(!audioMuted);
                }}
              >
                {!audioMuted ? (
                  <div
                    className="bg-[url('/assets/volume.svg')] w-[5vh] h-[2.5vh] bg-left ml-[1.5vh]"
                    style={{
                      backgroundSize: "100% 100%",
                    }}
                  ></div>
                ) : (
                  <div
                    className="bg-[url('/assets/volume-mute.svg')] w-[5vh] h-[2.5vh] !bg-left ml-[1.5vh]"
                    style={{
                      backgroundSize: "100% 100%",
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <audio ref={audioRef} autoPlay>
          {audioSources.map((src, index) => (
            <source key={index} src={src} type="audio/mp3" />
          ))}
        </audio>

        <video
          ref={videoRef}
          className="top-0 left-0 object-cover absolute -z-10 w-screen h-screen video-fade-in"
          muted
          loop={false}
          onTimeUpdate={handleVideoProgress}
          key={currentVideoIndex}
          autoPlay
        >
          <source src={videoSources[currentVideoIndex]} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Home;
