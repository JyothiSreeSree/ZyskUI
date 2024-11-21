import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import './index.css'

const BannerSection = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center banner-section-container'>
        <div className='check-out-dashboard-container d-flex flex-row justify-content-center pl-5 pr-5 pt-2 pb-0'>
            <p className='new-feature-para'>New Features</p>
            <p className='bg-transparent check-out'>Check out the team dashboard <FaArrowRight/></p>
        </div>
        <h1 className='banner-heading'>Beautiful analytics to grow smarter</h1>
        <p className='banner-desc text-center'>Powerful, self-serve product and growth analytics to help you convert, 
            engage, and retain more users. Trusted by over 4,000 startups.</p>  
        <div className=' banner-button-container'>
            <button className='signup-button'>Sign up</button>
            <button className='demo-button'><CgPlayButtonO/> Demo</button>
        </div>
        <img src='https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126160/Content_sv3mms.png' className='stats-image' alt="statsimage"/>
        <div className='company-list-conatiner container'>
            <p className='company-list-desc'>Join 4,000+ companies already growing</p>
            <div className='row'>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_1_xennac.png" alt="boltshift"/>
                    <p className='company-list-para'>Boltshift</p>
                </div>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_2_k4gyl9.png" alt="lightbox"/>
                    <p className='company-list-para'>Lightbox</p>
                </div>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_3_mggjce.png" alt="featherdev"/>
                    <p className='company-list-para'>FeatherDev</p>
                </div>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_4_hdii4c.png" alt="spherule"/>
                    <p className='company-list-para'>Spherule</p>
                </div>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src='https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_5_m0j3rf.png' alt="globalbank"/>
                    <p className='company-list-para'>GlobalBank</p>
                </div>
                <div className='col-6 col-lg-2 d-flex flex-row'>
                    <img className='company-list-img' src='https://res.cloudinary.com/dpcmdsun8/image/upload/v1732126559/Logomark_6_aixdts.png' alt="neitsche"/>
                    <p className='company-list-para'>Neitsche</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BannerSection
