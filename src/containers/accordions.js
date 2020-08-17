import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse
const { Option } = Select



const text = `
  This book is a compilation of prophetic words,
  illustrations, and script from the heart of God 
  as our Father to our hearts as His children.
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
                          barnes: 'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643451688',
                          amazon :'https://www.amazon.com/Am-Amidst-You-Now-Healing-ebook/dp/B07HMK5PBM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1', 
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
                              amazon:'https://www.amazon.com/Am-Amidst-You-Now-Healing/dp/1643450158/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554338377&sr=1-1',
                              barnes:'https://www.barnesandnoble.com/w/i-am-amidst-you-now-penny-mccoy/1129621956?ean=9781643450155',
                              booksamillion:'https://www.booksamillion.com/p/Am-Amidst-Now/Penny-McCoy/9781643450155?id=7714171848832',
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