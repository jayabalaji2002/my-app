import React from 'react'
import '../SASS/Newsletter.scss'
function Newsletter() {
    return (
        <div className='maindiv'>
            <div className='content'>
                <div className='row'>
                    <h6 className='rowh6'>
                        Newsletter
                    </h6>
                    <h3 className='rowh3'>
                        Most Popular Courses
                    </h3>
                    <p className='rowp'>
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </div>
            <div className='email'>
                <div className='form-control'>
                    <p>Your Email</p>
                </div>
                <div className=''>
                <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter