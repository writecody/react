import React, {Component} from 'react';
import Card from '../src/Card/Card';
import Companies from '../src/Companies/Companies';
import '../src/App.css'

class App extends Component {
  
  state = {
    contacts: [],
    companies: []
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log);

    fetch("https://crunchbase-crunchbase-v1.p.rapidapi.com/odm-organizations", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "crunchbase-crunchbase-v1.p.rapidapi.com",
        "x-rapidapi-key": "0c5f3edcf0msh770d4bc9a6f16cdp10d95ejsndfaaa9fc67a8"
      }
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ companies: data.data.items })
    })
    .catch(console.log);
  }
  
  render () {
    return (
      <>
        <div className="app-container">
          <div className="header">
            <h1 className="list-title">Contact List</h1>
          </div>
          <div className="contacts">
            <Card 
            contacts={this.state.contacts}>
            </Card>
          </div>
          <div className="main">
            <div className="company-list">
              <Companies companies={this.state.companies}></Companies>
            </div>
          </div>
        </div>
      </>
      );
    }
  }
  
  export default App;