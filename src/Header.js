import  React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
	const [ {basket, user}, dispatch ] = useStateValue();

	const handleAuthentication = () => {
		if(user){
			auth.signOut();
		}
	}

  return (
    //commnet fo class
    //header -- home 
    <div className="header">
		<Link to="/">    
		    <img className="header__logo" 
		    	src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" 
		    />
		</Link>    
	    
	    <div className="header__search">
	    	<input className="header__searchInBox" type="text"  />
	        <SearchIcon className="header__searchIcon" />
	    </div>

	    <div className="header__nav">
	    	 <div className="header__option">
	    	 	<span className='header__online__one'
	    	 	>About</span>
	    	 	<span className='header__online__two'
	    	 	>Services</span>
	    	 </div>
	    	  
	    	  <Link to={!user && '/login'}>
		    	 <div onClick={handleAuthentication} className="header__option">
		    	 	<span className='header__online__one'
		    	 	> Hello, {user ? user?.email : 'Guest'}</span>
		    	 	<span className='header__online__two'
		    	 	>{user ? 'Sign Out' : 'Sign In' }</span>
		    	 </div>
	    	 </Link>
	    	 <Link to="/orders">
		    	 <div className="header__option">
		    	 	<span className='header__online__one'
		    	 	>Return</span>
		    	 	<span className='header__online__two'
		    	 	>& Order</span>
		    	 </div>
	    	 </Link>
	    	 <Link to="/checkout">
		    	 <div className="header__option">
		    	 	 <span classname="header__basket__counter">{basket?.length}</span>
		    	 </div>
		    	 <div className="header__option">
		    	 	<ShoppingBasketIcon className='header_basket' />
		    	 </div>
	    	  </Link>	    	  
	    </div>    
    </div>
  );
}

export default Header;
