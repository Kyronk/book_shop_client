import React, { useState, useRef, useEffect } from 'react'
import { HOSTNAME } from '../api/api';
import axios from 'axios';

import "../styles/product-details.css";
import ClipLoader from "react-spinners/ClipLoader";

import { Container, Row, Col } from "reactstrap";
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";

// redux
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true);
    const [bookItem, setBookItem] = useState({});
    const [tab, setTab] = useState('desc');
    const [rating, setRating] = useState(null);

    const reviewUser = useRef(''); 
    const reviewMsg = useRef('');

    

    const getBookItem = async () => {
        const response = await axios.get(`${HOSTNAME}/api/v2/book/item/${id}`);
        const book = response.data.data.response;
        setBookItem(book);
        setLoading(false)
        // console.log(book);
    }



    const addToCart = () => {
        dispatch(cartAction.addItem({
            id,
            image: bookItem.image,
            title: bookItem.title,
            price: bookItem.price,
        }));
        toast.success('Product add is successfully');
    }

    useEffect(() => {
        setTimeout(() => {
            getBookItem();
        }, 1000)
    }, []);

    return (
        <Helmet title={bookItem.title}>
            <CommonSection title={bookItem.title} />

            <section className='pt-0'>
                <Container>
                    <Row>
                        {
                            loading ? 
                                <div className="product__loading">
                                    <ClipLoader
                                        loading={loading}
                                        size={100}
                                        aria-label="Loading Spinner"
                                    />
                                </div> :
                                <>
                                <Col lg='6' >
                                <div className="product__image">
                                    <img src={bookItem.image} alt="" />
                                </div>
                            </Col>
    
                            <Col lg='6'>
                                <div className="product__details">
                                    <div className="product__title">
                                        <h2>{bookItem.title}</h2>
                                    </div>
                                    <div className="product__rating d-flex align-items-center gap-5 mb-4">
                                        <div>
                                            <span><i className="ri-star-s-fill"></i></span>
                                            <span><i className="ri-star-s-fill"></i></span>
                                            <span><i className="ri-star-s-fill"></i></span>
                                            <span><i className="ri-star-s-fill"></i></span>
                                            <span><i className="ri-star-half-fill"></i></span>
                                        </div>
                                        <p>( <span>4.5</span> rating)</p>
                                    </div>
    
                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='product__price'>$ {bookItem.price}</span>
                                        <span>Category: {bookItem.categoryData && bookItem.categoryData.value }</span>
                                    </div>
                                    {/* <p className='mt-3'>{}</p> */}
    
                                    <motion.button 
                                        whileTap={{ scale: 1.2 }} 
                                        className='buy__btn'
                                        onClick={addToCart}
                                        >Add to Cart
                                    </motion.button>
                                </div>
                            </Col>
                            </>
                        }
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className='tab__wrapper d-flex alight-items-center gap-5'>
                                <h6 
                                    className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('desc')}
                                    >Description</h6>
                                <h6 
                                    className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('rev')}
                                    >Reviews (2)</h6>
                            </div>
                            {
                                tab==='desc' ? 
                                <div className='tab__content mt-5'>
                                    <p>{bookItem.description}</p>
                                </div> :
                                <div className='product__review mt-5'>
                                    <div className="review__wrapper">
                                        <ul>
                                            <li>
                                                <h6>Join Hoo</h6>
                                                <span>4 (average rating)</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta consectetur est error tenetur magni excepturi illo repellat itaque corrupti? Aspernatur nesciunt perferendis deleniti aut illum alias numquam sapiente error.</p>
                                            </li>

                                            {/* {
                                                reviews.map((item, index) => (
                                                    <li key={index} className='mb-4'>
                                                        <h6>Join Hoo</h6>
                                                        <span>{item.rating} (average rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))
                                            } */}
                                        </ul>

                                        <div className="review__form">
                                            <form 
                                                action="" 
                                                // onSubmit={submitHandler}
                                                >
                                                <h4>Leave your experience</h4>
                                                <div className="form__group">
                                                    <input 
                                                        type="text" 
                                                        placeholder="Enter name"
                                                        ref={reviewUser}
                                                        />
                                                </div>

                                                <div className='form__group d-flex align-items-center gap-5 rating__group'>
                                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1<i className="ri-star-line"></i></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2<i className="ri-star-line"></i></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3<i className="ri-star-line"></i></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4<i className="ri-star-line"></i></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5<i className="ri-star-line"></i></motion.span>
                                                </div>

                                                <div className="form__group">
                                                    <textarea
                                                        ref={reviewMsg} 
                                                        rows={4} 
                                                        type="text" 
                                                        placeholder="Review Message" 
                                                        required/>
                                                </div>

                                                <motion.button whileTap={{scale: 1.2}} type='submit'  className='buy__btn'>Submit</motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* <div className="tab__content mt-5">
                                <p>{description}</p>
                            </div> */}
                        </Col>

                        <Col lg='12' className='mt-5'>
                            <h2 className='related__title'>You might also</h2>
                        </Col>

                        {/* <ProductList data={relatedProducts} /> */}
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default ProductDetails