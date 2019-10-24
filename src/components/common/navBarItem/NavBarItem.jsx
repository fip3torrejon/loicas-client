import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBarItem.module.css';
import './NavBarItem.module.css';


function NavBarItem(props) {
  return(
    <Nav.Item as="li" className={styles.navItem}>
      <Nav.Link
        className={styles.navLink}
        as={Link} 
        eventKey={props.eventKey} 
        to={props.to}>
        {props.title}
      </Nav.Link>
    </Nav.Item>
  )
}

export default NavBarItem;