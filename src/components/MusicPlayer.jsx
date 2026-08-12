import { useEffect, useRef } from "react";
import song from "../assets/music/song2.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startMusic = async () => {
      if (hasStarted.current || !audioRef.current) return;

      try {
        await audioRef.current.play();
        hasStarted.current = true;

        // Remove listeners only AFTER music successfully starts
        document.removeEventListener("pointerdown", startMusic);
        document.removeEventListener("touchstart", startMusic);
        document.removeEventListener("click", startMusic);
      } catch (error) {
        // Keep listeners active so the next interaction can try again
        console.log("Waiting for a valid user interaction to play music");
      }
    };

    // Capture phase helps catch the first interaction anywhere on the page
    document.addEventListener("pointerdown", startMusic, true);
    document.addEventListener("touchstart", startMusic, true);
    document.addEventListener("click", startMusic, true);

    return () => {
      document.removeEventListener("pointerdown", startMusic, true);
      document.removeEventListener("touchstart", startMusic, true);
      document.removeEventListener("click", startMusic, true);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={song}
      preload="auto"
      playsInline
    />
  );
};

export default MusicPlayer;