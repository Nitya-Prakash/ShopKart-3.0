import React, { createContext, useEffect, useState } from 'react'
import axios from '../Utils/Axios'


export const productContext = createContext()

const Context = (props) => {
    const [product, setProduct] = useState(null);
    const [val, setVal] = useState(
        {
            userName: "",
            city: "",
            state: "",
            house: "",
            colony: "",
            mobile: "",
            pin: ""
        }
    )
    const getProducts = () => {
        axios.get("/products").then(res => {
            setProduct(res.data)
            // console.log(res.data)
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <productContext.Provider value={{ product, setProduct, val, setVal }}>
            {props.children}
        </productContext.Provider>
    )
}

export default Context