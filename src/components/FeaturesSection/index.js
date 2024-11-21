import React from 'react'
import './index.css'

const FeaturesSection = () => {
  return (
    <div className='features-section-container mt-4'>
      <div className='features-sub-container'>
        <p className='features-subheading'>Features</p>
        <h1 className='features-heading'>Analytics that feels like it’s from the future</h1>
        <p className='features-description'>Powerful, self-serve product and growth analytics to help you convert, engage, 
            and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className='container'>
        <div className='row text-center align-items-center justify-content-center'>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152536/message-chat-circle_1_cvy3ht.png" alt="message-chat-circle"/>
            <h1 className='each-feature-heading'>Share team inboxes</h1>
            <p className='each-feature-desc'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152180/zap_wb4jqj.png" alt="deliver"/>
            <h1 className='each-feature-heading'>Deliver instant answers</h1>
            <p className='each-feature-desc'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152179/chart-breakout-square_tczg0i.png" alt="manage-team-reports"/>
            <h1 className='each-feature-heading'>Manage your team with reports</h1>
            <p className='each-feature-desc'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152179/Icon_emdtc8.png" alt="connect-with-customers"/>
            <h1 className='each-feature-heading'>Connect with customers</h1>
            <p className='each-feature-desc'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152180/command_oaqpzf.png" alt="connect-the-tools"/>
            <h1 className='each-feature-heading'>Connect the tools you already use</h1>
            <p className='each-feature-desc'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>
          <div className='col-12 m-1  col-lg-3 d-flex- flex-column justify-content-center align-items-center'>
            <img className='each-feature-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152179/message-heart-circle_ameway.png" alt="make-the-change"/>
            <h1 className='each-feature-heading'>Our people make the difference</h1>
            <p className='each-feature-desc'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>
        </div>
      </div>
      <div className='sisiphus-container'>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732152179/Logomark_btxcic.png" alt="sisyphuslogo"/>
          <p className='sisyphus'>Sisyphus</p>
        </div>
        <p className='sisyphus-desc'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
        <img className='sisyphus-profile' src='https://res.cloudinary.com/dpcmdsun8/image/upload/v1732119470/_Navigation_actions_o4w3ml.png' alt="sisyphuprofile"/>
        <div className='mt-2'>
        <p className='candice-p'>Candice Wu</p>
        <p className='candice-position'>Product Manager, Sisyphus</p>
        </div>
      </div>

    </div>
  )
}

export default FeaturesSection
