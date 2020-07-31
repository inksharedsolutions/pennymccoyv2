import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/mountain_v2.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <span className="first-title">I am</span>
                                <h1>
                                    <span>A</span>
                                    <span>m</span>
                                    <span>i</span>
                                    <span>d</span>
                                    <span>s</span>
                                    <span>t</span>
                                </h1>
                                <p>You Now</p>
                            </div>
                            <img src={ImgBanner}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;