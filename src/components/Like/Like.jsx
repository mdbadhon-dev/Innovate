import React from 'react'
import './Like.css'
import payment1 from '../../assets/panama payment.png'
import remitance from '../../assets/remitance.jpg'
import payment2 from '../../assets/panama payment.png'

const Like = () => {
  return (
    <section id="like">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 m-auto">
        <div class="like-details">
          <h2>You May Also Like </h2>
          <div class="row">
            <div class="col-lg-4">
              <div class="like-left">
                <img src={payment1} alt="panama payment"/>
              </div>
              
            </div>
            <div class="col-lg-8">
              <div class="like-right">
                <div class="social-tag">
                  <ul class="d-flex">
                    <li class="news"><a href="">News</a></li>
                    <li><a href="">By Tomas Nikelson</a></li>
                    <li><a href="">Posted</a></li>
                    <li><a href="">5 Hours Ago</a></li>
                  </ul>
                  <h4>Punto Pago Allows Quick And Secure 
                    Payments For Services In Panama</h4>
                    <div class="read-more">
                      <a href="">Read more</a>

                    </div>
                    
                </div>
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="like-left">
                <img src={remitance} alt="panama payment"/>
              </div>
              
            </div>
            <div class="col-lg-8">
              <div class="like-right">
                <div class="social-tag">
                  <ul class="d-flex">
                    <li class="news"><a href="">News</a></li>
                    <li><a href="">By Tomas Nikelson</a></li>
                    <li><a href="">Posted</a></li>
                    <li><a href="">5 Hours Ago</a></li>
                  </ul>
                  <h4>The User Can Also Replenish A Balance
                    Make Remittances </h4>
                    <div class="read-more">
                      <a href="">Read more</a>

                    </div>
                    
                </div>
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="like-left">
                <img src={payment2} alt="panama payment"/>
              </div>
              
            </div>
            <div class="col-lg-8">
              <div class="like-right">
                <div class="social-tag">
                  <ul class="d-flex">
                    <li class="news"><a href="">News</a></li>
                    <li><a href="">By Tomas Nikelson</a></li>
                    <li><a href="">Posted</a></li>
                    <li><a href="">5 Hours Ago</a></li>
                  </ul>
                  <h4>The User Can Also Replenish A Balance
                    Make Remittances </h4>
                    <div class="read-more">
                      <a href="">Read more</a>

                    </div>
                    
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>

 </section>

  )
}

export default Like