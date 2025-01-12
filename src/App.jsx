import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-900'>
    <Navbar/>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default App
