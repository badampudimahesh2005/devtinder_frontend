import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import  store  from './store/store'
import Body from './pages/Body'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter basename='/'>

      <Routes>
        <Route path='/' element={<Body />} >
         <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/terms-of-service" element={<TermsOfService />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />

          
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    </Provider>
  )
}

export default App