import React, { Component } from "react";
import styled from "styled-components";

import TreeView from "components/SideMenu/TreeView";
import SideProfile from "components/SideMenu/SideProfile";
import SideFooter from "components/SideMenu/SideFooter";

const Menu = styled.nav`
  background-color: #2a3f54;
  //grid-row: 2 / 3;
  grid-area: m;
  width: ${props => props.width};
  display: flex;
  flex-flow: column;
`;

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu width={this.props.width}>
        <SideProfile />
        <TreeView />
        <SideFooter />
      </Menu>
    );
  }
}

export default SideMenu;
