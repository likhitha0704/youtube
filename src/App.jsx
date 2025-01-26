// import React, { useState } from 'react'

// const App = () => {
//   let [state, setState]=useState("dingaaaa")

//   let handleevent=()=>{
// setState("dingiiii")

//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleevent}>click</button>
//     </div>
//   )
// }

// export default App
 


// import React, { useState } from 'react'

// const App = () => {


//   let [count,setCount]=useState(0)


//   let handleCount=()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//     <h1>{count}</h1>
//     <button onClick={handleCount}>click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import VIDEO from './video.json'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'
import  './App.css'

const App = () => {
  let [state,setState]=useState(VIDEO)

  let [vid,setVid]=useState(state[0])


  let playVideo=(lio)=>{
    setVid(lio.videoUrl)
  }

  return (
    <div>
      <NavBar></NavBar>
     <VideoContainer state={state} vid={vid} play={playVideo}></VideoContainer>
    
    </div>
  )
}

export default App