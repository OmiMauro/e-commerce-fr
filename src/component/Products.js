import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Products = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState(data)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const products = await axios.get('https://fakestoreapi.com/products?limit=15')
      setData(products.data)
      setFilter(products.data)
      setLoading(false)
    }
    getProducts()
  }, [])
  const Loading = () => {
    return (
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    )
  }
  const filterProduct = category => {
    const updatedList = data.filter(item => item.category === category)
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center my-5 py-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All Products</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('men\'s clothing')}>Mens</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('women\'s clothing')}>Women's</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('jewelery')} >Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('electronics')}>Electronic</button>

        </div>
        {
          filter.map(product => {
            return (
              <div className="col-md-3 ">
                <div class="card h-100 text-center py-4">
                  <img src={product.image} class="card-img-top" alt={product.title} height='250px' />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0, 12)} ...</h5>
                    <p class="card-text lead fw-bolder">
                      $ {product.price}
                    </p>
                  </div>
                  <Link to={`/products/${product.id}`} >Comprar Ahora</Link>
                </div>
              </div>
            )
          })
        }

      </>

    )
  }
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <h1 className="col-12 text-center display-6 fw-bolder text-uppercase">Ultimos productos creados</h1>
        <hr />
      </div>
      <div className="row justify-content-center">
        {
          loading ? <Loading /> : <ShowProducts />
        }
      </div>
    </div>
  )
}

export { Products }