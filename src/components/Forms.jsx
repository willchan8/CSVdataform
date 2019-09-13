import React from 'react';
import dbblack from '../images/db.png';
import dbwhite from '../images/db-white.png';

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dbSelection: 'PostgreSQL',
      displayName: 'monica.greenleaf@microsoft.com',
      description: 'Monica Greenleaf',
      host: 'Monica Greenleaf',
      port: 'monica.greenleaf@microsoft.com',
      username: 'Monica Greenleaf',
      password: 'Microsoft, Inc.',
      database: 'monicagreenleaf@micrsoft.com',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(`${event.target.innerText} button clicked!`)
  }

  handleSelect(dbName) {
    this.setState({
      dbSelection: dbName
    })

    console.log(`${dbName} button clicked!`)
  }

  render() {
    const { dbSelection, displayName, description, host, port, username, password, database } = this.state;
    return (
      <div className="all-forms">
        <div className="subtext2">Connect a Database</div>
        <div className="subtext3">In order to ensure Obviously AI has access to your database, please whitelist our IP address <span className="ip-address">104.198.187.43</span> on your database firewall.</div>
        <div className="db-boxes">
          <div className={dbSelection === "MySQL" ? "db-text box selected" : "db-text box shadow"} onClick={() => this.handleSelect('MySQL')}>
            <img src={dbSelection === "MySQL" ? dbwhite : dbblack} alt="db" style={{height: '55px', width: '45px', padding: '10px'}} />
            MySQL
          </div>
          <div className={dbSelection === "PostgreSQL" ? "db-text box selected" : "db-text box shadow"} onClick={() => this.handleSelect('PostgreSQL')}>
            <img src={dbSelection === "PostgreSQL" ? dbwhite : dbblack} alt="dbfilled" style={{height: '55px', width: '45px', padding: '10px'}} />
            <div>PostgreSQL</div>
          </div>
        </div>
        <div className="form-grid">
          <form className="form-container shadow form-a">
            <label>Display name</label>
            <input type="text" name="displayName" value={displayName} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-b">
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-c">
            <label>Host</label>
            <input type="text" name="host" value={host} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-d">
            <label>Port</label>
            <input type="text" name="port" value={port} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-e">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-f">
            <label>Password</label>
            <input type="text" name="password" value={password} onChange={this.handleChange} />
          </form>

          <form className="form-container shadow form-g">
            <label>Database</label>
            <input type="text" name="database" value={database} onChange={this.handleChange} />
          </form>

          <button className="blue-button add-button" onClick={this.handleSubmit}>Add this database</button>
        </div>
      </div>
    );
  }
}

export default Forms;