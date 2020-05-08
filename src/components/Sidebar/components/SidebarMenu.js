import React from "react";
import { CustomSidebarMenu, SidebarList } from "../styles";

export const SidebarMenu = props => (
  <CustomSidebarMenu {...props}>
    <SidebarList>{props.children}</SidebarList>
  </CustomSidebarMenu>
);
