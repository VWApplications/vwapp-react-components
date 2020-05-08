import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import {
  Sidebar, PageContent, SidebarButton, HeaderMenu,
  DropdownMenuItem, SubMenuItem, MenuItem
} from 'vwapp-react-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSidebar: true };
  }

  __toogleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    return (
      <Fragment>
        <SidebarButton
          whiteIcon
          className="btn btn-sm btn-dark"
          hidden={this.state.showSidebar}
          onClick={() => this.__toogleSidebar()}
        />
        <Sidebar
          show={this.state.showSidebar}
          title="VWApp"
          close={() => this.__toogleSidebar()}
          footerItems={[
            {icon: "fa fa-bell", badge: "3", badgeVariant: "warning", onClick: () => console.log("f1")},
            {icon: "fa fa-envelope", badge: "7", badgeVariant: "success", onClick: () => console.log("f2")},
            {icon: "fa fa-cog", onClick: () => console.log("f3")},
            {icon: "fa fa-power-off", onClick: () => console.log("f4")}
          ]}
          img="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
          name="Victor Deon"
          role="Administrador">
          <HeaderMenu>General</HeaderMenu>
          <DropdownMenuItem title="Dashboard" icon="fa fa-tachometer-alt" badge="New" badgeVariant="warning">
            <SubMenuItem title="Dashboard 1" onClick={() => console.log("Dashboard 1")} badge="Pro" badgeVariant="success" />
            <SubMenuItem title="Dashboard 2" onClick={() => console.log("Dashboard 2")} />
            <SubMenuItem title="Dashboard 3" onClick={() => console.log("Dashboard 3")} />
          </DropdownMenuItem>
          <DropdownMenuItem title="E-commerce" icon="fa fa-shopping-cart" badge="3" badgeVariant="danger">
            <SubMenuItem title="Products" onClick={() => console.log("Products")} />
            <SubMenuItem title="Orders" onClick={() => console.log("Orders")} />
            <SubMenuItem title="Credit cart" onClick={() => console.log("Credit cart")} />
          </DropdownMenuItem>
          <DropdownMenuItem title="Components" icon="far fa-gem">
            <SubMenuItem title="General" onClick={() => console.log("General")} />
            <SubMenuItem title="Panels" onClick={() => console.log("Panels")} />
            <SubMenuItem title="Tables" onClick={() => console.log("Tables")} />
            <SubMenuItem title="Icons" onClick={() => console.log("Icons")} />
            <SubMenuItem title="Forms" onClick={() => console.log("Forms")} />
          </DropdownMenuItem>
          <DropdownMenuItem title="Charts" icon="fa fa-chart-line">
            <SubMenuItem title="Pie chart" onClick={() => console.log("Pie chart")} />
            <SubMenuItem title="Line chart" onClick={() => console.log("Line chart")} />
            <SubMenuItem title="Bar chart" onClick={() => console.log("Bar chart")} />
            <SubMenuItem title="Histogram" onClick={() => console.log("Histogram")} />
          </DropdownMenuItem>
          <DropdownMenuItem title="Maps" icon="fa fa-globe">
            <SubMenuItem title="Google maps" onClick={() => console.log("Google maps")} />
            <SubMenuItem title="Open street map" onClick={() => console.log("Open street map")} />
          </DropdownMenuItem>
          <HeaderMenu>Extra</HeaderMenu>
          <MenuItem title="Documentation" icon="fa fa-book" onClick={() => console.log("Documentation")} badge="5" badgeVariant="primary" />
          <MenuItem title="Calendar" icon="fa fa-calendar" onClick={() => console.log("Calendar")} />
          <MenuItem title="Examples" icon="fa fa-folder" onClick={() => console.log("Examples")} />
        </Sidebar>
        <PageContent showSidebar={this.state.showSidebar}>
          <Container>
            <h1 className="text-center">Ambiente de desenvolvimento.</h1>
            <hr />
            <Flexbox />
          </Container>
        </PageContent>
      </Fragment>
    )
  }
}

export default App;
