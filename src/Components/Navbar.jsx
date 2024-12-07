import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className='w-full bg-white shadow-md md:h-16'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-14 md:h-16'>
                    <Link to="https://shop-kart-3-0.vercel.app/" className='text-xl md:text-2xl font-bold'>
                        ShopKart 3.0
                    </Link>

                    <div className='hidden md:flex flex-1 mx-8'>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2'
                        />
                    </div>

                    <div className='hidden md:flex items-center space-x-4'>
                        <Link to="/cart" className='flex items-center gap-2 hover:text-gray-600'>
                            <FiShoppingCart size={20} />
                            Cart
                        </Link>
                        <Link className='flex items-center gap-2 hover:text-gray-600'>
                            <BiUser size={20} />
                            User
                        </Link>
                        <Link className='flex items-center gap-2 hover:text-gray-600'>
                            <BiUser size={20} />
                            User / Seller
                        </Link>
                    </div>

                    <button
                        className='md:hidden p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                <div className='md:hidden pb-2 px-2'>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className='w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2'
                    />
                </div>

                {isMenuOpen && (
                    <div className='md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg'>
                        <div className='flex flex-col p-4 space-y-4'>
                            <Link
                                to="/cart"
                                className='flex items-center gap-2 hover:text-gray-600'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FiShoppingCart size={20} />
                                Cart
                            </Link>
                            <Link
                                className='flex items-center gap-2 hover:text-gray-600'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BiUser size={20} />
                                User
                            </Link>
                            <Link
                                className='flex items-center gap-2 hover:text-gray-600'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BiUser size={20} />
                                Seller
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;