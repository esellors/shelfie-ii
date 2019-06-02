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
  }
  componentDidMount() {
    this.getInventory();
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
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
