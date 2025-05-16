import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'

import Body from './pages/Body'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Feed from './pages/Feed'


const App = () => {

  const user = useSelector((state) => state.user);
  return (

    <BrowserRouter basename='/'>

      <Routes>
        <Route path='/' element={<Body />} >

         <Route path="/" element={user ? <Feed /> :<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
          {/* <Route path="/terms-of-service" element={<TermsOfService />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />

          
          <Route path="*" element={user ?<Feed /> :<Home />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App