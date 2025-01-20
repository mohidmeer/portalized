import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div className='h-screen' >
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
