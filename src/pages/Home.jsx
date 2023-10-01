import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";
import ClipLoader from "react-spinners/ClipLoader";
import Service from "../services/Services";
import ProductList from '../components/UI/ProductList';
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";


const Home = () => {
    // console.log(data)
    const year = new Date().getFullYear();


    const [loading, setLoading] = useState(true);


    const [trendingProducts, setTrendingProducts] = useState([]);
    // const [bestSalesProducts, setBestSalesProducts] = useState([]);
    // const [mobileProducts, setMobileProducts] = useState([]);

    const getData = async () => {
        setLoading(true);
        // const response = await axios.get(`http://localhost:4000/api/v2/book/listbook?limit=3&available[]=18&available[]=30`);
        const response = await axios.get(`http://localhost:4000/api/v2/book/listbook?limit=5`);

        const listProduct = response.data.data.list.rows;
        console.log(listProduct);
        setTrendingProducts(listProduct);
        setLoading(false);

    }

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            getData()
        }, 1000)
    }, [])

    return (
        <Helmet title="Home">
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__container">
                                <p className="hero__subtitle">Trending product in {year} </p>
                                <h2>Explore & read millions of books</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Eius sapiente dolor soluta facere voluptatem
                                    impedit hic tenetur ipsa fuga aut necessitatibus
                                    eaque amet dignissimos doloribus, maiores error
                                    accusantium expedita sequi?</p>

                                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                                    <Link to="/shop">SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <Service />

            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center text__header'>
                            <h2 className='section__title'>Trending Products</h2>
                            {/* <span className="right__light-item">
                                <i className="ri-arrow-right-line"></i>
                            </span> */}
                            <div className="right__light-item1">
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </Col>

                        {
                            loading ?
                                <div className="product__loading">
                                    <ClipLoader
                                        loading={loading}
                                        size={100}
                                        aria-label="Loading Spinner"
                                    />
                                </div>
                                :
                                <ProductList data={trendingProducts} />
                        }
                    </Row>
                </Container>
            </section>

            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center text__header'>
                            <h2 className='section__title'>Best Sales</h2>
                            {/* <span className="right__light-item">
                                <i className="ri-arrow-right-line"></i>
                            </span> */}
                            <div className="right__light-item1">
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </Col>

                        {
                            loading ?
                                <div className="product__loading">
                                    <ClipLoader
                                        loading={loading}
                                        size={100}
                                        aria-label="Loading Spinner"
                                    />
                                </div>
                                :
                                <ProductList data={trendingProducts} />
                        }
                    </Row>
                </Container>
            </section>

            <section className='timer_count'>
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count__down-col'>
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2' >Limited Offers</h4>
                                <h3 className='text-white fs-6 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.2 }} className='buy__btn store__btn'>
                                <Link to="/shop">
                                    Visit Store
                                </Link>
                            </motion.button>
                        </Col>

                        <Col lg='6' md='12' className='text-end counter__img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center text__header'>
                            <h2 className='section__title'>New Book</h2>
                            {/* <span className="right__light-item">
                                <i className="ri-arrow-right-line"></i>
                            </span> */}
                            <div className="right__light-item1">
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </Col>

                        {
                            loading ?
                                <div className="product__loading">
                                    <ClipLoader
                                        loading={loading}
                                        size={100}
                                        aria-label="Loading Spinner"
                                    />
                                </div>
                                :
                                <ProductList data={trendingProducts} />
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home