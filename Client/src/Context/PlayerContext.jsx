import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [track, setTrack] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playWithID = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const playPrevious = async () => {
    if (track.id > 0) {
       setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playNext = async () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const seekSong = async (e)=>{
   console.log("The event is: ", e);
   audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) *audioRef.current.duration)
  }

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    time,
    setTime,
    setTrack,
    isPlaying,
    setIsPlaying,
    play,
    pause,
    playWithID,
    playNext,
    playPrevious,
    seekSong
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
