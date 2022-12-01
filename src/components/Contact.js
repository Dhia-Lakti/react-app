import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Contact = () => {

    return (
		  <React.Fragment>
        <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="index.html" class="logo">
                        <img src="assets/assets/images/logo.png" alt=""/>
                    </a>
                   
                    <div class="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i class="fa fa-search"></i>
                      </form>
                    </div>
                   
                    <ul class="nav">
                        <li><Link to="/home" class="active">Home</Link></li>
                        <li><Link to="/rent">Rent</Link></li>
                        <li><Link to="/sale">Buy</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/profile">Profile <img src="assets/assets/images/profile-header.jpg" alt=""/></Link></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>



  <section class="u-clearfix u-image u-shading u-section-1" id="carousel_564d" data-image-width="1620" data-image-height="1080">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-27-xl u-size-29-lg u-size-29-md u-size-29-sm u-size-29-xs u-layout-cell-1">
                <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-1">
                  <h2 class="u-text u-text-1">Contact Us</h2>
                  <div class="u-list u-list-1">
                    <div class="u-repeater u-repeater-1">
                      <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                        <div class="u-container-layout u-similar-container u-container-layout-2">
                          <h5 class="u-text u-text-3"><span class="u-file-icon u-icon u-text-palette-2-base u-icon-1"><img src="assets/assets/images/1082334-fb359f02.png" alt=""/></span>&nbsp;Call Us
                          </h5>
                          <p class="u-text u-text-4" style={{color: "white"}}>(+216) 28 789 047, (+216) 92 543 025</p>
                        </div>
                      </div>
                      <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                        <div class="u-container-layout u-similar-container u-container-layout-3">
                          <h5 class="u-text u-text-5"><span class="u-file-icon u-icon u-text-palette-2-base u-icon-2"><img src="assets/assets/images/205d33fb-71c4-40dc-a07f-7a1273e85973-8e3db335.png" alt=""/></span>&nbsp;Location
                          </h5>
                          <p class="u-text u-text-6" style={{color: "white"}}>Ariana Essoughra, Raoued, Ariana</p>
                        </div>
                      </div>
                      <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                        <div class="u-container-layout u-similar-container u-container-layout-4">
                          <h5 class="u-text u-text-7"><span class="u-file-icon u-icon u-text-palette-2-base u-icon-3"><img src="assets/assets/images/2791568-c0ca2275.png" alt=""/></span>&nbsp;Business Hours
                          </h5>
                          <p class="u-text u-text-8" style={{color: "white"}}>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-right-cell u-size-31-lg u-size-31-md u-size-31-sm u-size-31-xs u-size-33-xl u-layout-cell-2">
                <div class="u-container-layout u-container-layout-5">
                  <div class="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                    <form action="https://forms.nicepagesrv.com/Form/Process" class="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form" style={{padding: 10}} source="email" name="form">
                      <div class="u-form-email u-form-group u-form-partition-factor-2">
                        <label for="email-319a" class="u-label u-text-body-alt-color u-label-1">Email</label>
                        <input type="email" placeholder="Enter a valid email address" id="email-319a" name="email" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required=""/>
                      </div>
                      <div class="u-form-group u-form-name u-form-partition-factor-2">
                        <label for="name-319a" class="u-label u-text-body-alt-color u-label-2">Name</label>
                        <input type="text" placeholder="Enter your Name" id="name-319a" name="name" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required=""/>
                      </div>
                      <div class="u-form-address u-form-group u-form-group-3">
                        <label for="address-452f" class="u-label u-text-body-alt-color u-label-3">Address</label>
                        <input type="text" placeholder="Enter your address" id="address-452f" name="address" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required=""/>
                      </div>
                      <div class="u-form-group u-form-message">
                        <label for="message-319a" class="u-label u-text-body-alt-color u-label-4">Message</label>
                        <textarea placeholder="Enter your message" rows="4" cols="50" id="message-319a" name="message" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required=""></textarea>
                      </div>
                      <div class="u-align-left u-form-group u-form-submit">
                        <a href="aa" class="u-active-white u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-white u-palette-2-base u-radius-50 u-text-hover-palette-2-base u-btn-2">Submit</a>
                        <input type="submit" value="submit" class="u-form-control-hidden"/>
                      </div>
                      <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                      <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name="recaptchaResponse"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright © 2022 <a href="aa">Cyborg</a> Company. All rights reserved. 
          
          <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">All Group</a></p>
        </div>
      </div>
    </div>
  </footer>
      </React.Fragment>
    );
}

export default Contact;