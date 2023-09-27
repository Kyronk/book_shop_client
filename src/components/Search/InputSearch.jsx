import React, { useState } from 'react'
import axios from 'axios';

import { HOSTNAME } from '../../api/api';
import "./Search.css";

const InputSearch = ({setResults}) => {

    const [search, setSearch] = useState("");

    const fetchData = async () => {
        const response = await axios.get(`${HOSTNAME}/api/v2/book/listbook?limit=10&name=${search}`);
        const searchList = response.data.data.list.rows;
        // console.log(searchList);

        if(search.length === 0 || search.length < 3) {
            return setResults([]);
        }
        setResults(searchList);
        // if( search.length > 3 ) {
        //     setResults(searchList);
        // };
    }

    const handleChange = (value) => {
        setSearch(value);
        fetchData();
    }

    return (
        <>
            <input 
                type="text"
                placeholder='Search ...'
                onChange={(e) => handleChange(e.target.value)}
                />
            <span><i className="ri-search-line"></i></span>
        </>
    )
}

export default InputSearch