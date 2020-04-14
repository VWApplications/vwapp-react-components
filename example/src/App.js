import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import MyPagination from './components/Pagination';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Página voltada para testes.</h1>
        <hr />
        <MyPagination />
      </Container>
    )
  }
}

export default App;
