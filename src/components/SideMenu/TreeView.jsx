import React, { Component } from "react";
import styled from "styled-components";

import TreeNode from "components/SideMenu/TreeNode";

import data from "components/SideMenu/data";

const MenuH3 = styled.h3`
  padding-left: 15px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  font-size: 11px;
  margin-bottom: 0px;
  margin-top: 0px;
  text-shadow: 1px 1px #000;
`;

const SideMenu = styled.ul`
  margin-top: 10px;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
    this.onSelect = this.onSelect.bind(this);
  }
  //var CategoryTree = React.createClass({
  getInitialState() {
    return { data: data };
  }

  componentWillMount() {
    this.setState({ data: data });
  }

  onSelect(node) {
    if (this.state.selected) {
      this.state.selected.setState({ selected: false });
      console.log(node.props.data.name);
    }
    this.setState({ selected: node });
    node.setState({ selected: true });
    if (this.props.onCategorySelect) {
      this.props.onCategorySelect(node);
    }
  }

  render() {
    return (
      <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
        <div className="menu_section">
          <MenuH3>Configurations</MenuH3>
          <SideMenu className="nav side-menu">
            {this.state.data.children.map(function(child) {
              return (
                <TreeNode
                  key={child.id}
                  data={child}
                  onCategorySelect={child.onCategorySelect}
                  level={1}
                />
              );
            })}
          </SideMenu>
        </div>
      </div>
    );
  }
}

export default TreeView;
