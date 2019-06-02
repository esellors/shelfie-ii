import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
   render() {

      console.log('Dashboard.js rendered');

      const {inventory} = this.props;

      return (

         <div>

            <h1>Dashboard</h1>

            {
    
                  inventory.map((item, index) => {
                     return <Product item={item} key={index} />
                  })
      
            }

         </div>
      )
   };
}

export default Dashboard;