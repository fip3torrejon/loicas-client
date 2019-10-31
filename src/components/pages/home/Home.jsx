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
      <Row>
        <Col xs={12} md={8}>
          <CardContent title="BIENVENIDO A NUESTRA WEB" topCard>
            <Portada />
          </CardContent>
          <CardContent title="DISFRUTA DEL FAN CLUB DE LAS LOICAS"></CardContent>
          <CardContent title="FOTOGRAFIA DE LA SEMANA">
            <Image src="https://www.lasloicascricket.cl/img/lima_portada.jpg" fluid/>
          </CardContent>
        </Col>
        <Col xs={12} md={4}>
          <CardContent title="FELICITACIONES" topCard>
            <Image src="https://www.lasloicascricket.cl/img/sac_peru.png" fluid />
            <span>TERCER LUGAR</span>
          </CardContent>
          <CardContent>
            <Image src="https://www.lasloicascricket.cl/img/gif-jockey-chapita.gif" fluid />
          </CardContent>
          <CardContent title="REDES SOCIALES">
          <TwitterTimelineEmbed sourceType="profile" screenName="lasloicaschile" options={{height:400}}></TwitterTimelineEmbed>
          </CardContent>
        </Col>
      </Row>
    );
  }
}

export default Home;
