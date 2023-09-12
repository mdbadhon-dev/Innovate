import React from 'react'
import './Plan.css'
import pimg1 from '../../assets/plan image-1.png'
import pimg2 from '../../assets/plan image-2.png'
import pimg3 from '../../assets/plan image-3.png'

const Plan = () => {
  return (
    <section id="plan">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 m-auto ">
            <div class="plan-heading">
              <h3>Choose The Right Plan</h3>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="plan-details">
              <h3>Basic</h3>
              <img src={pimg1} alt="plan image-1"/>
              <p class="price"><span class="dollar">$</span>160</p>
              <p> Responsive Design
                Dynamic Elements
                Service Pages
                Custom Design & Features</p>

            </div>
          </div>
          <div class="col-lg-4">
            <div class="plan-details">
              <h3>Professional</h3>
              <img src={pimg2} alt="plan image-2"/>
              <p class="price"><span class="dollar">$</span>240</p>
              <p> Responsive Design
                Dynamic Elements
                Service Pages
                Custom Design & Features</p>

            </div>
          </div>
          <div class="col-lg-4">
            <div class="plan-details">
              <h3>Exclusive</h3>
              <img src={pimg3} alt="plan image-3"/>
              <p class="price"><span class="dollar">$</span>325</p>
              <p> Responsive Design
                Dynamic Elements
                Service Pages
                Custom Design & Features</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan