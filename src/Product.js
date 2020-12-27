import  React, { useEffect } from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product( { id, rating , price, title, image }) {
   const [{basket} , dispatch] = useStateValue();

    
 

  useEffect(() =>{
    localStorage.setItem("items", JSON.stringify(basket));
     
  },[basket]);
   
   const addToBasket = () => {
   	//dispatch the items into the data layer
   	  
   		  
   		dispatch({
   			type: "ADD_TO_BASKET",
   			item: {
   				id: id,
   				price: price,
   				title: title,
   				rating: rating,
          image: image,
   			},
   		});
   };

  return (   
    <div className="product">
		<div className="product__info">
	     	 <p>{title}</p> 
	     	 <img
	     	  className="product__image"
	     	 src={image}
	     	 alt=""
	     	 />
	     	 <p className="product_price">
	     	 	<small>$</small>
	     	 	<strong> {price}</strong>
	     	 </p>
	     	<div className="product__rating">
	     		 {Array(rating).fill().map(( _, i )=>(
	     		<p>*</p>
	     			))}
	     	</div>
	     	 
	     	 <button onClick={addToBasket} className="product__button"> Add To Basket </button>
	    </div>
    	   
    </div>
  );
}

export default Product;
