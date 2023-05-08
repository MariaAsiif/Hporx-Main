import React from 'react'
import { Button } from 'react-bootstrap'

import { VideoModalMain } from './StyledHeader'

const VideoModal = ({setModalShow , children}) => {
  return (
    <VideoModalMain>
         <Button
        onClick={() => setModalShow(false)}
        className="btn-close"
      ></Button>
      {children}
    </VideoModalMain>
  
  )
}

export default VideoModal