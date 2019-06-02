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

            <input type='button' value='Delete' name={id} onClick={this.props.deleteProduct}/>

         </>
      );
   }
}

export default Product;