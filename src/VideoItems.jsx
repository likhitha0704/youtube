import React from 'react'

const VideoItems = (props) => {
    // console.log(props);  

    let{thumbnailUrl,title}=props.data
    
  return (
    <div onClick={()=>{return props.play(props.data)}}>
        <div>
            <img height={200} width={300}   src={thumbnailUrl}/>
            <h1>{title}</h1>
        </div>


    </div>
  )
}

export default VideoItems