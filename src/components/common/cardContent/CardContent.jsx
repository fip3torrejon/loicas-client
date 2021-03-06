import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CardTitle from './CardTitle.jsx';

import styles from './CardContent.module.css';

class CardContent extends Component {
  render(){
    return(
      <Row className={styles.cardContent + " " + (this.props.position === "topCard" ? styles.topCard : "" + " " + (this.props.banner ? styles.banner : ""))}>
        <Col xs={12} md={this.props.right ? {} : {span: 10, offset: 1}}>
          <CardTitle title={this.props.title} position={this.props.position === "topCard" ? "0" : this.props.position % 2}/>
          <Row>
            <Col className={(this.props.weekImg ? styles.weekImg : "") + " " + (this.props.social ? styles.social : "")}>
              {/* CardBody --> */ this.props.children}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CardContent;
