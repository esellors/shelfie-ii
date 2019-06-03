import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         inventory: []
      }
      this.getInventory = this.getInventory.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
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
   deleteProduct(e) {
      const id = e.target.id;

      axios.delete(`/api/product/${id}`)
         .then(() => this.getInventory())
         .catch(err => console.log(err));
   }
   render() {
      const {inventory} = this.state;

      return (

         <div>

            <h1>Dashboard</h1>

            {
               inventory.map((item, index) => {
                  return <Product item={item} key={index} deleteProduct={this.deleteProduct} />
               })
            }

         </div>
      )
   };
}

export default Dashboard;