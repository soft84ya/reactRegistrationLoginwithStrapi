import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import Register from './Page/Register';
import Login from './Page/Login';
import Error404 from './Page/Error404';

function App  () {

//1.state/Hook Variable

//2. Functions/Function

//3. Return Statement jsx



  return (
  <Router>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<Error404/>}/>
  </Routes>
  </Router>
  )
}

export default App