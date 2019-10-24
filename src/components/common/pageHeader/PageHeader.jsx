import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarMenu from '../navBarMenu/NavBarMenu';

import Logo from '../../../assets/images/loicas_logo.png';

import styles from './PageHeader.module.css';

function PageHeader(props) {
  return(
    <Row className={styles.topBar + " align-items-center text-center"}>
      <Col xs="12" md="2">
        <Link to="/">
          <Image src={Logo} className={styles.topLogo} alt="LOGO LOICAS" fluid></Image>
        </Link>
      </Col>
      <Col xs="12" md="10">
        <NavBarMenu />
        <Row>
          <Col md="12" className="d-none d-md-flex">
            <small>Seleccion Chilena de Cricket Femenino</small>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PageHeader;