import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  return (
    <div className='flex md:overflow-clip max-h-screen'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App