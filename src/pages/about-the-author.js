import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.jpg'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    In order for your faith to work, you have to walk in Love. 
                                    IF YOU FOLLOW THESE 10 GUIDELINES, you’ll 
                                    receive more answers to your prayers, receive more
                                    money, receive your healing, receive more love,
                                    receive more power, receive more faith, and receive more
                                    of everything God wants you to have.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                I was raised by my parents Dave and Roma McCoy. 
                                I grew up and worked with our family business, 
                                in the Mammoth Mountain Ski Area in a pioneering atmosphere
                                that innately knows that champions are born as well as nurtured.
                            </p>

                            <p>
                                My genetic make-up predisposed me to greatness pouring into
                                every cell of my being a revelation that a visionary’s 
                                unfailing heart must identify with struggle and fully 
                                grasp the reality of tireless work when the crowds aren’t 
                                cheering, banners aren’t waving and when the winds of 
                                misunderstanding and mockery blew upon the sails of my 
                                destiny.
                            </p>

                            <p>
                                I was a world champion skier at the age of sixteen. 
                                Life soon became a puzzle framed within the throes 
                                of stardom as well as cast in the mud. I won and lost, 
                                failed and succeeded, been on top in world championship 
                                exaltation and plummeted to the depths of political Olympic 
                                embarrassment, humility, despair and confusion. I have been
                                a star and a princess only to become and ugly duckling. 
                                I have tasted the joy of victory and the bitterness of defeat 
                                through all the shame, guilt and brokenness of life. The amazing
                                thing is all this led to opportunity for victory, freedom, 
                                healing and purpose. It was up to me to choose. It is my desire 
                                to use this label as an opportunity to fuel each and every one 
                                of you with the hope of this same sort of opportunity.
                            </p>

                            <p>
                                I am currently honored to be a part of Stratton Press 
                                as a lifetime legacy author. I find myself as any other 
                                person with moment-by-moment choices. I don’t have any 
                                earthly acclaim as an author; but, one thing I do have 
                                is the understanding that Stratton Press is an incredible 
                                team with a heart for my vision. I am grateful.
                            </p>
                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Penny Mccoy</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;