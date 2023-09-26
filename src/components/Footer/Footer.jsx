import React from 'react'

import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';



const Footer = () => {

    const year = new Date().getFullYear();


    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' className='mb-4'>
                        <div className='footer_quick-link'>
                            
                            <div>
                                <h1 className='text-white'>Book shop</h1>
                                {/* <p>Since 1995</p> */}
                            </div>
                        </div>
                        <p className='footer__text mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis pariaturmodi quas quae, eveniet dolore.
                            Mon.</p>
                    </Col>

                    <Col lg='3' className='mb-4'>
                        <div className='footer_quick-link'>
                            <h4 className='quick__links-title'>Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">HistoricalFiction</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Philosophy</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Business</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Fiction</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' className='mb-4'>
                        <div className='footer_quick-link'>
                            <h4 className='quick__links-title'>Useful Link</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' className='mb-4'>
                        <div className='footer_quick-link'>
                            <h4 className='quick__links-title'>Contact</h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>123. Zonba</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+848888888888</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>example123@gmail.com</p>
                                </ListGroupItem>

                                
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className='footer__copyright'> Copyright {year} dev</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer