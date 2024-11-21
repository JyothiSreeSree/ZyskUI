import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#d">
        <img src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732118323/Logomark_q6lxze.png" alt="logo"/> Unititled UI
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-5">
          <a className="nav-link navlink active" href="#d">
            Home
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link navlink" href="#d">Products</a>
          <a className="nav-link navlink" href="#d">Resources</a>
          <a className="nav-link navlink" href="#d">Pricing</a>
          
        </div>
        <img className='nav-link ml-auto d-none d-md-block mr-5' src="https://res.cloudinary.com/dpcmdsun8/image/upload/v1732119470/_Navigation_actions_o4w3ml.png" alt="profile"/>
      </div>
    </nav>
  )
}

export default Navbar
