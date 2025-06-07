import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'

import Body from './pages/Body'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Error from './pages/Error'
import Connections from './pages/Connections'
import Requests from './pages/Requests'


const App = () => {

  const user = useSelector((state) => state.user);
  return (

    <BrowserRouter basename='/'>

      <Routes>
        <Route path='/' element={<Body />} >

         <Route path="/" element={user ? <Feed /> :<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/logout' element={<Navigate to="/login" replace />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/connections' element={<Connections />} />
          <Route path='/requests' element={<Requests />} />

          <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" replace />} />
          <Route path="/error" element={<Error />} />

          
          <Route path="*" element={user ?<Feed /> :<Home />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App