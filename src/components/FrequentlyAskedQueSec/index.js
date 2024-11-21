import React from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import "./index.css"

const FrequentlyAskedQueSec = () => {
  return (
    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='freq-asked-que-heading'>Frequently asked questions</h1>
        <p className='freq-asked-que-para'>Everything you need to know about the product and billing.</p>
      </div>
      <div className='freq-asked-que-conainer text-left'>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>Is there a free trial available?</p>
                <p className='freq-asked-ques-ans'>Yes, you can try us for free for 30 days. If you want,
                we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
            </div>
            <FiMinusCircle className='minus-icon'/>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>Can I change my plan later?</p>
            </div>
            <FiPlusCircle className='plus-icon'/>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>What is your cancellation policy?</p>
            </div>
            <FiPlusCircle className='plus-icon'/>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>Can other info be added to an invoice?</p>
            </div>
            <FiPlusCircle className='plus-icon'/>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>How does billing work?</p>
            </div>
            <FiPlusCircle className='plus-icon'/>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <p className='freq-asked-que'>How do I change my account email?</p>
            </div>
            <FiPlusCircle className='plus-icon'/>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732160803/Avatar_group_ivggzu.png" alt="groupprofiles"/>
        <h4 className='any-que-heading'>Still have questions?</h4>
        <p className='any-que-desc'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className='get-in-touch-button'>Get in touch</button>
      </div>
    </div>
  )
}

export default FrequentlyAskedQueSec
