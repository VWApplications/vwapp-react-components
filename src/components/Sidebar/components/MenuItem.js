import React from "react";
import { CustomMenuItem, CustomMenuLink, MenuItemBadge, MenuItemIcon } from "../styles";

export const MenuItem = props => (
  <CustomMenuItem className="sidebar-menu">
    <CustomMenuLink onClick={props.onClick}>
      {props.icon && <MenuItemIcon className={props.icon}></MenuItemIcon>}
      {props.title}
      {props.badge && <MenuItemBadge className={`badge badge-pill badge-${props.badgeVariant}`}>{props.badge}</MenuItemBadge>}
    </CustomMenuLink>
  </CustomMenuItem>
);
