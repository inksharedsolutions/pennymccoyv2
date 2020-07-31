import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>
                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>
                        
                        <span>{props.data.spanTitle}</span>

                        <p className="content-body">
                            {props.data.content}
                        </p>
                    </section>


                    <BookLink
                        data={{
                            ebooks:{
                                stratton : 'https://www.stratton-press.com/books/10-guidelines-on-how-to-receive-from-god/',
                                barnes: 'https://www.barnesandnoble.com/w/10-guidelines-on-how-to-receive-from-god-ellerbee-larry/1136258963?ean=9781643457871',
                                amazon :'https://www.amazon.com/10-Guidelines-How-Receive-God-ebook/dp/B084686XMJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/10-Guidelines-How-Receive-God/dp/1643455893/',
                                barnes:'https://www.barnesandnoble.com/w/10-guidelines-on-how-to-receive-from-god-ellerbee-larry/1136258963?ean=9781643455891',
                                booksamillion:'https://www.booksamillion.com/p/Guidelines-How-Receive-from-God/Ellerbee-Larry/9781643455891?id=7714171848832',
                            },
                            
                            reviews:{},

                            isNonfront:true,
                        }}
                    />

                
                </div>	
            </div>
        </>
    )
} 

export default BookInfo;