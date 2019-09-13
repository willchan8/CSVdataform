import React from 'react';
import logo from '../images/logo.png';
import profile from  '../images/profile.png';
import explore from '../images/explore.png';
import definitions from '../images/definitions.png';
import settings from '../images/settings.png';
import help from '../images/help.png';
import switcher from '../images/switcher.png';
import plus from '../images/plus.png';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="vertical-align relative">
          <img src={logo} alt="logo" className="logo" />
          <img src={switcher} alt="switch" className="switch" />
        </div>
        <div className="profile">
          <img src={profile} alt="profile_photo" className="profile-photo" />
          <div className="profile-info">
            <div style={{fontFamily: "SEGOEUI"}}>Monica Greenleaf</div>
            <div style={{fontFamily: "seguili"}}>Microsoft Inc.</div>
          </div>  
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <img className="icon" src={explore} alt=""/>
            <span className="menu-item-text">Explore</span>
          </div>
          <div className="menu-item">
            <img className="icon" src={definitions} alt=""/>
            <span className="menu-item-text">Definitions</span>
          </div>
          <div className="menu-item">
            <img className="icon" src={settings} alt=""/>
            <span className="menu-item-text">Settings</span>
          </div>
          <div className="menu-item">
            <img className="icon" src={help} alt=""/>
            <span className="menu-item-text">Help</span>
          </div>
        </div>
        <div className="line thin"/>
        <div>
          <div className="vertical-align relative">
            <span className="menu-item-text" style={{paddingLeft: 0}}>My Predictions</span>
            <img src={plus} alt="" className="plus-button" />
          </div>
          <div className="small-italic vertical-align">Click<img src={plus} alt="" className="plus-small" />to make your first prediction...</div>
        </div>
        <div className="line thin"/>
        <div>
          <div className="vertical-align relative">
            <span className="menu-item-text" style={{paddingLeft: 0}}>My Datasets</span>
            <img src={plus} alt="" className="plus-button" />
          </div>
          <div className="small-italic vertical-align">Click<img src={plus} alt="" className="plus-small" />to make your first prediction...</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;