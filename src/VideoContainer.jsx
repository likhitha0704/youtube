import React from 'react'
import VideoItems from './VideoItems'
import Player from './Player'


const VideoContainer = ({state,vid,play}) => {


  return (
    <div >
  <aside  class='articleClass'>
                             <article >
                                 <Player vid={vid}></Player>
                             </article>

                             {/* ----------------------------------------------------------- */}
                          <article class='article2'>
                                 {
                                    state.map((data)=>{
                        return<VideoItems play={play}  key={data.id}  data={data} id='video2'></VideoItems>
                                    })
                                 }
                             

                          </article>


  </aside>

    </div>
  )
}

export default VideoContainer