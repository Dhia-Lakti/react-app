import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {

  const rentArticles = []
  const saleArticles = []
  const [RentalArticles, setRentalArticles] = useState([]);
  const [SaleArticles, setSaleArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIwNTQ1LCJpYXQiOjE2Njk4MzQxNDUsImp0aSI6IjZkNDBmZjM1YTU3ZjRjNWI4NzJlMzc4YmY0NTg0ODNlIiwidXNlcl9pZCI6ImxsIn0.gHrf_YJ__hWLgjb4PmjntNwFajcy5a6wRKjVBBBmlrk'
      }
    })
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          const articles = data
          console.log(articles)
          articles.map(article => {
            if(article.type == "RENT" || article.type == "rent" || article.type == "Rent") {
              rentArticles.push(article)
            } else {
              saleArticles.push(article)
            }
          })
        
          setRentalArticles(rentArticles)
          setSaleArticles(saleArticles)
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

          <div class="main-banner">
            <div class="row">
              <div class="col-lg-7">
                <div class="header-text">
                  <h6 style={{color:"black"}}>Welcome To Cyborg</h6>
                  <h4 style={{color:"black"}}><em>Browse</em> Our Popular Games Here</h4>
                  <div class="main-button">
                    <a href="browse.html">Browse Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Most Recent Rental</em> Right Now</h4>
                </div>
                <div class="row">
                  {RentalArticles.slice(0, 4).map((article) => (
                                      <div class="col-lg-3 col-sm-6">
                                      <div class="item">
                                        <img src={article.images[0]} width="100px" height="160px" alt=""/>
                                        <h4>{article.title}<br/><span>{article.description}</span></h4>
                                        <ul>
                                          <li><i class="fa fa-user"></i> {article.ownerName}</li>
                                          <li><i class="fa fa-usd"></i> {article.price}</li>
                                        </ul>
                                      </div>
                                    </div>
                  ))}

                  <div class="col-lg-12">
                    <div class="main-button">
                      <Link to="/rents">See More...</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gaming-library">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>Most Recent Sale</em> Right Now</h4>
              </div>
              {SaleArticles.slice(0, 3).map((article) => (
                                      <div class="item">
                                      <ul>
                                        <li><img src={article.images[0]} alt="" class="templatemo-item" width="100px" height="60px"/></li>
                                        <li><h4>Title</h4><span>{article.title}</span></li>
                                        <li><h4>Description</h4><span>{article.description}</span></li>
                                        <li><h4>Owner</h4><span>{article.ownerName}</span></li>
                                        <li><h4>Price</h4><span>{article.price}</span></li>
                                        <li><div class="main-border-button border-no-active"><a href="#">Details</a></div></li>
                                      </ul>
                                    </div>
                  ))}
            </div>
            <div class="col-lg-12">
              <div class="main-button">
                <a href="profile.html">See More...</a>
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
          <p>Copyright © 2022 <a href="#">Cyborg</a> Company. All rights reserved. 
          
          <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">All Group</a></p>
        </div>
      </div>
    </div>
  </footer>
      </React.Fragment>
    );
}

export default Home;