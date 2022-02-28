import './App.css'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Footer } from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import { Products } from './component/Products'
import { Contacts } from './component/Contacts'
import { AboutUs } from './component/About-Us'
import { Product } from './component/Product'
import { Cart } from './component/Cart'
import { Checkout } from './component/Checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/products/:id' exact element={<Product />} />
        <Route path='/contacts' exact element={<Contacts />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/checkout' exact element={<Checkout />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
