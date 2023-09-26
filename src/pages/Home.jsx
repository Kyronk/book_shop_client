import React, {useState, useEffect} from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';
import { checkTargetForNewValues, motion } from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Service from "../services/Services";


const Home = () => {
     // console.log(data)
    const year = new Date().getFullYear();


    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const getData = async () => {
        const response = await axios.get(`http://localhost:4000/api/v2/book/listbook?limit=3&available[]=18&available[]=30`);
        console.log(response);

    }

    useEffect(() => {
        getData();
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
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        {/* <ProductList data={trendingProducts} /> */}
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Home