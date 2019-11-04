import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../pageHeader/PageHeader';
import Footer from '../footer/Footer';

import styles from './Layout.module.css';

function Layout(props) {
  return(
    <Container className={styles.container}>
      <PageHeader />
      {props.children}
      <Footer />
    </Container>
  )
}

export default Layout;