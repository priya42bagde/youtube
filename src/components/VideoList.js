import React from 'react'
import VideoItem from "./VideoItem" 

const VideoList =({videos, onSelectVideo}) =>{
 // const renderList = videos.map((video) => { return (<VideoItem video={video} onSelectVideo={onSelectVideo}/>) } )
  //console.log(renderList)  
  return (
        <div style={{margin: "20px"}}>
            { videos 
              ? videos.map((video) => { return (<VideoItem video={video} onSelectVideo={onSelectVideo}/>) } )
              : "Load..."
            }
        </div>
    )
}

export default VideoList
