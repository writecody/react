import React, {Component} from 'react';
import Card from '../src/Card/Card';
import '../src/App.css'

class App extends Component {
  
  state = {
    contacts: []
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
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
            MAIN CONTENT
          </div>
        </div>
      </>
      );
    }
  }
  
  export default App;