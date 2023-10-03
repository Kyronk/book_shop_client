import React, { useState } from 'react'
import "../styles/login.css";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';


// redux

import { useDispatch, useSelector } from 'react-redux'

// import { login } from '../redux/slice/authSlice';
import { loginUser } from "../redux/slices/authSlice";

// function getUser() {
//     let user = localStorage.getItem('user');
//     if (user) {
//         user = JSON.parse(user);
//     } else {
//         user = null;
//     };
//     return user;
// }

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState(getUser());
    // console.log(user)

    const userProfile = useSelector((state) => state.auth.user.access_token);
    console.log(userProfile)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        dispatch(loginUser(user)).then(
            (result) => {
                if (result.payload) {
                    setEmail("");
                    setPassword("");
                    navigate("/home");
                }
            }
        );
    }



    return (

        <Helmet title="Login">
            <section>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        {
                            userProfile ? (
                                <>
                                    <h3>you have logged in</h3>
                                    <Link to="/home">
                                        <button>Home</button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <h3 className='fw-bold mb-4'>Login</h3>

                                    <Form className='auth__form'>

                                        <div className='form__main'>
                                            <div className="form__input">
                                                <input
                                                    type="text"
                                                    required
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    type="password"
                                                    required
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <span className="form__span"></span>
                                                <label
                                                    className="form__label"
                                                >Password</label>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleLogin}
                                            type='submit'
                                            className="buy__btn auth__btn">Login</button>
                                        <p>Don't have an account? <Link to='/signup'> Create an account</Link></p>

                                    </Form>
                                </>
                            )
                        }

                    {/* ==================================================== */}

                        {/* <h3 className='fw-bold mb-4'>Login</h3>

                        <Form className='auth__form'>

                            <div className='form__main'>
                                <div className="form__input">
                                    <input
                                        type="text"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        type="password"
                                        required
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="form__span"></span>
                                    <label
                                        className="form__label"
                                    >Password</label>
                                </div>
                            </div>

                            <button 
                                onClick={handleLogin}
                                type='submit' 
                                className="buy__btn auth__btn">Login</button>
                            <p>Don't have an account? <Link to='/signup'> Create an account</Link></p>

                        </Form> */}
                    </Col>
                </Row>
            </section>
        </Helmet>
    )
}

export default Login