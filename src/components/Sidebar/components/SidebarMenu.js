import React from "react";
import { CustomSidebarMenu, SidebarList } from "../styles";

export const SidebarMenu = props => (
  <CustomSidebarMenu {...props}>
    <SidebarList id="sidebar-menu-list">{props.children}</SidebarList>
  </CustomSidebarMenu>
);
