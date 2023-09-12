import React from 'react'
import './Footer.css'
import logo from '../../assets//logo.png'

const Footer = () => {
  return (
    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                   <div class="footer1">
                    <div class="footer-logo">
                        <a href=""><img src={logo} alt="footer-logo"/></a>
                    </div>
                    <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                   </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer2">
                        <h3>Features</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Benifit</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer2">
                        <h3>Products</h3>
                        <ul>
                            <li>Task Management</li>
                            <li>Company growth</li>
                            <li>Time tracking</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer4">
                        <h3>Support</h3>
                        <ul>
                            <li>Customer service</li>
                            <li>Accessibility</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
           <div class="row">
            <div class="container">
                <div class="col-lg-12">
                    <div class="copyright">
                        <div class="copy1">
                            <p>@20201 Innovate.All rights reserved.</p>
                        </div>
                        <div class="copy-2">
                            <p>Privacy policy</p>
                            <p>Terms & condition</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>

      </section>
  )
}

export default Footer