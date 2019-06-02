import React, {Component} from 'react';

class Product extends Component {
   render() {

      const {name, price, image} = this.props.item;

      return (
         <>

            <h1>Product</h1>

            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{price}</h2>

         </>
      );
   }
}

export default Product;