import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "../styles/shop.css";
import ClipLoader from "react-spinners/ClipLoader";
import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/Helmet/Helmet";
import {Container, Row, Col} from "reactstrap"

import { HOSTNAME } from '../api/api';

import ReactPaginate from "react-paginate";
import ProductList from "../components/UI/ProductList";

import Search from '../components/Search/Search';

const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");

    // const getData = async () => {
    //     setLoading(true);
    //     const response = await axios.get(`http://localhost:4000/api/v2/book/listbook?`);
    //     const list = response.data.data.list.rows;
    //     setProductsData(list);
    //     setLoading(false);
    // }

    const fetchData = async (currentPage) => {
        setLoading(true);
        const response = await axios.get(
            `${HOSTNAME}/api/v2/book/listbook?${sort}&page=${currentPage ? currentPage : 1}`
            // `http://localhost:4000/api/v2/book/listbook?${sort}&page=${currentPage}`
            // `http://localhost:4000/api/v2/book/listbook?order[]=price&order[]=DESC&page=${currentPage}`
            );
        const data = response.data.data.list.rows;
        const count = response.data.data.list.count;
        const limit = response.data.data.Limit;
        // console.log()
        setProductsData(data);
        setPageCount(Math.ceil(count/limit));
        setLoading(false);
        return data;
    }

    const handleClickPage = async(data) => {
        // console.log(data.selected)
        let currentPage = (data.selected + 1);
        
        const commitFormServer = await fetchData(currentPage);
        setLoading(false);
        setProductsData(commitFormServer);
        
    }


    useEffect(() => {
        // getData();
        // fetchData();
        setTimeout(() => {
            fetchData()
        }, 2000);
    }, [sort])

    return (
        <Helmet title={'Shop'}>
            <CommonSection title={"Books"} />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className='filter__widget'>
                                {/* <select name="" onChange={handleFilter}> */}

                                <select name="" onChange={(e) => setSort(e.target.value)}>
                                    <option>Filter By Category</option>
                                    <option  value="order[]=price&order[]=ASC">By Price a - z</option>
                                    <option  value="order[]=price&order[]=DESC">By Price z - a</option>
                                    <option  value="order[]=title&order[]=ASC">By Name a - z</option>
                                    <option  value="order[]=title&order[]=DESC">By Name z - a</option>
                                </select>
                            </div>
                        </Col>

                        <Col lg='3' md="6" className='text-end'>
                            <div className='filter__widget'>
                                {/* <select name="" id=''>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select> */}
                            </div>
                        </Col>

                        <Col lg='6' md="12">
                                <Search />
                        </Col>
                    </Row>
                </Container>

                <section>
                    <Container>
                        <Row>
                            {/* {
                                productsData.length === 0? <h1 className='text-center fs-4'>No Products are found!</h1>
                                : <ProductList data={productsData} />

                            } */}
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
                                <ProductList data={productsData} />
                        }
                        </Row>
                    </Container>
                </section>

                {/* <section> */}
                    <div className='down'>
                        <div className='pagination-main'>
                            <ReactPaginate
                                className='page'
                                prevPageRel={"<<"}
                                nextLabel={"Next"}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={handleClickPage}

                                containerClassName="page-num"
                                pageLinkClassName="page-num"
                                previousLinkClassName="page-num"
                                nextLinkClassName="page-num"
                                activeLinkClassName="page-num-active"
                            />
                        </div>
                    </div>
                {/* </section> */}
            </section>

        </Helmet>
    )
}

export default Shop