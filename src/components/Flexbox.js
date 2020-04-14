import React from 'react';
import styled from 'styled-components';

const CustomFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => {
    switch (props.direction) {
      case 'row':
        if (props.reverse) return 'row-reverse';
        return 'row';
      case 'col':
        if (props.reverse) return 'column-reverse';
        return 'column';
      default:
        return 'row';
    }
  }};
  flex-wrap: ${props => {
    if (props.wrap) {
      if (props.reverse) {
        return 'wrap-reverse';
      } else {
        return 'wrap';
      }
    }
    return 'nowrap';
  }};
  justify-content: ${props => {
    switch (props.justify) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'space-around':
        return 'space-around';
      case 'space-between':
        return 'space-between';
      default:
        return 'initial';
    }
  }};
  ${props => props.wrap ? 'align-content' : 'align-items'}: ${props => {
    switch (props.align) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'stretch':
        return 'stretch';
      case 'baseline':
        if (props.wrap) return 'initial';
        return 'baseline';
      case 'space-between':
        if (!props.wrap) return 'initial';
        return 'space-between';
      case 'space-around':
        if (!props.wrap) return 'initial';
        return 'space-around';
      default:
        return 'initial';
    }
  }};
`;

export const FlexContainer = props => {
  return <CustomFlexContainer {...props}>{props.children}</CustomFlexContainer>
}

const CustomFlexItem = styled.div``;

export const FlexItem = props => {
  return <CustomFlexItem {...props}>{props.children}</CustomFlexItem>
}
