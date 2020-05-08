import React from "react";
import { CustomBrand, BrandTitle, CloseSidebarButton } from "../styles";

export const SidebarBrand = props => (
  <CustomBrand>
    <BrandTitle>{props.title}</BrandTitle>
    <CloseSidebarButton onClick={props.close}>
      <i className="fas fa-times"></i>
    </CloseSidebarButton>
  </CustomBrand>
);
