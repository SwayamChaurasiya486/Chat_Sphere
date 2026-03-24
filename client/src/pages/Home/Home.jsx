import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'


const Home = () => {
  return (
    <div className='flex sm:h-112.5 md:h-137.5 p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Home
