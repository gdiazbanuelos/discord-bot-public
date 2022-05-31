import React from 'react'
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <div>
            <p>Docs.js</p>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Docs;