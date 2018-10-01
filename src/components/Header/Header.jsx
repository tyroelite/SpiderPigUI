import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  //grid-column: 1 / -1;
  grid-area: h;
  background-color: #dedede;
  color: #222;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  & div {
    width: 200px;
  }
  & i.fas {
    font-size: 0.8em;
  }
`;

const HeaderLink = styled.div`
  margin-left: ${props => (props.right ? "auto" : "")};
  text-align: ${props => (props.right ? "right" : "left")};
  padding: 5px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledHeader>
        <HeaderLink>
          <span className="fas fa-bars" onClick={this.props.toggleMenu} />
        </HeaderLink>
        <HeaderLink right>John Doe</HeaderLink>
        <span className="fas fa-angle-down" />
      </StyledHeader>
    );
  }
}

export default Header;
