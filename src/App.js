
import { Fragment, useState } from 'react';
import About from './components/HEADER/About';
import { Routes,Route } from 'react-router-dom';
import Home from './components/HEADER/Home';
import Store from './components/STORE/Store';
import Header from './components/HEADER/Header';
const App = (props)=>{

  return(
    <Fragment>
      <Header></Header>
      <Routes>
        <Route exect path='About' element={<About></About>}/>
        <Route exact path='Home' element={<Home/>}/>
        <Route exact path='Store' element={<Store/>}/>
        </Routes>
    </Fragment>
  )
}
export default App ;