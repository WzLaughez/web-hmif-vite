import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import Home from './Components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: false,
});
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    </>
  )
}

export default App
