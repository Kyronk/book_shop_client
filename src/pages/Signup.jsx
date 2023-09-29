import React, { useState } from 'react'
import "../styles/login.css";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Helmet title="Sign up">
            <section>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Sign Up</h3>

                        <Form className='auth__form'>

                            <div className='form__main'>
                                <div className="form__input">
                                    <input
                                        type="text"
                                        required
                                    // onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <span className="form__span"></span>
                                    <label
                                        className="form__label"
                                    >User Name</label>
                                </div>
                            </div>

                            <div className='form__main'>
                                <div className="form__input">
                                    <input
                                        type="text"
                                        required
                                    // onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <span className="form__span"></span>
                                    <label
                                        className="form__label"
                                    >Email</label>
                                </div>
                            </div>

                            <div className='form__main'>
                                <div className="form__input">
                                    <input
                                        type="text"
                                        required
                                    // onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <span className="form__span"></span>
                                    <label
                                        className="form__label"
                                    >Password</label>
                                </div>
                            </div>

                            <button type='submit' className="buy__btn auth__btn">Create an account</button>
                            <p>A;ready have an account? <Link to='/login'> Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </section>
        </Helmet>
    )
}

export default Signup