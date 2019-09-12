import React, { Component } from 'react';

class GaleriaCategoria extends Component {
  
  render(){
    return(<div>{this.props.match.params.categoria}</div>)
  }
}

export default GaleriaCategoria;