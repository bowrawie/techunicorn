import React from "react"
import "./App.css"
import { BiCart, BiPhone, BiHeart, BiUser } from "react-icons/bi";


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Nvg() {
  return (
    <>

    <div className="header">

    <h1 className="hd">Tech Unicorn.</h1>
    <a className="cc" href="#Call-Center"><BiPhone/> 	&nbsp; Call Center</a>

    <a className="cr" href="#Shipping"><BiCart/> 	&nbsp; Shipping &amp; Return</a>
    </div>

    <div className="hdr">

    
    <div>
    <p className="mnu">Menu &nbsp;</p>
    <p className="mnu">About &nbsp;</p>
    <p className="mnu">FAQ &nbsp;</p>
    <p className="mnu">Blog &nbsp;</p>
    </div>
    <BiHeart className="cc"/>
    &nbsp;
    <BiCart className="cc"/>
    &nbsp;
    <BiUser className="cc"/>
    </div>

   


    
    </>
    
  );
}
