import React, { useContext } from "react";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

function Player() {
  const {
    seekBg,
    seekBar,
    isPlaying,
    play,
    pause,
    track,
    time,
    playNext,
    playPrevious,
    seekSong
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="Song's Image" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Suffle Icon"
          />
          <img
            onClick={playPrevious}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Prev Icon"
          />
          {isPlaying ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="pause Icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="play Icon"
            />
          )}
          <img
            onClick={playNext}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="next Icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="loop Icon"
          />
        </div>
        <div className="flex items-center gap-5 ">
          <p className="text-md">
            {time.currentTime.minute} : {time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute} : {time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 ">
        <img className="w-4" src={assets.plays_icon} alt="Plays Icon" />
        <img className="w-4" src={assets.mic_icon} alt="Mic Icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker Icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume Icon" />
        <div className="w-20 bg-slate-50 h-1 rounded"> </div>
        <img className="w-4" src={assets.mini_player_icon} alt="Mini Icon" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
}

export default Player;
