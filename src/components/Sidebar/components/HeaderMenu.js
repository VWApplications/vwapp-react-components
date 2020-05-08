import React from "react";
import { CustomHeaderMenu } from "../styles";

export const HeaderMenu = props => (
  <li {...props}>
    <CustomHeaderMenu>{props.children}</CustomHeaderMenu>
  </li>
);
