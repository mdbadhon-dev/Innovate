import React from 'react'
import './Man.css'
import mimg from '../../assets/man image.png'

const Man = () => {
  return (
    <section id="man">
    <div class="container">
      <div class="man-heading">
        <h3>What The People Thinks About Us </h3>
    </div>
      <div class="row">
        <div class="col-lg-11 m-auto">
          <div class="man-image">
            <img src={mimg} alt="man image"/>
          </div>
          <div class="man-bio text-center">
            <div class="icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>Lesser Replenish bearing they’re him cattle kind dominion. You 
              which fill place. Land she’d subdue divided gathering blessed
              seasons it. Without, wherein days.</p>
              <div class="man-info">
                <h3>Lukan Depina</h3>
                <p>Ceo And Head Of Idea</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  </section>
            
  )
}

export default Man