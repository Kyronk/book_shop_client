import React from 'react'
import { Link } from 'react-router-dom'

const Results = ({results}) => {
    return (
        <div className='results'>
            <div className="search-results-container">
                <div className="search-results-content">
                    {
                        results.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to={`/product-item/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Results