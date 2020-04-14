import React, { Fragment } from 'react';
import { FlexContainer, FlexItem as Box, Line, BreakLine } from 'vwapp-react-components';
import styled from 'styled-components';

const FlexItem = styled(Box)`
  background-color: green;
  margin: 10px;
  width: 30px;
  height: 30px;
`

export default () => (
  <Fragment>
    <FlexContainer row justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem />
      <FlexItem />
    </FlexContainer>
    <Line />
    <FlexContainer row wrap justify="center" align="start" className="bg-dark" style={{height: "200px"}}>
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
      <FlexItem /><FlexItem /><FlexItem /><FlexItem /><FlexItem />
    </FlexContainer>
    <BreakLine />
  </Fragment>
);
