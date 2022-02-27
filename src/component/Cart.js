import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeCart, addToCart } from "../redux/action/index";
const Cart = () => {
  const state = useSelector(state => state.handleCart)

  const dispatch = useDispatch()
  const handleButtonMinus = item => {
    dispatch(removeCart(item))
  }
  const handleButton = (item) => {
    dispatch(addToCart(item))
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5" >
        <div className="container py-4">
          <div className="row">
            <h3>Aún no ha agregado productos al carrito</h3>
          </div>
        </div>
      </div>

    )
  }
  const cartItems = (item) => {
    return (
      <div className="px-4 my-5 bg-ligth rounded-3" key={item.id}>
        <div className="container py-4">
          <button className='btn-close float-end' aria-label='Close' onClick={() => handleButtonMinus(item)}></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={item.image} alt={item.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <p className="lead fw-bold">
                {item.qty} X {item.price} = $ {item.qty * item.price}
              </p>
              <button className="btn btn-outline-dark me-4" onClick={() => handleButtonMinus(item)}><i className='fa fa-minus'></i></button>
              <button className="btn btn-outline-dark" onClick={() => handleButton(item)}><i className='fa fa-plus'></i></button>

            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {state.length ? state.map(cartItems) : emptyCart()}
    </>
  );
};

export { Cart };