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
      inventory: [],
      selectedProduct: null
    }
    this.getInventory = this.getInventory.bind(this);
    this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.getInventory()
    }, 1500);
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => console.log(err));
  }
  getSelectedProduct(e) {
    console.log(e.target.name)
    this.setState({
      selectedProduct: e.target
    })
  }
  render() {

    console.log('App.js rendered');

    return (
      <div>
        <Header />

        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} getSelectedProduct={this.getSelectedProduct} />

        <Form getInventory={this.getInventory} selectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;
