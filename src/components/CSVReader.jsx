import React from 'react';
const Papa = require('papaparse/papaparse.min.js');

class CSVReader extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0]
    }, () => this.importCSV());
  };

  importCSV = () => {
    const { csvfile } = this.state;
    if (csvfile.name.split('.').pop() === 'csv') {
      Papa.parse(csvfile, {
        complete: this.updateData,
        header: true
      });
    } else {
      alert('Not a valid CSV file.');
    }
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
  }

  render() {
    return (
      <label className="blue-button">
          Upload CSV
          <input 
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
      </label>
    );
  }
}

export default CSVReader;