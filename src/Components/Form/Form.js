import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: null,
         name: '',
         price: 0,
         image: 'https://via.placeholder.com/150',
         toggle: false
      }
      this.handleUserInput = this.handleUserInput.bind(this);
      this.addProduct = this.addProduct.bind(this);
      this.clearUserInput = this.clearUserInput.bind(this);
      this.saveEditedProduct = this.saveEditedProduct.bind(this);
   }
   componentDidMount() {

      if (this.props.match.params.id) {
         let path = (this.props.history.location.pathname).split('&');

         const id = path[1].slice(0, path[1].length - 1), 
            name = path[2].slice(0, path[2].length - 1), 
            price = path[3].slice(0, path[3].length - 1), 
            image = path[4].slice(0, path[4].length - 1)

         this.setState({
            id: id,
            name: name,
            price: price,
            image: image,
            toggle: true
         })
      }
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
      this.props.history.goBack()
   }
   addProduct(e) {
      e.preventDefault();

      axios.post('/api/product', this.state)
         .then(() => {
            this.props.history.goBack()
         })
         .catch(err => console.log(err));
   }
   saveEditedProduct(e) {
      e.preventDefault();

      axios.put(`/api/product/${this.state.id}`,
         {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image
         })
         .then(() => {
            this.props.history.goBack()
         })
   }
   render() {
      return (
         <div id='form'>

            <form id='input_product'>
               <img src={this.state.image} alt={this.state.name} />

               <label htmlFor='input_image'>Image URL:</label>
               <input type='text' name='input_image' id='input_image' value={this.state.image} onChange={this.handleUserInput} />

               <label htmlFor='input_name'>Product Name:</label>
               <input type='text' name='input_name' id='input_name' value={this.state.name} onChange={this.handleUserInput} />
               
               <label htmlFor='input_price'>Price:</label>
               <input type='text' name='input_price' id='input_price' value={this.state.price} onChange={this.handleUserInput} />

               <span className='main-buttons'>

                  <input className='form-buttons' type='button' value='Cancel' onClick={this.clearUserInput} />

                  {
                     this.state.toggle === false
                     ? <input className='form-buttons' type='submit' value='Add to Inventory' onClick={this.addProduct} />

                     : <input className='form-buttons' type='submit' value='Save Changes' onClick={this.saveEditedProduct} />
                  }
               </span>
            </form>
         </div>
      )
   };
}

export default Form;