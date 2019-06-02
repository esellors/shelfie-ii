import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.getInventory();
    }, 1500);
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
  }
  render() {

    console.log('App.js rendered');

    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} />
        <Form getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
