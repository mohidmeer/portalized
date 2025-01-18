import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div className='' >
            <main>dsadsa
                <Header />
                    <Outlet/>
                <Footer />
            </main>
        </div>
    )
}

export default PublicLayout
