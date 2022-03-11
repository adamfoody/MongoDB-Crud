import { Form } from './components/Form';
import './App.css';
import { Header } from './components/Header';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Tasks } from './components/Tasks';
import React, {useEffect} from 'react';


function App() {



  

  return (
    <div className="App">
  
    <BrowserRouter> 
    <nav >
        <Link to="/form"> <h3> Form </h3></Link>
        <Link to="/tasks"> <h3> Tasks</h3></Link>
    
      </nav>
      <Header/>
 
    <Routes>
    <Route path='/form' element={<Form/>} />
    <Route path='/tasks' element={<Tasks/>} />



    </Routes>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;
