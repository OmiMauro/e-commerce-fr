import './App.css'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Footer } from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import { Products } from './component/Products'
import { Contacts } from './component/Contacts'
import { AboutUs } from './component/About-Us'
import { Product } from './component/Product'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/product/:id' exact element={<Product />} />
        <Route path='/contacts' exact element={<Contacts />} />
        <Route path='/about' exact element={<AboutUs />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
