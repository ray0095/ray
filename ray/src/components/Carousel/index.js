import React from "react";
import "./style.css";

function Carousel() {
    return (
        <div id="carousel">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://scx2.b-cdn.net/gfx/news/hires/2019/galaxy.jpg" class="d-block w-100 h-100vh" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Day Planner</h5>
                            <p>Simple app utilizing local storage and Moment.js to save daily taks in an organized way.</p>
                            <a class="btn btn-dark" href="https://github.com/ray0095/dayplanner" role="button">Check out the repo</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.britannica.com/30/133930-131-580E6710/Background-bubble-planets-clouds-astrology-astronomy-bubbles.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Tipsy Tarot</h5>
                            <p>A fun drink recommendation and fortune telling app utilizing the CocktailDB API</p>
                            <a class="btn btn-dark" href="https://github.com/ray0095/team-project" role="button">Check out the repo</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.thoughtco.com/thmb/f5nOqM1DFHeOmd78BnOErkCznpY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/solar-system-439046_1920-be1042fd410b4878b66848659193859d.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>E-Commerce Back-end</h5>
                            <p>This app feature the M and C of your standard MVC application. Users can create, read, update, and delete items from an e-commerce database.</p>
                            <a class="btn btn-dark" href="https://github.com/ray0095/ecommerce-backend" role="button">Check out the repo</a>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    )
};

export default Carousel;