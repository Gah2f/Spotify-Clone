import React from 'react'
import Nav from './Nav'
import { albumsData, songsData } from '../assets/frontend-assets/assets'
import AlbemItems from './AlbemItems'
import SongItems from './SongItems'

function DisPlayHome() {
  return (
    <> 
    <Nav/>
    <div className='mb-4'>
        <h1 className='text-2xl my-5 font-bold'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item, index)=>(
           <AlbemItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
        ))}
        </div>
        
    </div>
    <div className='mb-4'>
        <h1 className='text-2xl my-5 font-bold'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((song,index)=>(
            <SongItems key={index} name={song.name} desc={song.desc} id={song.id} image={song.image} />
        ))}
        </div>
        
    </div>
    </>
  )
}

export default DisPlayHome