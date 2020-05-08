import React from "react";
import { CustomSidebarButton } from "../styles";

export const SidebarButton = props => (
  <CustomSidebarButton className="btn btn-sm btn-dark" onClick={props.onClick} hidden={props.hidden}>
    <i className="fas fa-bars text-light"></i>
  </CustomSidebarButton>
);
