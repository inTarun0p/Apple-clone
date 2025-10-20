import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import "./index.css"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function App() {

  return (
    <>
      <main>
        <NavBar />
        <Hero/>
        <ProductViewer/>
      </main>
    </>
  )
}

export default App
