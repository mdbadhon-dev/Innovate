import React from 'react'
import './Banner.css'
import bshape1 from '../../assets/bshape1.png'
import bshape2 from '../../assets/bshape2.png'
// import images from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <section id="banner">
        <div class="banner-shape-1"><img src={bshape1} alt="banner shape1"/></div>
        <div class="banner-shape-2"><img src={bshape2} alt="banner shape2"/></div>
      
    <div class="container">
      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="banner-details text-center">
            <h1>YOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO</h1>
            <p>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>
            <div class="banner-btn">
              <button class="button1">get free quoto</button>  
              <button class="button2">learn more</button>  
            </div>
            
          </div>
        </div>

      </div>
    </div>

  </section>
  )
}

export default Banner