//It renders a Bootstrap card displaying product information. It utilizes the useCart hook from 'react-use-cart' to handle adding items to the shopping cart.
//Rendering individual product cards

import React from 'react'
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (

    <div className='col-11 col-md-6 col-lg-3'>
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card p-0 overflow-hidden h-100 shadow" alt=" " />
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-text">AED {props.price}</h5>
          <p class="card-text">{props.description}</p>

          <button class="btn btn-success"
            onClick={() => addItem(props.item)}
          >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;