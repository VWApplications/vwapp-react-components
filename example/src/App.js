import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Flexbox from './components/Flexbox';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Página voltada para testes.</h1>
        <hr />
        <Flexbox />
      </Container>
    )
  }
}

export default App;
