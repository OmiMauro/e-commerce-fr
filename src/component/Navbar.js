import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container  ">
          <Link class="navbar-brand fw-bold fs-4" to='/'>URU IO</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className='nav-link' to='/products'>Productos</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to='/contacts'>Contacto</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to='/about'>About Us</Link>
              </li>
            </ul>
            <div className="buttons">
              <Link className="btn btn-outline-dark " to='/login'><i class="fa fa-sign-in me-1 "></i>Login</Link>
              <Link className="btn btn-outline-dark " to='/register'><i class="fa fa-user-plus me-1 "></i>Register</Link>
              <Link className="btn btn-outline-dark " to='/cart'><i class="fa fa-shopping-cart me-1 "></i>Cart</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export { Navbar }
