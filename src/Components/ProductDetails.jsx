import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import { productContext } from '../Utils/Context';

const ProductDetails = () => {
    const [product, setProduct] = useContext(productContext);
    const [singleProdDeatils, setsingleProdDeatils] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        if (!singleProdDeatils) {
            setsingleProdDeatils(product.filter(prod => prod.id == id)[0]);
        }
    }, [id, product, singleProdDeatils])

    if (!singleProdDeatils) {
        return <div>Loading...</div>;
    }


    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[85%] h-[75%] flex gap-3'>
                <div className='w-[45%] h-full p-3'>
                    <img src={singleProdDeatils.image} alt="" className='w-full h-full object-contain object-center' />
                </div>
                <div className='w-[52%] h-full flex flex-col justify-center'>
                    <h1 className='text-4xl w-[80%] font-semibold'>{singleProdDeatils.title}</h1>
                    <h3 className='mt-3 text-lg text-zinc-500 font-medium capitalize'>{singleProdDeatils.category}</h3>
                    <h2 className='text-2xl mt-4 text-red-600 font-bold'>${singleProdDeatils.price}</h2>
                    <p className='mt-5 w-[80%] text-lg font-medium leading-6'>{singleProdDeatils.description}</p>
                    <div className='mt-8 flex gap-3'>
                        <Link to={"/buynow"} className='px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-2'>
                            <BsLightning />
                            <p>Buy Now</p>
                        </Link>
                        <Link to={"/addtocart"} className='px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-2'>
                            <FiShoppingCart />
                            <p>Add To Cart</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails