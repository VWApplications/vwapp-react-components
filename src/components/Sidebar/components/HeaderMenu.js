import React from "react";
import { CustomHeaderMenu } from "../styles";

export const HeaderMenu = props => (
  <CustomHeaderMenu {...props}>
    <span>{props.children}</span>
  </CustomHeaderMenu>
);
