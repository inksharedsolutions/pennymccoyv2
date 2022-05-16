import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
// import LowerMain from "../components/lower-main"
import MidBook from "../components/front-book"
import ParallaxBottom from "../components/parallax-bottom"
import BookTrailer from "../components/trailer"
import Artworks  from "../components/artwork"
import { Helmet } from "react-helmet"

const IndexPage = (props) => (
  <Layout>
      <Helmet title="Home | Penny McCoy" />
      <Nav pathExt={props.path}/>
      <Banner/> 
      <MidBook/>
      <BookTrailer/>
      <Artworks/>
      <ParallaxBottom/>
  </Layout>
)

export default IndexPage