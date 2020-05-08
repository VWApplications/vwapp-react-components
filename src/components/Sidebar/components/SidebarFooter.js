import React from "react";
import { CustomSidebarFooter } from "../styles";

export const SidebarFooter = props => (
  <CustomSidebarFooter {...props}>
    {props.children}
  </CustomSidebarFooter>
);
