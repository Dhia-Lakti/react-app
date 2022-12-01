import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Details = () => {

  const params = useParams()

  const [article, setArticle] = useState({})

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/1", {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIwNTQ1LCJpYXQiOjE2Njk4MzQxNDUsImp0aSI6IjZkNDBmZjM1YTU3ZjRjNWI4NzJlMzc4YmY0NTg0ODNlIiwidXNlcl9pZCI6ImxsIn0.gHrf_YJ__hWLgjb4PmjntNwFajcy5a6wRKjVBBBmlrk'
      }
    })
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          setArticle(data)
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



  <section class="u-align-center u-clearfix u-section-3" id="sec-c2ad">
      <div class="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <div style={{marginLeft: "150px"}} class="u-carousel u-gallery u-layout-thumbnails u-lightbox u-no-transition u-show-text-always u-gallery-1" data-interval="5000" data-u-ride="carousel" id="carousel-1c15">
                    <div class="u-carousel-inner u-gallery-inner" role="listbox">
                      <div class="u-active u-carousel-item u-gallery-item u-carousel-item-1" data-image-width="1280" data-image-height="853">
                        <div class="u-back-slide">
                          <img class="u-back-image u-expanded" src={article.images}/>
                        </div>
                        <div class="u-over-slide u-over-slide-1">
                          <h3 class="u-gallery-heading"></h3>
                          <p class="u-gallery-text"></p>
                        </div>
                        <style data-mode="XL" data-visited="true"></style>
                        <style data-mode="LG"></style>
                        <style data-mode="MD"></style>
                        <style data-mode="SM"></style>
                        <style data-mode="XS"></style>
                      </div>
                      <div class="u-carousel-item u-gallery-item u-carousel-item-2" data-image-width="1620" data-image-height="1080">
                        <div class="u-back-slide">
                          <img class="u-back-image u-expanded" src="https://img.freepik.com/premium-vector/gradient-black-background-with-wavy-lines_23-2149157311.jpg"/>
                        </div>
                        <div class="u-over-slide u-over-slide-2">
                          <h3 class="u-gallery-heading"></h3>
                          <p class="u-gallery-text"></p>
                        </div>
                        <style data-mode="XL" data-visited="true"></style>
                        <style data-mode="LG"></style>
                        <style data-mode="MD"></style>
                        <style data-mode="SM"></style>
                        <style data-mode="XS"></style>
                      </div>
                      <div class="u-carousel-item u-gallery-item u-carousel-item-3" data-image-width="1280" data-image-height="640">
                        <div class="u-back-slide">
                          <img class="u-back-image u-expanded" src="https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg"/>
                        </div>
                        <div class="u-over-slide u-over-slide-3">
                          <h3 class="u-gallery-heading"></h3>
                          <p class="u-gallery-text"></p>
                        </div>
                        <style data-mode="XL" data-visited="true"></style>
                        <style data-mode="LG"></style>
                        <style data-mode="MD"></style>
                        <style data-mode="SM"></style>
                        <style data-mode="XS"></style>
                      </div>
                    </div>
                    <a class="u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-1c15" role="button" data-u-slide="prev">
                      <span aria-hidden="true">
                        <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                      </span>
                      <span class="sr-only">
                        <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                      </span>
                    </a>
                    <a class="u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-1c15" role="button" data-u-slide="next">
                      <span aria-hidden="true">
                        <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                      </span>
                      <span class="sr-only">
                        <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                      </span>
                    </a>
                    <ol class="u-carousel-thumbnails u-spacing-10 u-carousel-thumbnails-1">
                      <li class="u-active u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-1c15" data-u-slide-to="0">
                        <img class="u-carousel-thumbnail-image u-image" src={article.images}/>
                      </li>
                      <li class="u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-1c15" data-u-slide-to="1">
                        <img class="u-carousel-thumbnail-image u-image" src="https://img.freepik.com/premium-vector/gradient-black-background-with-wavy-lines_23-2149157311.jpg"/>
                      </li>
                      <li class="u-carousel-thumbnail u-carousel-thumbnail-3" data-u-target="#carousel-1c15" data-u-slide-to="2">
                        <img class="u-carousel-thumbnail-image u-image" src="https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg"/>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2" style={{marginRight: "250px"}}>
                  <h4 class="u-text u-text-default u-text-1" style={{color: "palevioletred"}}>{article.type}</h4>
                  <h3 class="u-text u-text-default u-text-2" style={{color: "white"}}>{article.title}</h3>
                  <h1 class="u-text u-text-default u-title u-text-3" style={{color: "white"}}>{article.price}</h1>
                  <p class="u-text u-text-default u-text-4" style={{color: "white", marginRight: "230px"}}>{article.description}</p>
                  <h1 class="u-text u-text-default u-title u-text-5"  style={{color: "palevioletred"}}>{article.ownerName}</h1>
                  <img class="u-hover-feature u-image u-image-circle u-image-4" src={article.ownerImage} alt="" data-image-width="1620" data-image-height="1080"/>
                  <span class="u-text u-text-default u-title u-text-6" style={{marginRight: "100px"}}> <i style={{color: "white"}} class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp; {article.ownerPhone} </span>
                  <span class="u-file-icon u-icon u-icon-2"><img src="assets/assets/images/542689.png" alt=""/></span>
                  <h1 class="u-text u-text-default u-title u-text-6" style={{marginRight: "100px"}}> <i style={{color: "white"}} class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; {article.ownerEmail}</h1>
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

export default Details;