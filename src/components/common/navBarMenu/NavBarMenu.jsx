import React, { Component } from 'react';
import { Row, Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarItem from '../navBarItem/NavBarItem';
import './NavBarMenu.module.css';
import styles from "./NavBarMenu.module.css";

class NavBarMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuData : [
        {key:0, eventKey:"inicio", to:"/", title:"Inicio"},
        {key:1, eventKey:"historia", to:"/historia", title:"Historia"},
        {key:2, eventKey:"noticias", to:"/noticias", title:"Noticias"},
        {key:3, eventKey:"galeria", to:"/galeria", title:"Galeria"}
      ]
    }
  }

  render(){
    return(
      <Row className="align-items-center justify-content-center justify-content-md-left">
        <Navbar className="text-center" expand="md">
          <Navbar.Brand as={Col} className={styles.navbarBrand}>
            <Navbar.Toggle className={styles.navbarToggler +  " " + styles.collapsed} aria-controls="menuItems" data-toggle="collapse" data-target="#menuItems" aria-expanded="false" aria-label="Despliega barra de menu"/>
            Las Loicas Cricket Chile
          </Navbar.Brand>
          <Navbar.Collapse id="menuItems">
            <Nav as="ul" className={styles.navbarNav} defaultActiveKey="inicio">
              {this.state.menuData.map((item) => {
                return(
                  <NavBarItem 
                    eventKey={item.eventKey} 
                    to={item.to} 
                    title={item.title} 
                  />
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>     
      </Row>
    )
  }
}

export default NavBarMenu;