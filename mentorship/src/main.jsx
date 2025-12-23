import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Headerpage from './pages/Header.jsx'
import Registerpage from './pages/Register.jsx'
import Loginpage from './pages/Login.jsx'
import Aboutpage from './pages/About.jsx'
import Program from './pages/Programs.jsx'
import Testimonial from './pages/Testimonal.jsx'
import Contact from './pages/Contact.jsx'
import Menteedashboard from './pages/Manteeedashboard.jsx'
import Manteeprogram from './mantee/Manteeprogram.jsx'
import Resourcepage from './mantee/Resource.jsx'
import Mentorpage from './pages/Mantordashboard.jsx'
import Mentorprogram from './mentor/Mentorprogram.jsx'
import Mentorresource from './mentor/Mentorresource.jsx'
import Addpage from './mentor/Addpage.jsx'
import Addresource from './mentor/Addresource.jsx'
import MenteeQueryPage from './mantee/Manteequrey.jsx'
import Mentorquery from './mentor/Mentorquery.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Headerpage/>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/register" element={<Registerpage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
       <Route path="/about" element={<Aboutpage/>}/>
       <Route path="/program" element={<Program/>}/>
       <Route path="/testimonials" element={<Testimonial/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/mantee" element={<Menteedashboard/>}/>
       <Route path="/programlist" element={<Manteeprogram/>}/>
       <Route path="/resourcepath" element={<Resourcepage/>}/>
       <Route path="/admin"  element={<Mentorpage/>}/>
        <Route path="/manage"  element={<Mentorprogram/>}/>
      <Route path="/resource"  element={<Mentorresource/>}/>
      <Route path="/add"  element={<Addpage/>}/>
      <Route path="/addresource" element={<Addresource/>}/>
      <Route path="/query" element={<MenteeQueryPage/>}/>
      <Route path="/querypage" element={<Mentorquery/>}/>
       
       
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
