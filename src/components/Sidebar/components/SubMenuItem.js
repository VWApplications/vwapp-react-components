import React from "react";
import { CustomSubMenuItem, SubMenuLink, SubMenuBadge } from "../styles";

export const SubMenuItem = props => (
  <CustomSubMenuItem>
    <SubMenuLink onClick={props.onClick}>
      {props.title}
      {props.badge && <SubMenuBadge className={`badge badge-pill badge-${props.badgeVariant}`}>{props.badge}</SubMenuBadge>}
    </SubMenuLink>
  </CustomSubMenuItem>
);
