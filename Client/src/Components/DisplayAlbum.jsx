import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import {  assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

function DisplayAlbum({album}) {
  const { playWithID, albumData ,songData } = useContext(PlayerContext);
  // console.log("Album Data", albumData);
  const { id } = useParams();
  // console.log("The id of this song is:", id);
 const[albumsData, setAlbumsData] = useState('');
  console.log('Album Data:', albumData);

  useEffect(()=>{
    albumData.map((item)=>{
      if(item._id === id) {
        setAlbumsData(item);
      }
    })
  },[])
  return albumsData ?  (
    <>
      <Nav />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded "
          src={albumData.image}
          alt="Album Image"
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4 className="text-sm ">{albumData.desc}</h4>
          <p className="mt-1 ">
            <img
              className="inline-block w-5 space-x-2 mr-2"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <b> Spotify </b> • 1,345,565 likes •  <b>  50 Songs, </b>
            about 3 hr 45 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] ">
        <p>
            <b className="mr-4 ">
            # 
            </b>
            Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />
      {
        songData?.filter((item)=>(item.album === album.name)).map((song, index)=>(

            <div onClick={()=> playWithID(song._id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                <p className="text-white">
                    <b className="mr-4 text-[#a7a7a7]">
                        {index + 1 }
                    </b>
                    <img className="inline w-10 mr-5" src={song.image} alt="Song Image" />
                    {song.name}
                </p>
                <p className="text-[15px]">
                    {albumData.name}
                </p>
                <p className="text-[15px] hidden sm:block">
                    5 days ago
                </p>
                <p className="text-[15px] text-center">
                    {song.duration}
                </p>
            </div>
        ))
      }
    </>
  ) : null;
}

export default DisplayAlbum;
