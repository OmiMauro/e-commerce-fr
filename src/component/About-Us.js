import React from 'react'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div class="container  py-5 my-5">
      <div className="row ">
        <div className="col-md-6">
          <h1 className=' fw-bold text-dark mb-4'>About Us</h1>
          <p className="lead ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi, illum vitae dolorum blanditiis quia nulla dignissimos adipisci ab officia, molestiae tempore, earum aliquam totam voluptates beatae asperiores in minima! Dolor ipsam dolorum minima assumenda, explicabo eum harum officia laudantium voluptates deserunt amet! Blanditiis distinctio quam nobis quae. Iure perspiciatis quibusdam est quam! Quo quae ea rem ratione a vitae earum animi ipsa nobis doloremque dolor, perferendis inventore magni, vero dolorum? Blanditiis dolores atque quidem commodi necessitatibus saepe illo? Qui debitis unde corrupti corporis alias doloremque vero, nisi incidunt consectetur, ex rerum impedit soluta doloribus accusamus eaque dolorum quibusdam modi.
          </p>
          <Link to='/contacts' className='btn btn-outline-dark w-50 mb-4'>¿Quieres comunicarte con nosotros?</Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="assets/bg.jpg" alt="Some" height={400} width='90%' />
        </div>
      </div>
    </div>



  )
}

export { AboutUs }