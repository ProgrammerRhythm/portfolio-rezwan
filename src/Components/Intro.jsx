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
            <div className="row BoxProduct">
                
                <div className="col-12	col-sm-12	col-md-6	col-lg-6	col-xl-3 col-xxl-3 imgSbox">
                <img src={icon2} alt="" />
                    <h5 className="Sintro">Customer Centricity</h5>
                    <p className='Spara'>Prioritizes understanding and exceeding customer expectations. </p>
                </div>
                <div className="col-12	col-sm-12	col-md-6	col-lg-6	col-xl-3 col-xxl-3  imgSbox">
                <img src={icon3} alt="" />
                    <h5 className="Sintro">Innovation & Creativity</h5>
                    <p className='Spara'>Encourages exploring new ideas, embracing challenges.</p>
                </div>
                <div className="col-12	col-sm-12	col-md-6	col-lg-6	col-xl-3 col-xxl-3  imgSbox">
                <img src={icon4} alt="" />
                    <h5 className="Sintro">Collaboration</h5>
                    <p className='Spara'>Highlights the value of working well to achieve common objectives.</p>
                </div>
                <div className="col-12	col-sm-12	col-md-6	col-lg-6	col-xl-3 col-xxl-3  imgSbox">
                    <img src={icon1} alt="" />
                    <h5 className="Sintro">Transparency</h5>
                    <p className='Spara'>Focuses on conducting business with honesty and ethical standards.</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;