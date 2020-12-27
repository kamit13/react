import  React from 'react';
import Subtotal from './Subtotal';
import "./Checkout.css";
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
const [ {basket, user}, dispatch ] = useStateValue();

  return ( 
    <div className="checkout">
		 <div className="checkout__left">
		 	<img className="checkout__ad" 
		 	src="https://d2sz1kgdtrlf1n.cloudfront.net/task_images/jZOH1590577471256-YeloEommerceLogo38.png" 
		 	alt="" 
		 	/>
		 	<h3>Hello, {user?.email}</h3>
		 	<h2 className="checkout__title">Your Shopping Basket</h2>
		 	<div>
		 		{basket.map(item =>(
		 			<CheckoutProduct 
			 			  id={item.id}
			              title={item.title}
			              price={item.price}
			              rating={item.rating}
			              image = {item.image}	 			
		 			/>

		 			))}
		 		  
		 	</div>

   		 </div>  
   		 <div  >
   		 	    <Subtotal />
   		 </div>  
    </div>
  );
}

export default Checkout;
