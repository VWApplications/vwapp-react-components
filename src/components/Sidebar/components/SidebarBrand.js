import React from "react";
import { CustomBrand, BrandTitle, CloseSidebarButton } from "../styles";

export const SidebarBrand = props => (
  <CustomBrand id="sidebar-brand">
    <BrandTitle id="sidebar-brand-title">{props.title}</BrandTitle>
    <CloseSidebarButton id="sidebar-close-button" onClick={props.close}>
      <i className="fas fa-times"></i>
    </CloseSidebarButton>
  </CustomBrand>
);
