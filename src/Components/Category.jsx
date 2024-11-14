import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'
import { Link } from 'react-router-dom';

const Category = () => {
    const [product] = useContext(productContext)

    let distinct_Category = product && product.map(item => item.category);
    distinct_Category = [...new Set(distinct_Category)];

    const categoryImages = [
        { category: "men's clothing", img: "https://w7.pngwing.com/pngs/561/261/png-transparent-jeans-jacket-suit-clothing-coat-men-s-trousers-thumbnail.png" },
        { category: "jewelery", img: "https://w7.pngwing.com/pngs/95/1015/png-transparent-earring-pearl-tanishq-jewellery-jewellery-miscellaneous-gemstone-ring-thumbnail.png" },
        { category: "electronics", img: "https://w7.pngwing.com/pngs/174/713/png-transparent-black-desktop-computer-set-illustration-desktop-computer-personal-computer-computer-desktop-pc-computer-network-electronics-computer-thumbnail.png" },
        { category: "women's clothing", img: "https://w7.pngwing.com/pngs/623/8/png-transparent-dress-sleeve-clothing-neckline-polka-dot-women-039-s-day-fashion-party-dress-fashion-model-thumbnail.png" }
    ]


    return (
        <div className='max-w-screen-xl h-[15vh] bg-zinc-200 m-auto flex items-center justify-between px-10 py-1 rounded-lg'>
            {distinct_Category.map((category, index) => {
                const categoryData = categoryImages.find(item => item.category === category);
                const imageUrl = categoryData ? categoryData.img : "img";
                return (
                    <Link key={index} to={`/?category=${category}`} className='cursor-pointer items-center flex flex-col w-[20%] h-[80%]'>
                        <div className='h-[80%]'>
                            <img src={imageUrl} alt="" className='h-full w-full object-contain object-top' />
                        </div>
                        <h1 className='font-semibold capitalize'>{category}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default Category