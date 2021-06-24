import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { ProfileContent } from './components/Profile/ProfileContent'

import { Container } from './layout/Container'
import Content from './layout/Content'
import { DialogPost } from './layout/DialogPost'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Widgets from './layout/Widgets'


const App = () => {

  const currentChannel = useSelector((state) => state.channels.currentChannel);
  const currentPost = useSelector((state) => state.post.currentPost);
  return (
    <Container>

      <Sidebar />
      {currentChannel == "Home" ? <Content /> : currentChannel.name == "Home" ? <Content /> : <ProfileContent />}
      <Widgets />
      {!isEmpty(currentPost) ? <DialogPost {...currentPost.postData} /> : null}
    </Container>
  )
}

export default App
