import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [songData, setSongData] = useState([]);
  const [track, setTrack] = useState(songData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [albumData, setAlbumData] = useState([]);
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
  const url = "http://localhost:4000";

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playWithID = async (id) => {
   await songData.map((item)=>{
    if(id === item._id){
      setTrack(item);
    }
   })
   await audioRef.current.play();
   setIsPlaying(true);
  };

  const playPrevious = async () => {
   songData.map(async (item, index)=>{
    if (track._id === item._id && index > 0) {
      await setTrack(songData[index - 1]);
      await audioRef.current.play();
      setIsPlaying(true);
    }
   })
  };

  const playNext = async () => {
    songData.map(async (item, index)=>{
      if (track._id === item._id && index < songData.length) {
        await setTrack(songData[index + 1]);
        await audioRef.current.play();
        setIsPlaying(true);
      }
     })
  };

  const seekSong = async (e) => {
    console.log("The event is: ", e);
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const getSongData = async () => {
    try {
      const response = await axios.get(`${url}/api/songs/lists`);

      if (response) {
        setSongData(response.data.songs);
        setTrack(response.data.songs[0]);
      }
    } catch (error) {}
  };

  const getAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/albums/lists`);
      if (response) {
        setAlbumData(response.data.albums);
      }
    } catch (error) {}
  };

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
    seekSong,
    songData,
    albumData,
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

  useEffect(() => {
    getSongData();
    getAlbumData();
  }, []);
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
