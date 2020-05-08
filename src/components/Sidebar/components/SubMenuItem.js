import React from "react";
import { CustomSubMenuItem } from "../styles";

export const SubMenuItem = props => (
  <CustomSubMenuItem>
    <a onClick={props.onClick}>
      {props.title}
      {props.badge && <span className={`badge badge-pill badge-${props.badgeVariant}`}>{props.badge}</span>}
    </a>
  </CustomSubMenuItem>
);
