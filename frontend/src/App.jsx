import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Singup from './Singup'
import{BroswerRouter,Routes,Route}from'react-router-dom'
import Login from './Login'


function App() {return(
  <BroswerRouter>
  <Routes>
    <Route path='/register' element={<Singup />}> </Route>
    <Route path='/login' element={<Login />}> </Route>
    <Route path='/home' element={< Home />}></Route>
  </Routes>
  </BroswerRouter>
)}
 
  export default App
   