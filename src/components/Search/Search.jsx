import React, {useState} from 'react'
import InputSearch from './InputSearch'
import Results from './Results'

const Search = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="search__main">
            <div className="search__box">
                <InputSearch setResults={setResults}/>
            </div>
                
            <Results results={results}/>
        </div>
    )
}

export default Search