import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Instagram from './Instagram/Instagram.jsx'
import InstaLogin from './Instagram/InstaLogin.jsx'
import WelComeInstagram from './Instagram/WelComeInstagram.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Instagram/>}/>
          <Route path='/login' element={<InstaLogin/>}/>
          <Route path='/insta-welcome' element={<WelComeInstagram/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
