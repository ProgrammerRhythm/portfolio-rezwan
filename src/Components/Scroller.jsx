import React, { useEffect, useRef } from 'react';
import './style.css'
import logo1 from './../assets/1.png'
import logo2 from './../assets/2.png'
import logo3 from './../assets/3.png'
import logo4 from './../assets/4.png'
const Scroller = () => {
    return (
       <div className="scroller">
         <div className='container'>
            <div className="row">
                <div className="col-2 ">
                    <h5 className="Trusttext">Trusted by</h5>
                </div>
                <div className="col-10">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
       </div>
    );
};



function Carousel() {
    const carouselRef = useRef(null);
    const scrollAmount = 1; // Adjust scroll speed as needed
  
    useEffect(() => {
      const carousel = carouselRef.current;
      let animationFrameId;
  
      const loop = () => {
        if (carousel) {
          carousel.scrollLeft += scrollAmount;
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0; // Reset scroll without noticeable jump
          }
        }
        animationFrameId = requestAnimationFrame(loop);
      };
  
      animationFrameId = requestAnimationFrame(loop);
      
      return () => cancelAnimationFrame(animationFrameId);
    }, []);
  
    const images = [
        logo1, logo2, logo3, logo4,
        logo1, logo2, logo3, logo4,
        logo1, logo2, logo3, logo4,
        logo1, logo2, logo3, logo4,
    ];
  
    // Duplicate images for seamless loop
    const items = [...images, ...images];
  
    return (
      <div className="carousel-container" ref={carouselRef}>
        {items.map((src, index) => (
          <div className="image-item" key={index}>
            <img src={src} alt={`Carousel item ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
    );
  }


export default Scroller;