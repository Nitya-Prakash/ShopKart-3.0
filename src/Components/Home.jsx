import React, { useState } from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Products from './Products'

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='overflow-x-hidden min-h-screen'>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Categories />
            <Products />
        </div>
    )
}

export default Home