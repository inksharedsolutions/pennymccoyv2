import React from 'react'
import FrontBook from '../../static/books/book_01.png'
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

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>Featured Book</h1>

                            <p>
                                Let the word of God indulge your mind, spirit, soul and senses.
                                Listen, read and feel His love, kindness and faithfulness.
                                I Am Amidst You Now is available in audiobook, eBook,
                                paperback and hardback versions.
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