import React, { Component } from 'react';

class GaleriaCategoria extends Component {
  
  render(){
    return(<h1>{this.props.match.params.categoria}</h1>)
  }
}

export default GaleriaCategoria;