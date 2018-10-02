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
    ${props =>
      props.active &&
      props.level === 1 &&
      `
      text-shadow: rgba(0,0,0,.25) 0 -1px 0;
      background: linear-gradient(#334556, #2C4257), #2A3F54);
      box-shadow: rgba(0,0,0,.25) 0 1px 0, inset rgba(255,255,255,.16) 0 1px 0;
    `}
  }

  & > a {
    padding: 13px 15px 12px;
    position: relative;
    color: #E7E7E7;
    font-weight: 500;
    display: block;
  }

  & > a > .hover {
    display: none;
  }
  & > a:hover > .hover {
    display: block;
  }

  & > a > i {
    padding-right: 5px;
    width: 26px;
    opacity: .99;
    display: inline-block;
    font-style: normal;
    font-size: 18px;
  }

  & > a > span {
    float: right;
    margin-top: 5px;
    font-size: 10px;
    color: #C4CFDA;
    margin-right: 4px;
  }

  & > a > span.expanded {
    /* Safari */
    -webkit-transform: rotate(-90deg);

    /* Firefox */
    -moz-transform: rotate(-90deg);

    /* IE */
    -ms-transform: rotate(-90deg);

    /* Opera */
    -o-transform: rotate(-90deg);

    /* Internet Explorer */
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
`;

const ChildMenu = styled.ul`
  padding-inline-start: 0px;

  & > li:before {
    background: #425668;
    bottom: auto;
    content: "";
    height:8px;
    left: 23px;
    margin-top: 15px;
    position: absolute;
    right: auto;
    width: 8px
    border-radius: 50%;
  }

  & > li:after {
    border-left: 1px solid #425668;
    bottom: 0;
    content: " ";
    left: 27px;
    position: absolute;
    top: 0;
  }

  &>li {
    padding-left:36px;
  }
`;

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { children: [], expanded: false };
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onChildDisplayToggle = this.onChildDisplayToggle.bind(this);
  }
  //var TreeNode = React.createClass({
  getInitialState() {
    return {
      children: [],
      expanded: false
    };
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
        this.setState({ children: null, expanded: false });
      } else {
        this.setState({ children: this.props.data.children, expanded: true });
      }
    }

    this.setState({ expanded: !this.state.expanded });

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
    var icon = this.props.data.icon ? "fas " + this.props.data.icon : null;

    const level = this.props.level;
    const expandedClass = this.state.expanded ? "expanded" : "";
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
          {icon && <i className={icon} />}
          {this.props.data.name}

          {hasChildren ? (
            <React.Fragment>
              <span
                className={"fas fa-chevron-down " + expandedClass}
                onClick={this.onChildDisplayToggle}
              />
              <span className="fas fa-plus hover" />
            </React.Fragment>
          ) : (
            <span className="fas fa-clone hover" />
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
