import React from "react";
import { SidebarContent, SidebarWrapper } from "../styles";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";
import { FooterItem } from "./FooterItem";

export class Sidebar extends React.Component {
  render() {
    const { show, title, children, close, img, name, role, footerItems, header = true } = this.props;

    return (
        <SidebarWrapper id="sidebar-wrapper" open={show}>
          <SidebarContent id="sidebar-content">
            <SidebarBrand title={title} close={close} />
            <SidebarHeader img={img} name={name} role={role} show={header} />
            <SidebarMenu id="sidebar-menu">{children}</SidebarMenu>
          </SidebarContent>
          {footerItems && (
            <SidebarFooter id="sidebar-footer">
              {footerItems.map((item, index) => (
                <FooterItem
                  className="sidebar-item"
                  key={index}
                  icon={item.icon}
                  badge={item.badge}
                  badgeVariant={item.badgeVariant}
                  onClick={item.onClick}
                />
              ))}
            </SidebarFooter>
          )}
        </SidebarWrapper>
    );
  }
}
