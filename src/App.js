import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          name: 'Nike',
          price: 75,
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Adidas',
          price: 90,
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'New Balance',
          price: 85,
          image: 'https://via.placeholder.com/150'
        }
      ]
    }
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
