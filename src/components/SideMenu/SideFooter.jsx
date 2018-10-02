import React, { Component } from "react";
import styled from "styled-components";

const FootContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-around;
  padding: 5px 0 0;
  background: #2a3f54;
`;
const FootLink = styled.a`
  background-color: #172d44;
  flex: 1;
  padding: 7px 0 3px;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
`;

class SideFooter extends Component {
  render() {
    return (
      <FootContainer className="sidebar-footer hidden-small">
        <FootLink>
          <i className="fas fa-home" />
        </FootLink>
        <FootLink>
          <i className="fas fa-question-circle" />
        </FootLink>
        <FootLink>
          <i className="fas fa-info-circle" />
        </FootLink>
        <FootLink>
          <i className="fas fa-power-off" />
        </FootLink>
      </FootContainer>
    );
  }
}

export default SideFooter;
