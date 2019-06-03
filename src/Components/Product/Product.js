import React, {Component} from 'react';

class Product extends Component {
   render() {

      console.log('Product.js rendered');

      const {id, name, price, image} = this.props.item;

      return (
         <>

            <h1>Product</h1>

            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{price}</h2>

            <input type='button' value='Edit' id={id} onClick={this.props.getSelectedProduct} />

            <input type='button' value='Delete' id={id} onClick={this.props.deleteProduct}/>

         </>
      );
   }
}

export default Product;