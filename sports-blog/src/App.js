import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages';
import Football from './pages/football';
import Basketball from './pages/basketball';
import Tennis from './pages/tennis';
import Cricket from './pages/cricket';
import F1 from './pages/f1';
import Authentication from './Authentication';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Components/Navbar/NavbarElements';

const App = ({ handleLogout }) => {

  return (
    <>
      <div>
        <Router>
          <Nav>
            <NavLink to='/'>
              <h1>sportsBlog</h1>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to='/football' activeStyle>
                Football
              </NavLink>
              <NavLink to='/basketball' activeStyle>
                Basketball
              </NavLink>
              <NavLink to='/cricket' activeStyle>
                Cricket
              </NavLink>
              <NavLink to='/f1' activeStyle>
                F1
              </NavLink>
              <NavLink to='/tennis' activeStyle >
                Tennis
              </NavLink>

              <NavBtn onClick={handleLogout}>Logout</NavBtn>
            </NavMenu>
          </Nav>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/football' element={<Football />} />
            <Route path='/basketball' element={<Basketball />} />
            <Route path='/cricket' element={<Cricket />} />
            <Route path='/f1' element={<F1 />} />
            <Route path='/tennis' element={<Tennis />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App;
