import React from 'react'
import FrontBook from '../../static/books/the.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>


                        <div className="content-wraps">

                            <span className="italic-tag">Read, and learn in various formats</span>

                            <h1>Featured Book</h1>

                            <p>
                            The kingdoms of the world will become the kingdoms of our living and true God through those who live, move, and have their being in his destiny and plan for their lives.
                            The Holy Exchange is available in eBook, paperback
                            and hardback versions.
                            </p>

                            <Accordions/>
                        </div>

               
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook