import React from 'react'

const Player = ({vid}) => {
  return (
    <div>

<video height={600} width={900}  controls src={vid} muted autoPlay></video>

    </div>
  )
}

export default Player