import React, { Component } from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledLI = styled.li`
  position: relative;
  display: block;
  cursor: pointer;

  ${props =>
    props.active &&
    props.level === 1 &&
    `
      border-right: 5px solid #1ABB9C;
  `}

  & > a {
    padding: 13px 15px 12px;
    position: relative;
  }

  & > a > i {
    padding-right: 5px;
  }

  & > a > span {
    float: right;
    margin-top: 5px;
    font-size: 10px;
    color: #C4CFDA;
    margin-right: 4px;
  }
`;

const ChildMenu = styled.ul`
  & > li:before {
    background: #425668;
    bottom: auto;
    content: "";
    height:8px;
    //left: 23px;
    margin-top: 5px;
    position: absolute;
    right: auto;
    width: 8px
    border-radius: 50%;
  }
`;

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { children: [] };
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onChildDisplayToggle = this.onChildDisplayToggle.bind(this);
  }
  //var TreeNode = React.createClass({
  getInitialState() {
    return { children: [] };
  }
  onCategorySelect(ev) {
    if (this.props.onCategorySelect) {
      this.props.onCategorySelect(this);
    }
    console.log(this.props.data.name);
    ev.preventDefault();
    ev.stopPropagation();
  }
  onChildDisplayToggle(ev) {
    if (this.props.data.children) {
      if (this.state.children && this.state.children.length) {
        this.setState({ children: null });
      } else {
        this.setState({ children: this.props.data.children });
      }
    }
    ev.preventDefault();
    ev.stopPropagation();
  }
  render() {
    if (!this.state.children) this.state.children = [];
    let hasChildren = this.props.data.children ? true : false;
    var classes = classNames({
      hasChildrenx: hasChildren,
      active: this.state.children.length ? true : false,
      sub_menu: this.state.children.length ? false : true
    });
    var icon = this.props.data.icon ? "fas " + this.props.data.icon : "";

    const level = this.props.level;

    return (
      <StyledLI
        className={classes}
        level={level}
        active={this.state.children.length ? true : false}
        submenu={this.state.children.length ? false : true}
      >
        <a
          onClick={
            !hasChildren ? this.onCategorySelect : this.onChildDisplayToggle
          }
        >
          <i className={icon} />
          {this.props.data.name}
          {hasChildren ? (
            <span
              className="fas fa-chevron-down"
              onClick={this.onChildDisplayToggle}
            />
          ) : (
            false
          )}
        </a>
        <ChildMenu className="nav child_menu">
          {this.state.children.map(function(child) {
            return (
              <TreeNode
                key={child.id}
                data={child}
                isChild
                onCategorySelect={child.onCategorySelect}
              />
            );
          })}
        </ChildMenu>
      </StyledLI>
      /*<li ref="node" className={classes} onClick={this.onChildDisplayToggle}>
        <a onClick={this.onCategorySelect} data-id={this.props.data.id}>
          {this.props.data.name}
        </a>
        <ul>
          {this.state.children.map(
            function(child) {
              return (
                <TreeNode
                  key={child.id}
                  data={child}
                  onCategorySelect={this.props.onCategorySelect}
                />
              );
            }.bind(this)
          )}
        </ul>
      </li>
      */
    );
  }
}

export default TreeNode;
