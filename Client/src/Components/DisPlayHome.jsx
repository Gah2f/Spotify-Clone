import React, { useContext } from 'react'
import Nav from './Nav'
// import { albumsData, songsData } from '../assets/frontend-assets/assets'
import AlbemItems from './AlbemItems'
import SongItems from './SongItems'
import { PlayerContext } from '../Context/PlayerContext';

function DisPlayHome() {
  const {songData, albumData} = useContext(PlayerContext);
  return (
    <> 
    <Nav/>
    <div className='mb-4'>
        <h1 className='text-2xl my-5 font-bold'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumData?.map((item, index)=>(
           <AlbemItems key={index} name={item.name} desc={item.desc.slice(0,45) + '...'} id={item._id} image={item.image}/>
        ))}
        </div>
        
    </div>
    <div className='mb-4'>
        <h1 className='text-2xl my-5 font-bold'>Today's biggest hits</h1>
        <div className='flex overflow-auto w-80 h-100'>
        {songData?.map((song,index)=>(
            <SongItems key={index} name={song.name} desc={song.desc.slice(0,15)} id={song.id} image={song.image} />
        ))}
        </div>
        
    </div>
    </>
  )
}

export default DisPlayHome