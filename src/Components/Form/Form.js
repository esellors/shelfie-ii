import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         price: 0,
         image: 'https://via.placeholder.com/150',
         selectedProduct: null,
         toggle: false
      }
      this.handleUserInput = this.handleUserInput.bind(this);
      this.addProduct = this.addProduct.bind(this);
      this.clearUserInput = this.clearUserInput.bind(this);
      this.saveEditedProduct = this.saveEditedProduct.bind(this);
   }
   componentWillMount() {
      this.setState({
         selectedProduct: this.props.match.params.id
      })
   }
   componentDidUpdate(prevProps) {
      if (prevProps.selectedProduct !== this.props.selectedProduct) {
         this.setState({
            selectedProduct: this.props.selectedProduct,
            toggle: true
         })
      }
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
         image: '',
         toggle: false
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
   saveEditedProduct(e) {
      e.preventDefault();

      axios.put(`/api/product/${this.state.selectedProduct}`,
         {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image
         })
         .then(() => {
            this.props.getInventory();
            this.clearUserInput();
         })
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

               {
                  this.state.toggle === false
                  ? <input type='submit' value='Add to Inventory' onClick={this.addProduct} />

                  : <input type='submit' value='Save Changes' onClick={this.saveEditedProduct} />
               }
            </form>
         </div>
      )
   };
}

export default Form;