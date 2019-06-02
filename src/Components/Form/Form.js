import React, {Component} from 'react';
import axios from 'axios';




// NEED TO FIND OUT WHY POSTING FROM PAGE DOES NOT WORK BUT WORKS FROM POSTMAN
// POSSIBLE ISSUE WITH PUTTING endpoints in massive block?




class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         price: 0,
         image: 'https://via.placeholder.com/150'
      }
      this.handleUserInput = this.handleUserInput.bind(this);
      this.addProduct = this.addProduct.bind(this);
      this.clearUserInput = this.clearUserInput.bind(this);
   }
   handleUserInput(e) {
      switch(e.target.name) {
         case 'input_name':
            this.setState({
               name: e.target.value
            });
            break;
         case 'input_price':
            this.setState({
               price: e.target.value
            });
            break;
         case 'input_image':
            this.setState({
               image: e.target.value
            });
            break;
         default:
            break;
      }
   }
   clearUserInput() {
      this.setState({
         name: '',
         price: 0,
         image: ''
      })
   }
   addProduct(e) {
      e.preventDefault();
      console.log('+++++ ADD BUTTON CLICKED +++++')

      axios.post('/api/product', this.state)
         .then(() => {
            this.props.getInventory();
            this.clearUserInput();
         })
         .catch(err => console.log(err));
   }
   render() {

      console.log('Form.js rendered');

      return (
         <div id='input_product_container'>

            <h1>Form</h1>

            <form id='input_product'>
               <label htmlFor='input_image'>Image URL:</label>
               <input type='text' name='input_image' id='input_image' value={this.state.image} onChange={this.handleUserInput} />
               <label htmlFor='input_name'>Product Name:</label>
               <input type='text' name='input_name' id='input_name' value={this.state.name} onChange={this.handleUserInput} />
               <label htmlFor='input_price'>Price:</label>
               <input type='text' name='input_price' id='input_price' value={this.state.price} onChange={this.handleUserInput} />

               <input type='button' value='Cancel' onClick={this.clearUserInput} />

               <input type='submit' value='Add to Inventory' onClick={this.addProduct} />
            </form>
         </div>
      )
   };
}

export default Form;