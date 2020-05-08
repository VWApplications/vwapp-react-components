import React from "react";
import { SlideDown } from "./SlideDown";
import { CustomSubMenuContainer, CustomSidebarDropdown, CustomDropdownItem } from "../styles";

export class DropdownMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const { title, icon, children, badge = "", badgeVariant = null } = this.props;

    return (
      <CustomSidebarDropdown className={this.state.open ? "" : "closed"}>
        <CustomDropdownItem onClick={() => this.setState({open: !this.state.open})}>
            <i className={icon}></i>
            <span>{title}</span>
            {badge && <span className={`badge badge-pill badge-${badgeVariant}`}>{badge}</span>}
        </CustomDropdownItem>
        <SlideDown as="div" open={this.state.open}>
          <CustomSubMenuContainer>
            {children}
          </CustomSubMenuContainer>
        </SlideDown>
      </CustomSidebarDropdown>
    );
  }
}
