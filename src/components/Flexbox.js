import React from 'react';
import styled from 'styled-components';
import { toBoolean } from '../utilities/utils';

const CustomFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => {
    switch (props.direction) {
      case 'row':
        if (toBoolean(props.reverse)) return 'row-reverse';
        return 'row';
      case 'col':
        if (toBoolean(props.reverse)) return 'column-reverse';
        return 'column';
      default:
        return 'initial';
    }
  }};
  flex-wrap: ${props => {
    if (toBoolean(props.wrap)) {
      if (toBoolean(props.reverse)) {
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
  ${props => toBoolean(props.wrap) ? 'align-content' : 'align-items'}: ${props => {
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
        if (toBoolean(props.wrap)) return 'initial';
        return 'baseline';
      case 'space-between':
        if (!toBoolean(props.wrap)) return 'initial';
        return 'space-between';
      case 'space-around':
        if (!toBoolean(props.wrap)) return 'initial';
        return 'space-around';
      default:
        return 'initial';
    }
  }};
`;

export const FlexContainer = props => {
  const attributes = { ...props };
  attributes.wrap = attributes.wrap ? 'true' : 'false';
  attributes.reverse = attributes.reverse ? 'true' : 'false';
  return <CustomFlexContainer {...attributes}>{props.children}</CustomFlexContainer>
}

const CustomFlexItem = styled.div`
  flex-grow: ${props => toBoolean(props.grow) ? '1' : '0'};
  flex-shrink: ${props => toBoolean(props.shrink) ? '0' : '1'};
  ${props => props.order !== undefined ? 'order' : null}: ${props => props.order};
  ${props => props.length !== undefined ? 'flex-basis' : null}: ${props => props.length};
  ${props => props.align !== undefined ? 'align-self' : null}: ${props => {
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
        return 'baseline';
      default:
        return 'initial';
    }
  }}
`;

export const FlexItem = props => {
  const attributes = { ...props };
  attributes.grow = attributes.grow ? 'true' : 'false';
  attributes.shrink = attributes.shrink ? 'true' : 'false';
  return <CustomFlexItem {...attributes}>{props.children}</CustomFlexItem>
}
