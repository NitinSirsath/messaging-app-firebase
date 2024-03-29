import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
  )
}

export default Home