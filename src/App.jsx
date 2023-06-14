import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Tech } from './components'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <StarsCanvas />

            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
