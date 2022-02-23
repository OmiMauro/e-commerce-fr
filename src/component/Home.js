import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="assets/bg.jpg" class="card-img" alt="..." height='550px' />
        <div class="card-img-overlay d-flex align-items-center">
          <div className="container">

            <h5 class="card-title display-3 fw-bolder">New Seasons arrivals</h5>
            <p class="card-text lead fs-2">
              Chequea todas las tendencias
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Home }