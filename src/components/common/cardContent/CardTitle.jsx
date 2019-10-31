import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

function CardTitle(props) {
  return(
    <Row>
      <Col>{props.title}</Col>
    </Row>
  );
}

export default CardTitle;