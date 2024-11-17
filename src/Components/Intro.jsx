/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css'
import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-4.png'
const Intro = () => {
    return (
        <div className='introBox'>
            <div className="row">
                <div className="col-3">
                        <p className="Intor">INTRODUCTION</p>
                </div>
                <div className="col-9">
                    <h3 className="IntorH">In today&lsquo;s digital landscape, your brand and user experience are the cornerstones of success. We offer a comprehensive suite of services, encompassing both Web & App UI/UX design and branding, to help you.</h3>
                </div>
            </div>
            <div className="row">
                
                <div className="col-3 imgSbox">
                <img src={icon2} alt="" />
                    <h5>Customer Centricity</h5>
                    <p>Prioritizes understanding and exceeding customer expectations. </p>
                </div>
                <div className="col-3 imgSbox">
                <img src={icon3} alt="" />
                    <h5>Innovation & Creativity</h5>
                    <p>Encourages exploring new ideas, embracing challenges.</p>
                </div>
                <div className="col-3 imgSbox">
                <img src={icon4} alt="" />
                    <h5>Collaboration</h5>
                    <p>Highlights the value of working well to achieve common objectives.</p>
                </div>
                <div className="col-3 imgSbox">
                    <img src={icon1} alt="" />
                    <h5>Transparency</h5>
                    <p>Focuses on conducting business with honesty and ethical standards.</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;