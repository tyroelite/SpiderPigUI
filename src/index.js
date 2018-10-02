import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Header from "components/Header/Header";
import SideMenu from "components/SideMenu/SideMenu";

import "./styles.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto repeat(11, 1fr);
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "m c c c c c c c c c c c"
    "f f f f f f f f f f f f";
  height: 100%;
`;

const Content = styled.div`
  grid-area: c;
  background-color: #eee;
  //grid-column: 2 / -1;
`;
const Footer = styled.footer`
  grid-area: f;
  background-color: #2a3f54;
  //grid-column: 1 / -1;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const bln = !this.state.showMenu;
    this.setState({ showMenu: bln });
  }

  render() {
    //function App() {
    return (
      <Container>
        <Header toggleMenu={this.toggleMenu} />
        <SideMenu width={this.state.showMenu ? "230px" : "0px"}>Side</SideMenu>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
