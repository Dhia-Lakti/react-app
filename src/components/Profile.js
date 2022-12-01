import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users/1", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIwNTQ1LCJpYXQiOjE2Njk4MzQxNDUsImp0aSI6IjZkNDBmZjM1YTU3ZjRjNWI4NzJlMzc4YmY0NTg0ODNlIiwidXNlcl9pZCI6ImxsIn0.gHrf_YJ__hWLgjb4PmjntNwFajcy5a6wRKjVBBBmlrk'
      }
    })
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          setUser(data)
          console.log(data)
        })
  }, []);

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
  
  <section class="u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-clearfix u-image u-section-2" id="sec-2506" data-image-width="1980" data-image-height="1320">
      <div class="u-clearfix u-sheet u-sheet-1">
        <img class="u-image u-image-circle u-image-1" src={user.image} alt="" data-image-width="400" data-image-height="265"/>
        <h1 class="u-custom-font u-text u-text-1" style={{color: "palevioletred"}}>{user.username}</h1>
        <p class="u-large-text u-text u-text-variant u-text-2" style={{color: "white"}}>I'm a creative webdeveloper</p>
        <img class="u-image u-image-default u-image-2" src="assets/assets/images/-min.jpg" alt="" data-image-width="1600" data-image-height="962"/>
        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <h4 class="u-custom-font u-text u-text-3" style={{color: "palevioletred"}}>Details</h4>
                  <p class="u-text u-text-4">
                    <span style={{fontWeight: 700}}>Name: </span>
                    <br/>{user.username}<br/>
                    <span style={{fontWeight: 700}}>Age: </span>
                    <br/>32 years <span style={{fontWeight: 700}}>
                      <br/>Location: 
                    </span>
                    <br/>Tunis
                  </p>
                  <div class="u-social-icons u-spacing-10 u-social-icons-1">
                    <a class="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name"><span class="u-icon u-icon-circle u-social-facebook u-social-icon u-text-black u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-d679"><path fill="currentColor" d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2
	c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path></svg></span>
                    </a>
                    <a class="u-social-url" title="twitter" target="_blank" href="https://twitter.com/name"><span class="u-icon u-icon-circle u-social-icon u-social-twitter u-text-black u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-ec8f"><path fill="currentColor" d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2
	c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7
	c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2
	c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5
	c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path></svg></span>
                    </a>
                    <a class="u-social-url" title="instagram" target="_blank" href="https://www.instagram.com/name"><span class="u-icon u-icon-circle u-social-icon u-social-instagram u-text-black u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-c1ee"><path fill="currentColor" d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z
	 M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path><path fill="#FFFFFF" d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path><path fill="currentColor" d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7
	V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7
	c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path></svg></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2">
                  <h4 class="u-custom-font u-text u-text-5" style={{color: "palevioletred"}}>Contact</h4>
                  <p class="u-text u-text-6"><span style={{fontWeight: 700}}> Phone:</span> <br /><span> {user.phone}</span></p>
                  <p class="u-text u-text-6"><span style={{fontWeight: 700}}> E-mail:</span> <br /><span> {user.mail}</span></p>
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

export default Profile;