import React from 'react'
import ConnectionBar from './components/ConnectionBar'
import Navbar from './components/Navbar'
import VideoContent from './components/VideoContent'

const App = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <VideoContent />
      <ConnectionBar />
      <Navbar/>
    </div>
  )
}

export default App
