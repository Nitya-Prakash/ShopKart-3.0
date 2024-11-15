import React from 'react'

const BNNavbar = ({ borderbt, Aborderbt, Pborderbt }) => {
    return (
        <div className='max-w-screen-xl h-16 m-auto flex items-center justify-between border-b border-gray-300'>
            <a href='https://shop-kart-3-0.vercel.app/' className='text-2xl w-[15%]'>ShopKart 3.0</a>
            <div className='flex gap-2 w-[70%] items-center justify-center cursor-default'>
                <h2 className={`${borderbt} tracking-widest uppercase text-sm`}>Bag</h2>
                <span>-------</span>
                <h2 className={`${Aborderbt} tracking-widest uppercase text-sm`}>Address</h2>
                <span>-------</span>
                <h2 className={`${Pborderbt} tracking-widest uppercase text-sm`}>Payment</h2>
            </div>
            <div className='flex gap-2 items-center w-[15%] h-full justify-end cursor-default'>
                <img className='h-[40%]' src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
                <h1 className='text-base font-medium'>100% SECURE</h1>
            </div>
        </div>
    )
}

export default BNNavbar