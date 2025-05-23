import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisPlayHome from "./DisPlayHome";
import DisplayAlbum from "./DisplayAlbum";
import { PlayerContext } from "../Context/PlayerContext";
// import { albumsData } from "../assets/frontend-assets/assets";

function Display() {
  const { albumData } = useContext(PlayerContext);
  const disPlayRef = useRef();
  const location = useLocation();
  // console.log('The location is:', location);
  const isAlbum = location.pathname.includes("album");
  // console.log('object:', isAlbum);
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  // console.log('The album id is:', albumId);
  const bgColor =
    isAlbum && albumData.length > 0
      ? albumData.find((x) => x._id === albumId).bgColor
      : "";
  // console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      disPlayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      disPlayRef.current.style.background = "#121212";
    }
  });
  return (
    <div
      ref={disPlayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {albumData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisPlayHome />} />
          <Route
            path="/album/:id"
            element={
              <DisplayAlbum album={albumData.find((x) => x._id === albumId)} />
            }
          />
        </Routes>
      ) : null}
    </div>
  );
}

export default Display;
