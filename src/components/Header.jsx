import React from 'react';
import bell from '../images/bell.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header vertical-align">
        <img src={bell} alt="bell" className="bell" />
        <button>Upgrade</button>
        <button>Sign Out</button>
    </div>
    );
  }
}

export default Header;