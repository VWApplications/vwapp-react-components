import styled from "styled-components";

/*----------------page-content----------------*/

export const PageContent = styled.main`
  display: inline-block;
  width: 100%;
  padding-left: 0px;
  padding-top: 20px;
  overflow-x: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    padding-left: ${props => props.showSidebar ? "300px" : "0px"};
  }
`;

/*----------------sidebar-button----------------*/

export const CustomSidebarButton = styled.a`
  left: ${props => props.hidden ? "none" : "block" };
  border-radius: 0 4px 4px 0px;
  width: 35px;
  transition-delay: 0.3s;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

/*----------------sidebar-wrapper----------------*/

export const SidebarWrapper = styled.nav`
  width: 260px;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: ${props => props.open ? "0px" : "-300px"};
  z-index: 999;
  background: #31353D;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  ul li a i {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul li:hover a i {
      color: #16c7ff;
      text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
  }
`;

/*----------------sidebar-content----------------*/

export const SidebarContent = styled.div`
  max-height: calc(100% - 30px);
  height: calc(100% - 30px);
  overflow-y: auto;
  position: relative;
`;

/*----------------sidebar-brand----------------*/

export const CustomBrand = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const BrandTitle = styled.div`
  color: #818896;
  font-weight: bold;
  cursor: default;
  flex-grow: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  :hover {
    color: #b8bfce;
  }
`;

export const CloseSidebarButton = styled.div`
  color: #bdbdbd;
  cursor: pointer;
  font-size: 20px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  :hover {
    color: #ffffff;
  }
`;

/*----------------sidebar-header----------------*/

export const CustomSidebarHeader = styled.div`
  padding: 20px;
  overflow: hidden;
  border-top: 1px solid #3a3f48;
`;

export const CustomUserPic = styled.div`
  float: left;
  width: 60px;
  padding: 2px;
  border-radius: 12px;
  margin-right: 15px;
  overflow: hidden;
`;

export const UserImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const CustomUserInfo = styled.div`
  float: left;
  color: #b8bfce;
`;

export const UserName = styled.div`
  display: block;
`;

export const UserRole = styled.div`
  display: block;
  color: #818896;
  font-size: 12px;
`;

export const UserStatus = styled.div`
  display: block;
  font-size: 11px;
  margin-top: 4px;
  color: #818896;

  i {
    font-size: 9px;
    margin-right: 4px;
    color: #5cb85c;
  }
`;

/*----------------sidebar-menu----------------*/

export const CustomSidebarMenu = styled.div`
  padding-bottom: 10px;
  border-top: 1px solid #3a3f48;
`;

export const CustomHeaderMenu = styled.li`
  span {
    font-weight: bold;
    font-size: 14px;
    padding: 15px 20px 5px 20px;
    display: inline-block;
    color: #6c7b88;
  }
`;

export const CustomMenuItem = styled.li`
  :hover {
    > a {
      color: #b8bfce;
    }
  }
`;

export const CustomMenuLink = styled.a`
  color: #818896;
  display: inline-block;
  width: 100%;
  text-decoration: none;
  position: relative;
  padding: 8px 30px 8px 20px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  span.label, span.badge {
    float: right;
    margin-top: 8px;
    margin-left: 5px;
  }

  :hover {
    > i::before {
      display: inline-block;
      animation: swing ease-in-out 0.5s 1 alternate;
    }
  }

  i {
    margin-right: 10px;
    background: #3a3f48;
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
  }
`;

export const CustomSidebarDropdown = styled.li`
  :hover {
    > a {
      color: #b8bfce;
    }
  }

  :not([class*="closed"]) {
    > a:after {
      transform: rotate(90deg);
      right: 17px;
    }

    > a {
      color: #b8bfce;

      i {
        color: #16c7ff;
        text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
      }
    }
  }

  div {
    background: #3a3f48;
  }
`;

export const CustomDropdownItem = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  position: relative;
  padding: 8px 30px 8px 20px;
  color: #818896;

  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f105";
    font-style: normal;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: 0 0;
    position: absolute;
    right: 15px;
    top: 14px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  i {
    margin-right: 10px;
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    background: #3a3f48;
  }

  span.label, span.badge {
    float: right;
    margin-top: 8px;
    margin-left: 5px;
  }

  :hover {
    > i::before {
      display: inline-block;
      animation: swing ease-in-out 0.5s 1 alternate;
    }
  }
`;

export const CustomSubMenuContainer = styled.ul`
  padding: 5px 0;
`;

export const CustomSubMenuItem = styled.li`
  padding: 5px 5px 5px 25px;
  font-size: 13px;

  a {
    cursor: pointer;

    :hover {
      color: #818896;

      :before {
        color: #16c7ff;
        text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
      }
    }

    :before {
      content: "\f111";
      font-family: "Font Awesome 5 Free";
      font-weight: 400;
      font-style: normal;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin-right: 10px;
      font-size: 8px;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .badge, .label {
      float: right;
      margin-top: 0px;
    }
  }
`;

export const CustomSidebarFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  background: #3a3f48;
  box-shadow: 0px -1px 5px #282c33;
  border-top: 1px solid #464a52;

  > a:first-child {
    border-left: none;
  }

  > a:last-child {
    border-right: none;
  }
`;

export const CustomFooterItem = styled.a`
  flex-grow: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
  position: relative;
  color: #818896;

  :hover i {
    color: #b8bfce;
  }

  .notification {
    position: absolute;
    top: 0;
  }
`;
