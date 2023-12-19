import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../compo/Navbar/Navbar'
// import Footer from '../compo/Footer/Footer'

function Root() {
  return (
    <div>
        
        <Navbar/>
       
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Root
