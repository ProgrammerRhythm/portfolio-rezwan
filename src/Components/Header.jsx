// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './style.css'
const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HomeComponent></HomeComponent>
        </div>
    );
};      



function HomeComponent(){
    const [isOpen, setIsOpen] = useState(false);
  


    return (
        <div className='HomeConmonent'>
            <div className="styleD">
                <span className="highlight">Designing</span>
                <span className="Ptext">Products People Love</span>
                </div>
            <h1 style={{color:'rgba(15, 15, 25, 1)',fontSize:'88px',fontWeight:'500',lineHeight:'105.6px',textAlign:'center'}}>Building Beautiful & <br /> Functional Products</h1>
            <p className='HomeP'> I&lsquo;m a product designer who thrives on crafting intuitive interfaces that <br /> users love and that solve real problems.</p>
            
          <button className="animated-button book-call">
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">See Projects</span>
          </button>
       
        </div>
    )
}


export default Header;