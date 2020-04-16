import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Utilities } from 'vwapp-react-components';
import Flexbox from './components/Flexbox';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.utils();
  // }

  async utils() {
    const ok = await Utilities.alert("success", ["Olaaa", "Mundo!"]);
    console.log(ok);
  }

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
