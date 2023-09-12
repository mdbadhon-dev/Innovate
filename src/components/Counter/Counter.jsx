import React from 'react'
import './Counter.css'
import cshape from '../../assets/cshape.png'

const Counter = () => {
  return (
    <section id="counter">
      <div class="counter-shape">
        <img src={cshape} alt="counter-shape"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="counter-details text-center  ">
              <section class="cd1">
                <h3>53k</h3>
                <p>Happy client</p>
              </section> 
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-details text-center">
              <section class="cd1">
                <h3>10k</h3>
                <p>Projects Done</p>
              </section> 
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-details text-center">
              <section class="cd1">
                <h3>120</h3>
                <p>Gets Award</p>
              </section> 
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-details text-center ">
              <h3>16</h3>
              <p>operated years</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Counter