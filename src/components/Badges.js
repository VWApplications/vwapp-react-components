import React from 'react';
import style from '../constants';

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;
    this.className = props.className;
    this.type = props.type;
    this.rounded = props.rounded ? 'badge-pill' : '';

    this.styles = ['badge'];
    if (this.type) this.styles.push(`badge-${this.type}`);
    if (this.rounded) this.styles.push(this.rounded);
    if (this.className) this.styles.push(this.className);

    delete this.attributes.type;
    delete this.attributes.rounded;
  }

  render() {
    return (
      <span {...this.attributes} className={style([...this.styles])}>
        {this.childrens}
      </span>
    )
  }
}
