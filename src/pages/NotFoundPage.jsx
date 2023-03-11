import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className='main-section center-horisontally'>
            <h2>404</h2>
            <p>Oops, something went wrong. 404 error</p>
            <Link to="/"><button>go home</button></Link>
        </section>
    )
}

export default NotFoundPage