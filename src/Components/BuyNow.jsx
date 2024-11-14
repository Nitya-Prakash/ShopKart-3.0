import React from 'react'
import BNNavbar from './BNNavbar'

const BuyNow = () => {
    const generateQuantityOptions = () => {
        return [...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))
    }
    return (
        <div>
            <BNNavbar borderbt={"border-b-2 border-green-300 text-green-600"} />
            <div className='max-w-screen-xl min-h-28 m-auto mt-3 px-3 py-1 bg-zinc-200 rounded-lg'>
                <h1 className='w-full h-[23%] text-2xl font-semibold'>Your Address</h1>
                <div className='w-full h-[77%] leading-5 pt-3 pb-1 px-7 '>
                    <h1 className='font-medium'>Nitya Prakash</h1>
                    <p className='mt-1 text-sm w-[45%]'>Mira Bhawan, Duburi, Police Colony, Near RD Office, Jajpur, Odisha - 755026</p>
                    <p className='text-sm'>8458023440</p>
                </div>
            </div>
            <div className='max-w-screen-xl h-[65vh] m-auto mt-4 rounded-lg p-5 bg-zinc-100 flex justify-between'>
                <div className='w-[70%] h-full rounded-md overflow-y-scroll flex flex-col gap-2'>
                    <div className='w-[98%] h-[40%] rounded-md bg-white border border-zinc-500 px-3 flex gap-5 py-1'>
                        <div className='w-[20%] h-full'>
                            <img className='w-full h-full object-contain object-center' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                            <h2 className='mt-2 text-sm font-medium text-zinc-500'>Men's clothing</h2>
                            <div className='mt-2 flex items-center gap-2'>
                                <span>Qty : </span>
                                <select className='border border-gray-300 rounded px-2 py-1'>
                                    {generateQuantityOptions()}
                                </select>
                            </div>
                            <h1 className='mt-3 text-lg font-medium text-red-600'>$ 2362</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[28%] h-full bg-zinc-200 rounded-md p-3 flex items-end'>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium'>Total Price Breakdown (1 item)</h2>
                        <div className='mt-4 border-b border-zinc-400 py-3 flex flex-col gap-1'>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Total MRP <span className='font-semibold'>$ 2362</span></h3>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Platform Fee <span className='font-semibold'>$ 70</span></h3>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Shipping Fee <span className='font-semibold'> $ 89</span></h3>
                        </div>
                        <h1 className='flex items-center justify-between mt-2 text-lg font-bold'>Total Amount <span className='text-red-600'>$ 2521</span></h1>
                        <button className='w-full px-3 py-2 bg-red-300 mt-4 rounded-sm uppercase font-medium hover:bg-red-400 transition-colors'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNow