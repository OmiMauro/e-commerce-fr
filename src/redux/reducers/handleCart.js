const cart = []
let exists
const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case "ADDITEM":
      //check if product alredy exists
      exists = state.find(item => item.id === product.id)
      if (exists) {
        // increment quantity
        return state.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      } else {
        return [
          ...state, { ...product, qty: 1 }
        ]
      }
      break
    case "REMOVEITEM":
      exists = state.find(item => item.id === product.id)
      if (exists.qty === 1) {
        return state.filter(item => item.id !== exists.id)
      } else {
        return state.map(item => item.id === product.id ? { ...item, qty: item.qty - 1 } : item)
      }
      break
    default:
      return state
      break
  }
}
export { handleCart }