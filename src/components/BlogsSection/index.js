import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";
import './index.css'

const BlogsSection = () => {
  return (
    <div  className='d-flex flex-column justify-content-center align-items-center m-5'>
      <div className='d-flex flex-row'>
        <div className='text-left'>
            <span className='our-blog-span'>Our Blog</span>
            <h1 className='our-blog-h1'>Latest blog  posts</h1>
            <p className='our-blog-p'>Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div><button className='d-none d-lg-block check-out-button'>View all posts</button></div>
      </div>
      <div className='container d-flex flex-column justify-content-center align-items-center mt-5'>
        <div className='row bg-container d-flex align-items-center'>
            <div className='each-blog-container col-12 col-lg-3'>
                <img className='each-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732162482/Image_zksaht.png" alt="first-blog"/>
                <div className='text-left mt-3'>
                    <h5 className='each-blog-title'>Design</h5>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 className='each-blog-heading'>UX review presentations</h1>
                        <ImArrowUpRight2/></div>
                        <p className='each-blog-desc'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    </div>
                <div className='d-flex flex-row '>
                    <img className="each-blog-img" src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732119470/_Navigation_actions_o4w3ml.png" alt="firstblog-profile"/>
                    <div className='text-left ml-3'>
                        <h4 className='each-blog-profile-name'>Oliviya Rhye</h4>
                        <p className='each-blog-date'>21 Novemeber 2024</p>
                    </div>
                </div>
            </div>
            <div className='each-blog-container col-12 col-lg-3'>
                <img className='each-image'  src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732162482/Image_1_haw8ls.png" alt="second-blog"/>
                <div className='text-left mt-3'>
                    <h5 className='each-blog-title'>Product</h5>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 className='each-blog-heading'>Migrating to Linear 101</h1>
                        <ImArrowUpRight2/>
                    </div>
                        <p className='each-blog-desc'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                </div>
                <div className='d-flex flex-row '>
                    <img className="each-blog-img" src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732164114/Avatar_k5mhct.png" alt="secondblog-profile"/>
                    <div className='text-left ml-3'>
                        <h4 className='each-blog-profile-name'>Phoenix Baker</h4>
                        <p className='each-blog-date'>20 Novemeber 2024</p>
                    </div>
                </div>
            </div>
            <div className='each-blog-container col-12 col-lg-3'>
                <img className='each-image' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732162482/Image_2_ghzzgd.png" alt="first-blog"/>
                <div className='text-left mt-3'>
                    <h5 className='each-blog-title'>Software Engineering</h5>
                    <div className='d-flex flex-row justify-content-between'>
                        <h1 className='each-blog-heading'>Building your API stack</h1>
                    <ImArrowUpRight2/>
                    </div>
                    <p className='each-blog-desc'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                </div>
                <div className='d-flex flex-row '>
                    <img className="each-blog-img" src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732164114/Avatar_1_lxbncz.png" alt="firstblog-profile"/>
                    <div className='text-left ml-3'>
                        <h4 className='each-blog-profile-name'>Lana Steiner</h4>
                        <p className='each-blog-date'>19 Novemeber 2024</p>
                    </div>
                </div>
            </div>
            <div><button className='d-lg-none d-block check-out-button'>View all posts</button></div>
        </div>

      </div>
      <div className=' d-flex flex-column justify-content-center align-items-center text-center mt-5 '>
        <h1 className='each-blog-heading'>Start Free Trail</h1>
        <p className='each-blog-desc'>Join over 4,000+ startups already growing with Untitled.</p>
        <div className='banner-button-container'>
        <button className='signup-button'>Get Started</button>
        <button className='demo-button'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default BlogsSection
