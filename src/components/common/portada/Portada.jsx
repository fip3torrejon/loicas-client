import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import TitleImage from '../titleImage/TitleImage.jsx';

class Portada extends Component {

  constructor(props){
    super(props);
    this.state={
      large:[
        {id:0, url:"https://www.lasloicascricket.cl/img/title-1-thb-2019.jpg", alt:"foto de la izquierda"},
        {id:1, url:"https://www.lasloicascricket.cl/img/title-4-thb-2019.jpg", alt:"foto del centro"},
        {id:2, url:"https://www.lasloicascricket.cl/img/title-2-thb-2019.jpg", alt:"foto de la derecha"}
      ],

      small:{id:3, url:"https://www.lasloicascricket.cl/img/2019.jpg", alt:"foto portada"}
    }
  }
  render(){
    return(
      <Row>
        <Col className="d-sm-none">
          {
            <TitleImage src={this.state.small.url} alt={this.state.small.alt} />
          }
        </Col>
        <Col className="d-none d-sm-flex">
          {
            this.state.large.map((imagen) => {
              return(
                <TitleImage key={imagen.id} src={imagen.url} alt={imagen.alt} />
              )
            })
          }
        </Col>
      </Row>
    )
  }
}

export default Portada;