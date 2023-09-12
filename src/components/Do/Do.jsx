import React from 'react'
import './Do.css'
import dimg1 from '../../assets/do image 1.png'
import dimg2 from '../../assets/do image 2.png'
import dimg3 from '../../assets/do image 3.png'
import dimg4 from '../../assets/do image 4.png'
import dimg5 from '../../assets/do image 5.png'

const Do = () => {
  return (
    <section id="do">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="do-title">
              <h3>What We Do</h3>
              <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
              <button>Contact Us</button>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="do-service text-center">
              <img src={dimg1} alt="do image 1"/>
              <h4>web Design & Dev</h4>
              <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
              <a href="">Read more</a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="do-service text-center">
              <img src={dimg2} alt="do image 2"/>
              <h4>Software Dev</h4>
              <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
              <a href="">Read more</a>
            </div>
          </div>
          <div class="col-lg-4 mt-5">
            <div class="do-service text-center">
              <img src={dimg3} alt="do image 3"/>
              <h4>Content Writing</h4>
              <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
              <a href="">Read more</a>
            </div>
          </div>
          <div class="col-lg-4 mt-5">
            <div class="do-service text-center">
              <img src={dimg4} alt="do image 4"/>
              <h4>Digital Marketing</h4>
              <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
              <a href="">Read more</a>
            </div>
          </div>
          <div class="col-lg-4 mt-5">
            <div class="do-service text-center">
              <img src={dimg5} alt="do image 5"/>
              <h4>Support & Training</h4>
              <p>Social Media has changed the way we interact & do business while creating a new avenue.</p>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Do