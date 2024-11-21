import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './index.css'

const AnalyticsFeatureSection = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div>
        <p className='analytics-features-subheading'>Features</p>
        <h1 className='analytics-features-heading'>Cutting-edge features for advanced analytics</h1>
        <p className='analytics-features-desc'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className='analytics-image-container mb-5'>
        <img className='d-block d-lg-none mt-4 ' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732156872/Content_rcqsi3.png" alt="mobilecontent"/>
        <img className='d-none d-lg-block mt-4 analytics-desktop-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732157026/Screen_mockup_REPLACE_FILL_r0qfxf.png" alt="desktopimage"/>
        <img className='d-none d-lg-block analytics-desktop-phone-img' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732157026/iPhone_12_Pro_mockup_pjlgwe.png" alt="desktopmobileimage"/> 
      </div>
      <div className='container mt-5'>
        <div className='row text-center align-items-center justify-content-center'>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152536/message-chat-circle_1_cvy3ht.png" alt="message-chat-circle"/>
            <h1 className='each-feature-heading'>Share team inboxes</h1>
            <p className='each-feature-desc'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <p className='bg-transparent check-out-button'>Learn More <FaArrowRight/></p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152180/zap_wb4jqj.png" alt="deliver"/>
            <h1 className='each-feature-heading'>Deliver instant answers</h1>
            <p className='each-feature-desc'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <p className='bg-transparent check-out-button'>Learn More <FaArrowRight/></p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152179/chart-breakout-square_tczg0i.png" alt="manage-team-reports"/>
            <h1 className='each-feature-heading'>Manage your team with reports</h1>
            <p className='each-feature-desc'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <p className='bg-transparent check-out-button'>Learn More <FaArrowRight/></p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AnalyticsFeatureSection
