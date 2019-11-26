import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import styles from './RSbutton.module.css'

function RSbutton(props) {
  return(
    <Col xs={4} className={"text-center " + styles.rsButton}>
      <a className={styles.rsButtonLink} href={props.url} target="_blank" rel="noopener noreferrer" title={props.title}>
        <i className={"fa " + props.iconClassname + " " + styles.rsButtonIcon}></i>
      </a>
    </Col>
    
  ) 
}

export default RSbutton;