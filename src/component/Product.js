import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Product = () => {


  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(response.data)
      setLoading(false)
    }

    getProduct()
  }, [])

  const LoadingComp = () => {
    return (
      <div className='row'>
        <div className="col-md-6">
          <Skeleton height={350} />
        </div>
        <div className="col-md-6"  >
          <Skeleton height={350} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
        </div>
      </div>
    )
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height='400px' width='400px' />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder ">Rating: {product.rating && product.rating.rate}
            <i className='fa fa-start'></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            $ {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>
            Agregar al carrito
          </button>
          <Link className='btn btn-dark ms-2 py-2 px-4' to='/cart'>
            Ir al carrito
          </Link>

        </div>
      </>

    )
  }
  return (
    <div>

      <div className="container py-5">
        <div className="row">
          {
            loading ? <LoadingComp /> : <ShowProduct />
          }
        </div>
      </div>
    </div>

  )
};

export { Product };