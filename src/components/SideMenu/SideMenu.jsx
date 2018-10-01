import React, { Component } from "react";
import styled from "styled-components";

const Menu = styled.nav`
  background-color: #2a3f54;
  //grid-row: 2 / 3;
  grid-area: m;
  width: ${props => props.width};
`;

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu width={this.props.width}>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
        </ul>
      </Menu>
    );
  }
}

export default SideMenu;
