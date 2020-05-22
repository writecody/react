import React, {Component} from 'react';
import Card from '../src/Card/Card';
import '../src/App.css'

class App extends Component {

  state = {
    contacts: [],
    quotes: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log);

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(quotesData => {
        this.setState({ quotes: quotesData })
  })
  }

  render () {
    return (
      <>
        <div className="app-container">
          <Card 
            contacts={this.state.contacts}
            quotes={this.state.quotes}>
          </Card>
        </div>
      </>
    );
  }
}

export default App;