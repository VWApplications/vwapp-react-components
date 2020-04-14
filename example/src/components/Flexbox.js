import React, { Fragment } from 'react';
import { FlexContainer, FlexItem as Box, Line, BreakLine } from 'vwapp-react-components';
import styled from 'styled-components';

const FlexItem = styled(Box)`
  background-color: green;
  text-align: center;
  margin: 10px;
  padding: 5px;
`

export default () => (
  <Fragment>
    <FlexContainer reverse direction="row" justify="space-around" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem>
      <FlexItem>02</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer wrap direction="col" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem><FlexItem>02</FlexItem><FlexItem>03</FlexItem><FlexItem>04</FlexItem><FlexItem>05</FlexItem>
      <FlexItem>06</FlexItem><FlexItem>07</FlexItem><FlexItem>08</FlexItem><FlexItem>09</FlexItem><FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem><FlexItem>12</FlexItem><FlexItem>13</FlexItem><FlexItem>14</FlexItem><FlexItem>15</FlexItem>
      <FlexItem>16</FlexItem><FlexItem>17</FlexItem><FlexItem>18</FlexItem><FlexItem>19</FlexItem><FlexItem>20</FlexItem>
      <FlexItem>21</FlexItem><FlexItem>22</FlexItem><FlexItem>23</FlexItem><FlexItem>24</FlexItem><FlexItem>25</FlexItem>
      <FlexItem>26</FlexItem><FlexItem>27</FlexItem><FlexItem>28</FlexItem><FlexItem>29</FlexItem><FlexItem>30</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer direction="row" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem order="3" length="100px">01</FlexItem>
      <FlexItem order="2" grow align="center">02</FlexItem>
      <FlexItem order="0" grow>03</FlexItem>
      <FlexItem order="1" length="100px">04</FlexItem>
      <FlexItem order="4" grow>05</FlexItem>
    </FlexContainer>
    <BreakLine />
  </Fragment>
);
