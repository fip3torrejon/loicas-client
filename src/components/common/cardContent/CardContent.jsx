import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CardTitle from './CardTitle.jsx';

class CardContent extends Component {
  render(){
    return(
      <Row>
        <Col>
          <CardTitle title={this.props.title} />
          {/* CardBody*/}
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default CardContent;
