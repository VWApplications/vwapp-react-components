import React from "react";
import { CustomHeaderMenu } from "../styles";

export const HeaderMenu = props => (
  <li {...props} className="sidebar-menu-header">
    <CustomHeaderMenu>{props.children}</CustomHeaderMenu>
  </li>
);
