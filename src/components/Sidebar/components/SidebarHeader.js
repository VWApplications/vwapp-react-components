import React from "react";
import {
  CustomSidebarHeader, CustomUserPic, CustomUserInfo, UserImage,
  UserRole, UserStatus, UserName
} from "../styles";

export const SidebarHeader = props => (
  <CustomSidebarHeader id="sidebar-header" show={props.show}>
    <CustomUserPic id="sidebar-header-user-pic">
      <UserImage
        id="sidebar-header-user-image"
        className="img-responsive img-rounded"
        src={props.img}
        alt="User"
      />
    </CustomUserPic>
    <CustomUserInfo id="sidebar-header-user-info">
      <UserName id="sidebar-header-user-name">{props.name}</UserName>
      <UserRole id="sidebar-header-user-role">{props.role}</UserRole>
      <UserStatus id="sidebar-header-user-status">
        <i className="fa fa-circle"></i>
        <span>Online</span>
      </UserStatus>
    </CustomUserInfo>
  </CustomSidebarHeader>
);
