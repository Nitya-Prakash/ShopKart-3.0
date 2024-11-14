import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-screen-xl h-16 m-auto flex items-center justify-between'>
            <div className='flex gap-10 w-[70%]'>
                <a href='https://shop-kart-3-0.vercel.app/' className='text-2xl'>ShopKart 3.0</a>
                <input className='w-[80%] px-4 py-2 rounded-xl bg-zinc-200 text-black border-none focus:outline-none' type="text" placeholder="Search Product Categories" />
            </div>
            <div className='w-[28%] flex items-center justify-between'>
                <div className='flex items-center gap-2 px-3 py-1 cursor-pointer'>
                    <RiUserLine className='text-xl' />
                    <h1>User</h1>
                </div>
                <Link to={"/cart"} className='flex items-center gap-2 px-3 py-1 cursor-pointer'>
                    <FiShoppingCart className='text-xl' />
                    <h1>Cart</h1>
                </Link>
                <button className=' px-3 py-1 cursor-pointer'>
                    <h1 className='flex items-center gap-1'><RiUserLine />User / <CiShop />Seller</h1>
                </button>
            </div>
        </div>
    )
}

export default Navbar