import React from 'react'

const VideoDetails=({video})=> {
    if(!video){
        return(
        <div>
            Loading...
        </div>)
    }
    const videoSrc = 'https://www.youtube.com/embed/${video.id.videoId}'
    console.log("vedio", videoSrc)   
    return (
        <>
        <div>
            <iframe src={videoSrc} title="Vedio Player" className="w-100" style={{height: "300px", width: "620px"}}>

            </iframe>
        </div>
        <div className="border p-2" >
          
        </div>
        </>
    )
}

export default VideoDetails

//<h4>{video.snippet.title}</h4>
//<p>{video.snippet.description}</p>

//https://youtu.be/zADj0k0waFY
