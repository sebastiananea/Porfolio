import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import MyCards from './components/MyCards'
import Pt from './components/Particles'
import About from './components/About'
import 'animate.css'
import wow from 'wowjs'

function App() {
  new wow.WOW().init()
  return (
    <>
      <div className='particles'>
        <Pt />
      </div>
      <div className='text wow  animate__animated animate__fadeIn  animate__slower'>
        <h1 className=' wow  animate__animated animate__fadeIn animate__delay-1s animate__slower'>
          Sebastian Anea
        </h1>
        <h3 className=' wow  animate__animated animate__fadeIn animate__slower animate__delay-2s'>
          Fullstack Developer
        </h3>
      </div>
      <Navbar sticky='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Sebastian Anea</Navbar.Brand>
        </Container>
      </Navbar>
      <About />
      <h2 className='text-center mt-5'>Mis Proyectos</h2>
      <MyCards />
    </>
  )
}

export default App
