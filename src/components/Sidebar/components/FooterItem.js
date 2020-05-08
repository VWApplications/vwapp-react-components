import React from "react";
import { CustomFooterItem, NotificationBadge } from "../styles";

export const FooterItem = props => (
  <CustomFooterItem {...props} onClick={props.onClick}>
    <i className={props.icon}></i>
    {props.badge && <NotificationBadge className={`badge badge-pill badge-${props.badgeVariant}`}>{props.badge}</NotificationBadge>}
  </CustomFooterItem>
);
