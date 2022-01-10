import React from 'react';
import {
  BrowserRouter,Switch,Link,
  Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import About from './components/About';
import History from './components/History';
import LogIn from './components/LogIn';
import { Footer } from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul className={'list-item'}>
     <div>
       <History/>
    
     
      {/* <i className="fas fa-redo-alt icon"></i> */}
    
     </div>
        
          <li >
          <Link to="/home" className='item'>Home</Link>
          </li>
          <li>
          <Link to="/about" className='item'>About</Link>
          </li>
          <li>
          <Link to="/login" className='item'>LogIn</Link>
          </li>
 
       
        </ul>
      </nav>
       

     
    <Switch>
       <Route path={"/home"} component={Home}/>
       <Route path={"/about"} component={About}/>
        <Route path={"/login"} component={LogIn}/>
    
     </Switch>
    </BrowserRouter>
   <Footer/>
    </div>
  );
}

export default App;
