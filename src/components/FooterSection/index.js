import React from 'react'
import './index.css'

const FooterSection = () => {
  return (
    <div className='container'>
        <div className='row'>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Product</li>
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
            </ul>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Company</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
            </ul>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Resources</li>
                <li>Blog</li>
                <li>Newletter</li>
                <li>Events</li>
                <li>Help center</li>
                <li>Tutorials</li>
                <li>Support</li>
            </ul>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Usecases</li>
                <li>Startups</li>
                <li>Enterprise</li>
                <li>Government</li>
                <li>SaaS center</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
            </ul>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Social</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Github</li>
                <li>AngelList</li>
                <li>Dribble</li>
            </ul>
            <ul className='footer-list-container text-left col-6  col-md-4 col-lg-2'>
                <li className='list-subheading'>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>
            <div className='mt-5 col-12 d-lg-flex flex-row justify-content-between'>
            <div><img src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732118323/Logomark_q6lxze.png" alt="logo"/>
            <span>Unititled UI</span></div>
            <p className='rights-desc'>© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
      
    </div>
  )
}

export default FooterSection
