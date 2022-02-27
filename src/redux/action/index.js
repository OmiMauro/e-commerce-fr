// add item to cart

export const addToCart = product => {
  return {
    type: 'ADDITEM',
    payload: product
  }
}

// remove a item to cart
export const removeCart = product => {
  return {
    type: 'REMOVEITEM',
    payload: product
  }
}