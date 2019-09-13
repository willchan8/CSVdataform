import React from 'react';
import SideBar from './Sidebar';
import Header from './Header';
import CSVReader from './CSVReader';
import Forms from './Forms';
import group2 from '../images/group2.svg';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <SideBar />
        <div className="main">
          <img src={group2} alt="background" className="background"/>
          <Header />
          <div className="main-content">
            <div className="main-text">Add datasets<br/>to your Obviously account.</div>
            <div className="subtext1">Add dataset for making predictions. We don't and will never store your data.</div>
            <div className="subtext2">Upload a file</div>
            <CSVReader />
            <div className="line">
              <span className="or">OR</span>
            </div>
            <Forms />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
