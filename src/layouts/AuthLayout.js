import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center' >
        <Outlet/>
    </main>
  )
}

export default AuthLayout
