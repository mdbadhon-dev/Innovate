import React from 'react'
import './Impact.css'
import icorner from '../../assets/idea-corner.png'
import iicon1 from '../../assets/idea-icon1.png'
import iicon2 from '../../assets/idea-icon2.png'
import iimg from '../../assets/idea-images.png'

const Impact = () => {
  return (
    <section id="impact">
    <div class="idea-corner">
        <img src={icorner} alt="idea-corner"/>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="impact-heading">
                    <h3>We create real impact</h3>
                    <p>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 ps-5">
                <div class="idea-part">
                    <div class="idea-icon">
                        <img src={iicon1} alt="idea-icon1"/>
                        <h3>Competitive analysis</h3>
                    </div>
                    <p>With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
                </div>
                <div class="idea-part pt-5">
                    <div class="idea-icon">
                        <img src={iicon2} alt="idea-icon2"/>
                        <h3>Strategy And research</h3>
                    </div>
                    <p>Save money and start building your website using the best tools available on the market today.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="idea-images">
                    <img src={iimg} alt="idea-images"/>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Impact