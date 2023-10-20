import React, { useEffect } from 'react'
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { HOSTNAME } from '../api/api';
import axios from 'axios';

// redux
import { cartAction } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// import {};

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    // console.log(cartItems.length);

    const oderList = [];
    const userID = "axx";
    cartItems.forEach((item) =>{
        const book = {
            "book_id": item.id,
            "quantity": item.quantityItem,
            "price": item.price,
            "user_id": userID
        }
        oderList.push(book)
    })
    // console.log(oderList);

    const handleOder = async() => {

        await axios.post(`${HOSTNAME}/api/v2/oder/create`, oderList);

        toast.success("oder is sucess");
        dispatch(cartAction.oderSuccess());
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartAction.getCartTotal())
    }, [cartItems])


    return (
        <Helmet title="Cart">
        <CommonSection title="Shopping Cart" />

        <section>
            <Container>
                <Row>
                    <Col lg='9'>
                        {/* <h5 className="total__item">Cart: {cartItems.length} item</h5> */}
                    
                        {
                            cartItems.length === 0 ?
                                (<h2 className='fs-4 text-center'> No item added to the cart</h2>) : (
                                    <table className='table brodered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => {
                                                    return (
                                                        <Tr item={item} key={index} />
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>)
                        }
                    </Col>

                    <Col lg='3'>
                        <div>
                            <h6 className='d-flex align-items-center justify-content-between'>
                                Item
                                <span className='fs-4 fw-bold'> {cartItems? cartItems.length: 0}</span>
                            </h6>
                            <h6 className='d-flex align-items-center justify-content-between'>
                                All Item
                                <span className='fs-4 fw-bold'> {totalQuantity}</span>
                            </h6>
                            <h6 className='d-flex align-items-center justify-content-between'>
                                Subtotal 
                                {/* ... */}
                                <span className='fs-4 fw-bold'>$ {totalPrice.toFixed(2)}</span>
                            </h6>
                        </div>
                        <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                        <div>

                            {/* <Link to='/checkout'> */}
                            {
                                cartItems && cartItems.length <= 0?  "" 
                                : <button
                                    onClick={handleOder}
                                    className='buy__btn w-100'>
                                    Check out
                                </button>        
                            }
                                                        
                            {/* </Link> */}

                            <Link to='/shop'>
                                <button className='buy__btn w-100 mt-3'>
                                        Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    )
}


const Tr = ({ item }) => {

    const dispatch = useDispatch()
    const deleteProduct = () => {
        dispatch(cartAction.deleteItem(item.id))
    }

    return (
        <tr>
            <td><img src={item.image} alt="" /></td>
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>
                <div className='quantity__main'>
                    <button 
                        className='quantity__btn'
                        // onClick={() => dispatch(cartAction.decreaseItemQuantity(item.id))}
                        onClick={() => dispatch(cartAction.decreaseItemQuantity(item.id))}
                        >  - </button>
                    <span className='quantity__value'>
                    {item.quantityItem}
                    </span>
                    <button 
                        className='quantity__btn'
                        onClick={() => dispatch(cartAction.inCreaseItemQuantity(item.id))}
                        > + </button>

                </div>
            </td>
            <td>
                <motion.i 
                    whileTap={{ scale: 1.5 }} 
                    className="ri-delete-bin-2-line"
                    onClick={deleteProduct}
                    ></motion.i>
            </td>
        </tr>
    )
}

export default Cart;