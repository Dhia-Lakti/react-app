import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Rent = () => {

  const [SaleArticles, setSaleArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/SALE", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIwNTQ1LCJpYXQiOjE2Njk4MzQxNDUsImp0aSI6IjZkNDBmZjM1YTU3ZjRjNWI4NzJlMzc4YmY0NTg0ODNlIiwidXNlcl9pZCI6ImxsIn0.gHrf_YJ__hWLgjb4PmjntNwFajcy5a6wRKjVBBBmlrk'
      }
    })
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          setSaleArticles(data)
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
  
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">

          
          
          
          <div class="live-stream">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>All Houses</em> For Sale</h4>
              </div>
            </div>
            <div class="row">
            {SaleArticles.map((article) => (
                                      <div class="col-lg-3 col-sm-6">
                                      <Link>
                                      <div class="item">
                                        <div class="thumb">
                                          <img src={article.images[0]} alt="" height="250px"/>
                                          <div class="hover-effect">
                                            <div class="content">
                                              <ul>
                                                <li><a href="aa"><i class="fa fa-usd"></i> {article.price}M</a></li>
                                                <li><a href="aa"><i class="fa fa-user"></i> {article.ownerName}</a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="down-content">
                                          <div class="avatar">
                                            <img src={article.ownerImage} alt="" style={{maxWidth: 46, borderRadius: 50, float: "left"}}/>
                                          </div>
                                          <span><i class="fa fa-home"></i> {article.title}</span>
                                          <h4>{article.description}</h4>
                                        </div> 
                                      </div>
                                      </Link>
                                    </div>
                  ))}
              
              
              
              
              
              
              
              
              <div class="col-lg-12">
                <div class="main-button">
                  <a href="streams.html">That's All</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  
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

export default Rent;