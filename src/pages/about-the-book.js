import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book_01.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'penny-mccoy-2',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`I AM AMIDST YOU KNOW`,
                                    spanFirst: `God the father healing my truth`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `This book is a compilation of prophetic words, illustrations, and script from the heart of God as our Father to our hearts as His children. 
                                    This is the day God’s voice is going to be heard above the voice of evil. This book salutes the truth that God is not dead but alive with ears that hear, eyes that see, and power and authority to heal, deliver, and make nations tremble. The intent of I Am Amidst You Now is to be a launching pad to destiny and freedom. `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/i-am-amidst-you-now-god-the-father-healing-my-truth/',
                                        barnes: 'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643451688',
                                        amazon :'https://www.amazon.com/Am-Amidst-You-Now-Healing-ebook/dp/B07HMK5PBM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Am-Amidst-You-Now-Healing/dp/1643450158/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643450155',
                                        booksamillion:'https://www.booksamillion.com/p/Guidelines-How-Receive-from-God/Ellerbee-Larry/9781643455891?id=7714171848832',
                                    }
                                }}

                                 
                                
                            />

                            <div className="commentSection" >
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;