import React from 'react';
import { Products } from './Products'
import { Carousel } from './Carousel'

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src="assets/bg.jpg" className="card-img" alt="..." height='550px' />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder">New Seasons arrivals</h5>
              <p className="card-text lead fs-2">
                Chequea todas las tendencias
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  )
}

export { Home }