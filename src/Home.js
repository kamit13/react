import  React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import Product from './Product';
import './Home.css';
import banner from './banner1.png';

function Home() {
  return (
    //commnet fo class
    <div className="home">
		<div className="home__container">
	     	<img 
	     	className="home__image"
	     	src={banner}
	     	alt="" 
	     	/>    	
	     	<div className="home__row">
	     	<Product  id={123} rating={4} price={45} title="watch with grey color" 
	     		image="https://static.toiimg.com/photo/73078527.cms"
	     	/>
	     	<Product id={123456} rating={3} price={23} title="watch with rred color" 
	     		image="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
	     	/>

	     	</div>
	     	<div className="home__row">
	     	<Product id={123} rating={2} price={12} title="watch with gblue color" 
	     		image="https://images-na.ssl-images-amazon.com/images/I/81wRXdAOmkL._SX522_.jpg"
	     	/>
	     	<Product id={123458} rating={1} price={34} title="watch with namvy color" 
	     		image="https://www.lifewire.com/thmb/Q8A1I9lUj-4vskdMf7FvG4icp0s=/1500x844/smart/filters:no_upscale()/LG-22-28-LG4540-LED-LCD-TV-AMZN-xxx-58ceff565f9b581d726af2ca-b12a1544bfda41418aaaf0afb6aa0375.jpg"
	     	/>
	     	<Product id={123459} rating={2} price={89} title="watch with brown color" 
	     		image="https://i.gadgets360cdn.com/large/mi_gaming_laptop_2019_image_1565003115644.jpg"
	     	/>
	     	 
	     	</div>
	     	<div className="home__row">
	     	</div>
	     	<div className="home__row">
	     	 
	     	</div>
    	</div>    
    </div>
  );
}

export default Home;
