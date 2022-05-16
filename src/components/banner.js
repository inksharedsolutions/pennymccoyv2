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
                                <span className="first-title">The</span>
                                <h1>
                                    <span>H</span>
                                    <span>O</span>
                                    <span>L</span>
                                    <span>Y</span>
                                </h1>
                                <p>Exchange</p>
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