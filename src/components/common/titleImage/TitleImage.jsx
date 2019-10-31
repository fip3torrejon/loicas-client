import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

function TitleImage(props){
  return(
    <Image key={props.id} src={props.src} alt={props.alt} fluid/>
  )
}

export default TitleImage;