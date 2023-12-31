import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'


const ProductList = ({data}) => {
    return (
        <>
        {
            data?.map((item, index) => (
                    <ProductCard item={item} key={index}/>
            ))
        }
        
    </>
    )
}

export default ProductList;