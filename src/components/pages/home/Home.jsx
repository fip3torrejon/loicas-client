import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import CardContent from '../../common/cardContent/CardContent.jsx';
import Portada from '../../common/portada/Portada.jsx';

import './Home.module.css';
import styles from './Home.module.css';

class Home extends Component {
  render(){
    return(
      <Row>
        <Col>
          <CardContent title="BIENVENIDA">
            <Portada />
          </CardContent>
          <CardContent title="DISFRUTA"></CardContent>
          <CardContent title="FOTO DE LA SEMANA">
            <Image src="https://www.lasloicascricket.cl/img/loicas_logo.png" fluid/>
          </CardContent>
        </Col>
        <Col>
          <CardContent title="TORNEOS"></CardContent>
          <CardContent>
            <Image src="https://www.lasloicascricket.cl/img/gif-jockey-chapita.gif" fluid />
          </CardContent>
          <CardContent title="REDES SOCIALES"></CardContent>
        </Col>
      </Row>
    );
  }
}

export default Home;
