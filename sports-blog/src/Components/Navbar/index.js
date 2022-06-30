import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = ({handleLogout}) => {
  return (
    <>
    <Nav>
        <NavLink to ='/'>
            <h1>sportsBlog</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to = '/football' activeStyle>  
                Football              
            </NavLink>
            <NavLink to = '/basketball' activeStyle>
                Basketball
            </NavLink>
            <NavLink to = '/cricket' activeStyle>
                Cricket
            </NavLink>
            <NavLink to = '/f1' activeStyle>
                F1
            </NavLink>
            <NavLink to = '/tennis' activeStyle >
                Tennis
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  );
};

export default Navbar;