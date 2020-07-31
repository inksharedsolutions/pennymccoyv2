import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img_v1.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} />
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off">Well done, good and faithful servant</p>
                        <h1>    
                            The Author
                        </h1>

                        <p>
                             Larry Ellerbee is a chairman of the finance committee,
                             who teaches the truth about God’s Word.
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            Larry Ellerbee
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 