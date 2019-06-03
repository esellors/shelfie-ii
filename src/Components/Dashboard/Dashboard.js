import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.deleteProduct = this.deleteProduct.bind(this);
   }
   deleteProduct(e) {
      const id = e.target.id;

      console.log(id)

      axios.delete(`/api/product/${id}`)
         .then(() => this.props.getInventory())
         .catch(err => console.log(err));
   }
   render() {

      console.log('Dashboard.js rendered');

      const {inventory, getInventory} = this.props;

      return (

         <div>

            <h1>Dashboard</h1>

            {
               inventory.map((item, index) => {
                  return <Product item={item} key={index} deleteProduct={this.deleteProduct} getSelectedProduct={this.props.getSelectedProduct} />
               })
            }

         </div>
      )
   };
}

export default Dashboard;