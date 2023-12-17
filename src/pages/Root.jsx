import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../compo/Navbar/Navbar'

function Root() {
  return (
    <div>

        <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Root
