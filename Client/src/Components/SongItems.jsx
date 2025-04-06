import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

function SongItems({id, name, desc, image, duration, file}) {
  const { playWithID } = useContext(PlayerContext)
  return (
    <div onClick={()=> playWithID(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="Song's Image" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongItems