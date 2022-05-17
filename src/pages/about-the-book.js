import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book_01.png'
import SecondBook from '../../static/books/book_02.png'
import ThirdBook from '../../static/books/the.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'penny-mccoy-2',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Helmet title='About the Books | Penny McCoy' />
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
                                    title:`I AM AMIDST YOU NOW`,
                                    spanFirst: `God the Father, Healing My Truth`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `<p>This book is a compilation of messages, illustrations, and script from the heart of God as our Father to our hearts as His children. 
                                    This is the day God’s voice is going to be heard above the voice of evil. This book salutes the truth that God is not dead but alive with ears that hear, eyes that see, and power and authority to heal, deliver, and make nations tremble. The intent of I Am Amidst You Now is to be a launching pad to destiny and freedom.</p> `,

                                    ebooks:{
                                        barnes:  'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643451688',
                                        amazon : 'https://www.amazon.com/Am-Amidst-You-Now-Healing-ebook/dp/B07HMK5PBM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Am-Amidst-You-Now-Healing/dp/1643450158/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643450155',
                                        booksamillion:'https://www.booksamillion.com/p/Am-Amidst-Now/Penny-McCoy/9781643450155?id=7714171848832#',
                                    },
                                    hardcover:{}
                                }} 
                            />


                            <BookInfo
                                data={{
                                    title:`The Ultimate Victory`,
                                    spanFirst: `Fulfilling Destiny Through Freedom Healing and Wholeness`,
                                    imgSrc: SecondBook,
                                    id:'the_gifted_one',
                                    content:
                                    `<p>
                                        I desire to use the living examples of my life to bring the revelation
                                        that freedom from any kind of bondage, abuse, or imprisonment of your 
                                        heart, mind, soul, emotions, and natural physical being and life is 
                                        possible. You can be free from the worst kind of sorrow, disorder, 
                                        or hopelessness. It is an absolute that you can become who you are 
                                        created to be and accomplish and do what you are designed to do. 
                                        You can be free to be your God-breathed destiny! You and I are no different!
                                    </p>
                                    <p>

                                        Penny McCoy went from being a world champion Alpine ski racer 
                                        at the age of sixteen to experiencing heartbreak in the following
                                        Olympics. This heartbreak affected every area of her life, 
                                        causing many wrong choices that stemmed from an identity of 
                                        brokenness. Penny is currently a vibrant vessel fulfilling her 
                                        God-given destiny by sharing God the Father's heart of life, 
                                        freedom, healing, goodness, hope, faithfulness, unfailing love, 
                                        release, and destiny through several avenues.
                                    </p>
                                    `,

                                    ebooks:{
                                        barnes: 'https://www.barnesandnoble.com/w/the-ultimate-victory-penny-mccoy/1134150168?ean=9781643457680',
                                        amazon :'https://www.amazon.com/Ultimate-Victory-Fulfilling-Destiny-Wholeness-ebook/dp/B07Z8H31ZJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1597445470&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Ultimate-Victory-Fulfilling-Destiny-Wholeness/dp/1643457683/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597445470&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-ultimate-victory-penny-mccoy/1134150168?ean=9781643457680',
                                        booksamillion:'https://www.barnesandnoble.com/w/the-ultimate-victory-penny-mccoy/1134150168?ean=9781643457697',
                                    },
                                    hardcover:{}
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`The Holy Exchange`,
                                    spanFirst: `The Wealth of the world transferred to the righteous; for the healing of the peoples and the nations`,
                                    imgSrc: ThirdBook,
                                    id:'the_holy_exchange',
                                    content:
                                    `<p>
                                        The wealth of the world is far more than fame and fortune. It involves every aspect of life; faith, family, sports, entertainment and the arts, media, education, medicine, government and law, beauty and values, financial and banking systems, business and economics, invention, imagination, the way we speak, the way we think, the way we do relationship until there is nothing left untouched. Wherever the wicked rule; God is going to transfer that into the hands of his humble remnant people and overcoming children who love and serve him with a pure heart. The kingdoms of the world will become the kingdoms of our living and true God through those who live, move, and have their being in his destiny and plan for their lives.
                                    </p>
                                    `,

                                    ebooks:{
                                        barnes: 'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952906',
                                        amazon :'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing-ebook/dp/B08Q67G9H1/ref=sr_1_1?dchild=1&keywords=9781648952906&qid=1607972199&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing/dp/1648952895/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1607972430&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952890',
                                        booksamillion:'https://www.booksamillion.com/p/Holy-Exchange/Penny-McCoy/9781648952890?id=8505380266050',
                                    },
                                    hardcover:{
                                        amazon:'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing/dp/1648952917/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1607972430&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952913',
                                        booksamillion:'https://www.booksamillion.com/p/Holy-Exchange/Penny-McCoy/9781648952913?id=8505380266050',
                                    }
                                }} 
                            />

                            <div className="commentSection">
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