import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
   render() {

      const {id, name, price, image} = this.props.item;

      return (
         <>

            <h1>Product</h1>

            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{price}</h2>

            <Link to={`/edit/&${id}/&${name}/&${price}/&${image}/`}>
               <input type='button' value='Edit' />
            </Link>

            <input type='button' value='Delete' id={id} onClick={this.props.deleteProduct}/>

         </>
      );
   }
}

export default Product;