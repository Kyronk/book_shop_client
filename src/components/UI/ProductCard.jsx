import React from 'react'

import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { cutLongText } from '../../helper/cutText';

import { toast } from 'react-toastify';


const ProductCard = ({item}) => {
    return (
        <Col lg='2' md='5' className='mb-2' >
            <div className="product__item">
                <Link to={`/shop/${item.id}`}>
                    <div className="product__img">
                        <motion.img whileHover={{ scale: 0.9 }} src={item.image} alt="" />
                    </div>
                    <div className='p-2 product__info'>
                        <h6 className='product__name'>
                            {/* <Link to={`/shop/${item.id}`} >{item.productName}</Link> */}
                            {cutLongText(item.title, 36)}
                        </h6>
                        {/* <span >{item.category}</span> */}
                    </div>
                </Link>
                <div className="product__cart-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <motion.span 
                        whileTap={{ scale: 1.2 }} 
                        // onClick={addToCart}
                        >
                        <i className="ri-add-line"></i>
                    </motion.span>
                </div>
            </div>
        </Col>
        
    )
}

export default ProductCard