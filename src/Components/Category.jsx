import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'
import { Link } from 'react-router-dom';

const Category = () => {
    const { product } = useContext(productContext)

    let distinct_Category = product && product.map(item => item.category);
    distinct_Category = [...new Set(distinct_Category)];

    const categoryImages = [
        { category: "men's clothing", img: "https://w7.pngwing.com/pngs/561/261/png-transparent-jeans-jacket-suit-clothing-coat-men-s-trousers-thumbnail.png" },
        { category: "jewelery", img: "https://w7.pngwing.com/pngs/95/1015/png-transparent-earring-pearl-tanishq-jewellery-jewellery-miscellaneous-gemstone-ring-thumbnail.png" },
        { category: "electronics", img: "https://w7.pngwing.com/pngs/174/713/png-transparent-black-desktop-computer-set-illustration-desktop-computer-personal-computer-computer-desktop-pc-computer-network-electronics-computer-thumbnail.png" },
        { category: "women's clothing", img: "https://w7.pngwing.com/pngs/623/8/png-transparent-dress-sleeve-clothing-neckline-polka-dot-women-039-s-day-fashion-party-dress-fashion-model-thumbnail.png" }
    ]


    return (
        <div className='max-w-screen-xl md:h-auto h-20 bg-zinc-200 m-auto flex justify-between items-center px-1 md:px-10 py-14 md:py-3 rounded-lg overflow-hidden'>
            {distinct_Category.map((category, index) => {
                const categoryData = categoryImages.find(item => item.category === category);
                const imageUrl = categoryData ? categoryData.img : "img";
                return (
                    <Link
                        key={index}
                        to={`/?category=${category}`}
                        className='cursor-pointer items-center flex flex-col w-[45%] sm:w-[22%] h-20 md:h-24 mb-2 md:mb-0'
                    >
                        <div className='h-[55%] md:h-[75%]'>
                            <img src={imageUrl} alt={category} className='h-full w-full object-contain object-center' />
                        </div>
                        <h1 className='text-xs md:text-sm font-bold capitalize text-center mt-1'>{category}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default Category