import React from "react";
import { CustomSidebarButton } from "../styles";

export const SidebarButton = props => (
  <CustomSidebarButton className={props.className} onClick={props.onClick} hidden={props.hidden}>
    <i className={`fas fa-bars ${props.whiteIcon ? "text-light" : ""}`}></i>
  </CustomSidebarButton>
);
