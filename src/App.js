import './App.css'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Carousel } from './component/Carousel'
import { Footer } from './component/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Home />
      <Footer />
    </>
  )
}

export default App
