import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './Footer.module.css'
import RSbutton from './RSbutton';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      buttons:[
        {
          id:0,
          url:"https://www.facebook.com/lasloicas",
          title:"Facebook",
          iconClassname:"fa-facebook-square"
        },
        {
          id:1,
          url:"https://twitter.com/LasLoicasChile",
          title:"Twitter",
          iconClassname:"fa-twitter-square"
        },
        {
          id:2,
          url:"https://www.instagram.com/las_loicaschile",
          title:"Instagram",
          iconClassname:"fa-instagram"
        }]
    }
  }
  render(){
    return(
      <Row className={"justify-content-between align-items-center " + styles.bottomBar}>
        <Col xs={{span:8, offset:2}} md={{span:2, offset:0}}>
          <Row className="justify-content-around">
            {this.state.buttons.map((item) => {
              return(
                <RSbutton key={item.id} url={item.url} title={item.title} iconClassname={item.iconClassname}></RSbutton>
              )
            })}
          </Row>
        </Col>
        <Col xs="12" md="8" className="text-center text-md-right">
            Las Loicas Chile <i className="fa fa-copyright"></i>  2018
        </Col>
      </Row>
    )
  }
}

export default Footer;