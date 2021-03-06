import React, {Component} from 'react';
import './Reset.css';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';

class App extends Component {

  render() {
    return (
      <div id='main-container'>
        <Header />
          {routes}
      </div>
    );
  }
}

export default App;
