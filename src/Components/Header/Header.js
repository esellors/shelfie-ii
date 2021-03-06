import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
   render() {
      return (
         <header>
            <h1>SHELFIE</h1>
            <span>
               <Link to='/'>
                  <input type='button' value='Dashboard' />
               </Link>
               <Link to='/add'>
                  <input type='button' value='Add Inventory' />
               </Link>
            </span>
         </header>
      )
   };
}

export default Header;