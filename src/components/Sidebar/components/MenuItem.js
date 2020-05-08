import React from "react";
import { CustomMenuItem, CustomMenuLink } from "../styles";

export const MenuItem = props => (
  <CustomMenuItem>
    <CustomMenuLink onClick={props.onClick}>
      {props.icon && <i className={props.icon}></i>}
      {props.title}
      {props.badge && <span className={`badge badge-pill badge-${props.badgeVariant}`}>{props.badge}</span>}
    </CustomMenuLink>
  </CustomMenuItem>
);
