import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
   render() {

      console.log('Header.js rendered');

      return (
         <>
            <h1>Header</h1>
            <span>
               <Link to='/'>
                  <input type='button' value='Dashboard' />
               </Link>
               <Link to='/add'>
                  <input type='button' value='Add Inventory' />
               </Link>
            </span>
         </>
      )
   };
}

export default Header;