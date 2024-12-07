import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsLightning } from 'react-icons/bs';
import useProductDetails from '../Utils/useProductDetails';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { singleProdDeatils } = useProductDetails();
    const navigate = useNavigate()
    if (!singleProdDeatils) {
        return <div>Loading...</div>;
    }

    const addToCart = () => {
        toast.success("Product Added To The Cart");
        navigate("/cart")
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[85%] h-[75%] flex gap-3'>
                <div className='w-[45%] h-full p-3'>
                    <img
                        src={singleProdDeatils.image}
                        alt=""
                        className='w-full h-full object-contain object-center'
                    />
                </div>
                <div className='w-[52%] h-full flex flex-col justify-center'>
                    <h1 className='text-4xl w-[80%] font-semibold'>{singleProdDeatils.title}</h1>
                    <h3 className='mt-3 text-lg text-zinc-500 font-medium capitalize'>{singleProdDeatils.category}</h3>
                    <h2 className='text-2xl mt-4 text-red-600 font-bold'>${singleProdDeatils.price}</h2>
                    <p className='mt-5 w-[80%] text-lg font-medium leading-6'>{singleProdDeatils.description}</p>
                    <div className='mt-8 flex gap-3'>
                        <Link to="/buynow" className='px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-2 hover:bg-zinc-300 transition-colors'>
                            <BsLightning />
                            <p>Buy Now</p>
                        </Link>
                        <button onClick={addToCart} className='px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-2 hover:bg-zinc-300 transition-colors'>
                            <FiShoppingCart />
                            <p>Add To Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
