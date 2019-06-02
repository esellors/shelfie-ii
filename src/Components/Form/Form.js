import React, {Component} from 'react';

class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         price: 0,
         image: ''
      }
      this.handleUserInput = this.handleUserInput.bind(this);
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
   clearUserInput(e) {
      e.preventDefault();
      this.setState({
         name: '',
         price: 0,
         image: ''
      })
   }
   render() {
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
               <button onClick={this.clearUserInput}>Cancel</button>
               <button>Add to Inventory</button>
            </form>
         </div>
      )
   };
}

export default Form;