import React from "react";
import {
  CustomSidebarHeader, CustomUserPic, CustomUserInfo, UserImage,
  UserRole, UserStatus, UserName
} from "../styles";

export const SidebarHeader = props => (
  <CustomSidebarHeader>
    <CustomUserPic>
      <UserImage
        className="img-responsive img-rounded"
        src={props.img}
        alt="User"
      />
    </CustomUserPic>
    <CustomUserInfo>
      <UserName>{props.name}</UserName>
      <UserRole>{props.role}</UserRole>
      <UserStatus>
        <i className="fa fa-circle"></i>
        <span>Online</span>
      </UserStatus>
    </CustomUserInfo>
  </CustomSidebarHeader>
);
