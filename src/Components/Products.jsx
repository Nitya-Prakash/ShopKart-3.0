import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'

const Products = () => {
    const { product } = useContext(productContext)
    // console.log(product)

    return (
        <div className='max-w-screen-xl h-[72vh] m-auto flex flex-wrap items-start justify-start gap-4 p-3 overflow-y-scroll mt-2'>
            {product && product.map((item, index) => (
                <div key={index} className='w-[24%] h-[50vh] bg-gray-300 px-4 py-3 rounded-lg cursor-pointer'>
                    <div className='w-full h-[85%] bg-white rounded-md'>
                        <img className='w-full h-full mb-3 bg-contain bg-no-repeat bg-center object-contain' src={item.image} alt="" />
                    </div>
                    <h1 className='text-center text-base leading-4 font-medium mt-3 line-clamp-2'>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default Products