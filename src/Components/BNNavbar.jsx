import React from 'react'

const BNNavbar = ({ borderbt, Aborderbt, Pborderbt }) => {
    return (
        <div className='w-full bg-white shadow-md h-16 px-2 sm:px-16 md:pt-0 pt-2 flex items-center justify-between border-b border-gray-300'>
            <a href='https://shop-kart-3-0.vercel.app/' className='text-md whitespace-nowrap md:text-2xl font-bold'>ShopKart 3.0</a>
            <div className='flex gap-2 w-full sm:w-[70%] items-center justify-center cursor-default'>
                <h2 className={`${borderbt} tracking-widest uppercase text-xs sm:text-sm`}>Bag</h2>
                <span className='hidden sm:inline'>-------</span>
                <h2 className={`${Aborderbt} tracking-widest uppercase text-xs sm:text-sm`}>Address</h2>
                <span className='hidden sm:inline'>-------</span>
                <h2 className={`${Pborderbt} tracking-widest uppercase text-xs sm:text-sm`}>Payment</h2>
            </div>
            <div className='flex gap-2 items-center w-[15%] h-full justify-end cursor-default'>
                <img className='h-[40%]' src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
                <h1 className='text-xs sm:text-base font-medium'>100% SECURE</h1>
            </div>
        </div>
    )
}

export default BNNavbar