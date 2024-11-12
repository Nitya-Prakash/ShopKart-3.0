import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Products from './Products'

const Home = () => {
    return (
        <div className='overflow-hidden h-screen'>
            <Navbar />
            <Categories />
            <Products />
        </div>
    )
}

export default Home