import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Utilities } from 'vwapp-react-components';
import Flexbox from './components/Flexbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.utils();
  }

  async utils() {
    const ok = await Utilities.alert("success", "Seja bem vindo!", "Ambiente de desenvolvimento");
    console.log(ok);
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">Ambiente de desenvolvimento.</h1>
        <hr />
        <Flexbox />
      </Container>
    )
  }
}

export default App;
