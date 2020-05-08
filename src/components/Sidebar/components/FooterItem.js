import React from "react";
import { CustomFooterItem } from "../styles";

export const FooterItem = props => (
  <CustomFooterItem {...props} onClick={props.onClick}>
    <i className={props.icon}></i>
    {props.badge && <span className={`badge badge-pill badge-${props.badgeVariant} notification`}>{props.badge}</span>}
  </CustomFooterItem>
);
