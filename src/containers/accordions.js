import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse
const { Option } = Select



const text = `
  The wealth of the world is far more than fame and fortune.
  It involves every aspect of life; faith, family, sports,
  entertainment and the arts, media, education, medicine,
  government and law, beauty and values, financial and
  banking systems, business and economics, invention,
  imagination, the way we speak, the way we think, the way
  we do relationship until there is nothing left untouched.
`;



class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

   iconChanger = ()=>{
    
    console.log('clicks')

   }


   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
}

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/i-am-amidst-you-now-god-the-father-healing-my-truth/',
                          barnes: 'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952906',
                          amazon :'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing-ebook/dp/B08Q67G9H1/ref=sr_1_1?dchild=1&keywords=9781648952906&qid=1607972199&sr=8-1', 
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
            header="Purschase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                              amazon:'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing/dp/1648952895/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1607972430&sr=8-1',
                              barnes:'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952890',
                              booksamillion:'https://www.booksamillion.com/p/Holy-Exchange/Penny-McCoy/9781648952890?id=8505380266050',
                          }
                      }}
                  />
            </div>
          </Panel>

          <Panel 
            header="Hardcover" 
            key="4"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            hardcover:{
                              amazon:'https://www.amazon.com/Holy-Exchange-transferred-righteous-healing/dp/1648952917/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1607972430&sr=8-1',
                              barnes:'https://www.barnesandnoble.com/w/the-holy-exchange-penny-mccoy/1138446334?ean=9781648952913',
                              booksamillion:'https://www.booksamillion.com/p/Holy-Exchange/Penny-McCoy/9781648952913?id=8505380266050',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions