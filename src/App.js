import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';

class App extends Component {

  render() {

    console.log('App.js rendered');

    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
