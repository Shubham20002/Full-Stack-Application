import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../src/pages/home';
import Additem from './pages/additem';
import Updateitem from './pages/updateitem';
import Header from './component/header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/additem' element={<Additem/>}/>
      <Route path='/updateitem/:id' element={<Updateitem/>}/>
    </Routes>
    </BrowserRouter>
  )
}
