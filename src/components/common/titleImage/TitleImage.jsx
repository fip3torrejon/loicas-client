import React, { Component } from 'react';
import { Image, Col } from 'react-bootstrap';

import styles from './TitleImage.module.css';

function TitleImage(props){
  return(
    <Col className={styles.titleImage}>
      <Image key={props.id} src={props.src} alt={props.alt} fluid/>
    </Col>
  )
}

export default TitleImage;