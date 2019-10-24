import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../pageHeader/PageHeader';
import Footer from '../footer/Footer';

function Layout(props) {
  return(
    <Container>
      <PageHeader />
      {props.children}
      <Footer />
    </Container>
  )
}

export default Layout;