import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import CardContent from '../../common/cardContent/CardContent.jsx';
import Portada from '../../common/portada/Portada.jsx';

import './Home.module.css';
import styles from './Home.module.css';

class Home extends Component {
  render(){
    return(
      <Row className={styles.home}>
        <Col xs={12} md={8}>
          <CardContent title="BIENVENIDO A NUESTRA WEB" position="topCard">
            <Portada />
          </CardContent>
          <CardContent title="DISFRUTA DEL FANCLUB DE LAS LOICAS" position="1"></CardContent>
          <CardContent weekImg title="FOTOGRAFIA DE LA SEMANA" position="2">
            <Image src="https://www.lasloicascricket.cl/img/lima_portada.jpg" fluid />
          </CardContent>
        </Col>
        <Col xs={12} md={4}>
          <CardContent title="FELICITACIONES" position="topCard">
            <Image src="https://www.lasloicascricket.cl/img/sac_peru.png" fluid />
            <span>TERCER LUGAR</span>
          </CardContent>
          <CardContent position="1">
            <Image src="https://www.lasloicascricket.cl/img/gif-jockey-chapita.gif" fluid/>
          </CardContent>
          <CardContent title="REDES SOCIALES" position="2">
          <TwitterTimelineEmbed sourceType="profile" screenName="lasloicaschile" options={{height:400}}></TwitterTimelineEmbed>
          </CardContent>
        </Col>
      </Row>
    );
  }
}

export default Home;
