import React, { Component } from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const NavTitle = styled.div`
  height: 57px;
  display:flex;

  
  &>a {
    font-weight: 400
    font-size: 22px;
    width:100%;
    justify-self: center;
    align-self: center;
    line-height:59px
    display:block;
    height:55px;
    margin:0
    color: #ECF0F1;
    text-decoration: none;
    //display:flex;
  }

  & > a > i {
      border-radius: 50%;
      border 1px solid #EAEAEA;
      padding: 5px 6px;
    }
`;

const ProfilePic = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
`;

const ProfImg = styled.img`
  width: 20%;
  background: #fff;
  margin-left: 15px;
  margin-right: 15px;
  //margin-top: 20px;
  border: 1px solid rgba(52, 73, 94, 0.44);
  padding: 4px;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
`;

const ProfH2 = styled.h2`
  font-size: 14px;
  color: #ecf0f1;
  margin: 0;
  font-weight: 300;
`;

class SideProfile extends React.Component {
  render() {
    return (
      <ProfileWrapper>
        <NavTitle className="navbar nav_title">
          <a href="index.html" className="site_title">
            <i className="fa fas fa-paw" />
            <span>SpiderPigReact</span>
          </a>
        </NavTitle>
        <ProfilePic className="profile_pic">
          <ProfImg src="img.jpg" className="img-circle profile_img" />
          <div className="profile_info">
            <span>Welcome,</span>
            <ProfH2>John Doe</ProfH2>
          </div>
        </ProfilePic>
        <br />
      </ProfileWrapper>
    );
  }
}

export default SideProfile;
