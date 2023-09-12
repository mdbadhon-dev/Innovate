import React from 'react'
import './choose.css'
import ccorner from '../../assets/content corner.png'

const Choose = () => {
  return (
    <section id="choose">
      <div class="choose-shape">
        <img src={ccorner} alt="content corner"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="choose-left">
              <div class="choose-point">
                <div class="choose-circle"></div>
                <p>We solve real-world problems through people and the web.</p>
              </div> 
              <div class="choose-point">
                <div class="choose-circle"></div>
                <p>We make processes and technology work efficiently together.</p>
              </div> 
              <div class="choose-point">
                <div class="choose-circle"></div>
                <p>We advance improve existing technology through research and development.</p>
              </div> 
              <div class="choose-point">
                <div class="choose-circle"></div>
                <p>We develop long-lasting and scalable solutions, relationships partnerships.</p>
              </div> 
            </div>
          </div>
          <div class="col-lg-5">
            <div class="choose-right">
              <h3>Why Choose Us</h3>
              <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose