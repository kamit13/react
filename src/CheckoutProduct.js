import  React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';


function CheckoutProduct({ id, title, price, rating , image,  hideButton}) {
	const [ {basket}, dispatch ] = useStateValue();

	const removeFromBasket =() =>{
		console.log("calling remove function");
		//remove item from basket
		dispatch({ 
			type: 'REMOVE_FROM_BASKET',
			id: id,
		})
	}

  	return ( 
    <div className="checkoutProduct">
		 <img className='checkoutProduct__image' src={image}
		  />

	    <div className='checkoutProduct__info'>
	    	<p className='checkoutProduct__title'> {title}</p>
			<p className='checkoutProduct__price'> 
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className='product__rating'>
				{Array(rating).fill().map(( _, i )=>(
		     		<p>*</p>
		     			))}
			</div>
			{ !hideButton &&(
					<button className='productRemove__button' onClick={removeFromBasket}> Remove from Basket</button>
				)}
			
		</div>
	</div>	
  );
}

export default CheckoutProduct;
