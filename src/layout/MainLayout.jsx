import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar'

const MainLayout = () => {
  return (
    <div className="max-w-[2520px]  mx-auto   px-2">
      <div className="mb-16">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
