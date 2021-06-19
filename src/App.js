import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileContent } from './components/Profile/ProfileContent'

import { Container } from './layout/Container'
import Content from './layout/Content'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Widgets from './layout/Widgets'


const App = () => {

  const currentChannel = useSelector((state) => state.channels.currentChannel);

  return (
    <Container>

      <Sidebar />
      {currentChannel == "Home" ? <Content /> : currentChannel.name == "Home" ? <Content /> : <ProfileContent />}
      <Widgets />
    </Container>
  )
}

export default App
