import React from "react";
import { CustomSidebarMenu } from "../styles";

export const SidebarMenu = props => (
  <CustomSidebarMenu {...props}>
    <ul>{props.children}</ul>
  </CustomSidebarMenu>
);
