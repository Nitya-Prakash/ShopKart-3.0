import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../Utils/Context'
import { Link, useLocation } from 'react-router-dom'

const Products = () => {
    const { product } = useContext(productContext)
    // console.log(product)
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);
    const [filterProducts, setFilterProducts] = useState(null);

    useEffect(() => {
        if (!product) return;

        if (!category || category === "undefined") {
            setFilterProducts(product);
        } else {
            const filtered = product.filter(prod => prod.category.toLowerCase() === category.toLowerCase());
            setFilterProducts(filtered);
        }
    }, [category, product])


    return (
        <div className='max-w-screen-xl md:h-[68vh] h-[73vh] m-auto flex flex-wrap items-start justify-center gap-4 p-3 overflow-y-scroll mt-2'>
            {filterProducts && filterProducts.map((item, index) => (
                <Link
                    to={`/productDetails/${item.id}`}
                    key={index}
                    className='w-full sm:w-[45%] md:w-[30%] lg:w-[23%] h-[45vh] sm:h-[50vh] bg-gray-300 px-4 py-3 rounded-lg cursor-pointer hover:shadow-lg transition-all'
                >
                    <div className='w-full h-[85%] bg-white rounded-md'>
                        <img
                            className='w-full h-full mb-3 bg-contain bg-no-repeat bg-center object-contain'
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                    <h1 className='text-center text-lg md:text-base md:leading-4 leading-5 font-semibold mt-3 line-clamp-2'>
                        {item.title}
                    </h1>
                </Link>
            ))}
        </div>
    )
}

export default Products