import React from "react";
import { SlideDown } from "./SlideDown";
import {
  CustomSubMenuContainer, CustomSidebarDropdown, CustomDropdownItem,
  DropdownIcon, DropdownBadge
} from "../styles";

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
            <DropdownIcon className={icon}></DropdownIcon>
            <span>{title}</span>
            {badge && <DropdownBadge className={`badge badge-pill badge-${badgeVariant}`}>{badge}</DropdownBadge>}
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
