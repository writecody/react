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
          <Card contacts={this.state.contacts}></Card>
        </div>
      </>
    );
  }
}

export default App;