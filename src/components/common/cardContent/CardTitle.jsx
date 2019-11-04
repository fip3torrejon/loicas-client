import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

import styles from './CardTitle.module.css';

function CardTitle(props) {
  let styleByPosition;
  if(props.position === "0" ){
    styleByPosition = styles.cardTitleTop;
  } else if (props.position % 2 === 0) {
    styleByPosition = styles.cardTitleEven + " text-center";
  } else {
    styleByPosition = styles.cardTitleOdd + " text-center";
  }
  return(
    <Row>
      <Col className={styles.cardTitle + " " + styleByPosition }>{props.title}</Col>
    </Row>
  );
}

export default CardTitle;