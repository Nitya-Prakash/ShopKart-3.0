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
        <div className='w-screen h-screen flex flex-col gap-10 md:justify-center items-center py-4'>
            <div className='w-full h-16 bg-white shadow-md flex items-center justify-center md:hidden'>
                <Link to="https://shop-kart-3-0.vercel.app/" className='text-3xl font-bold'>
                    ShopKart 3.0
                </Link>
            </div>
            <div className='w-[95%] md:w-[85%] h-auto md:h-[75%] flex flex-col md:flex-row gap-6 md:gap-3 px-4'>
                <div className='w-full md:w-[45%] h-[300px] md:h-full p-3'>
                    <img
                        src={singleProdDeatils.image}
                        alt=""
                        className='w-full h-full object-contain object-center'
                    />
                </div>
                <div className='w-full md:w-[52%] h-full flex flex-col justify-start md:justify-center'>
                    <h1 className='text-2xl md:text-4xl w-full md:w-[80%] font-semibold'>{singleProdDeatils.title}</h1>
                    <h3 className='mt-2 md:mt-3 text-base md:text-lg text-zinc-500 font-medium capitalize'>{singleProdDeatils.category}</h3>
                    <h2 className='text-xl md:text-2xl mt-3 md:mt-4 text-red-600 font-bold'>${singleProdDeatils.price}</h2>
                    <p className='mt-3 md:mt-5 w-full md:w-[80%] text-base md:text-lg font-medium leading-6'>{singleProdDeatils.description}</p>
                    <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3'>
                        <Link to="/buynow" className='px-4 py-2 border border-gray-600 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-300 transition-colors'>
                            <BsLightning />
                            <p>Buy Now</p>
                        </Link>
                        <button onClick={addToCart} className='px-4 py-2 border border-gray-600 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-300 transition-colors'>
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
