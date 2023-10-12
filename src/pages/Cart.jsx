import React, { useEffect } from 'react'
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// redux
import { cartAction } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

// import {};

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    
    // console.log(cartItems)
    
    // console.log(cartItems);

    const oderList = [];
    const userID = "axx";
    cartItems.forEach((item) =>{
        const book = {
            "book_id": item.id,
            "quantity": item.quantity,
            "price": item.price,
            "user_id": userID
        }
        oderList.push(book)
    })
    // console.log(oderList);

    const handleOder = async() => {
        await axios.post(`http://localhost:4000/api/v2/oder/create`, oderList)

        toast.success("oder is sucess")
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
                                All Item
                                <span className='fs-4 fw-bold'> {totalQuantity}</span>
                            </h6>
                            <h6 className='d-flex align-items-center justify-content-between'>
                                Subtotal
                                <span className='fs-4 fw-bold'>$ {totalPrice}</span>
                            </h6>
                        </div>
                        <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                        <div>

                            {/* <Link to='/checkout'> */}
                                <button
                                    onClick={handleOder}
                                    className='buy__btn w-100'>
                                    Check out
                                </button>                                   
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
                <button className='quantity__btn'>  - </button>
                <span className='quantity__value'>

                {item.quantityItem}
                </span>
                <button className='quantity__btn'> + </button>
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