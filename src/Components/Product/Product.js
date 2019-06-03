import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
   render() {

      const {id, name, price, image} = this.props.item;

      return (
         <div className='product-card'>

            <img src={image} alt={name} />

            <span className='card-inner-1'>
               <span className='card-inner-2'>
                  <h2>{name}</h2>
                  <h2>${price}</h2>
               </span>

               <span className='main-buttons'>
                  <div>
                     <Link to={`/edit/&${id}/&${name}/&${price}/&${image}/`}>
                        <input type='button' value='Edit' />
                     </Link>
                  </div>

                  <div>
                     <input type='button' value='Delete' id={id} onClick={this.props.deleteProduct}/>
                  </div>
               </span>
            </span>

         </div>
      );
   }
}

export default Product;