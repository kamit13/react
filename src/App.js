import   { useEffect } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe ("pk_test_51Hyv9pHUQEfoevvCs2paJlY7evEXmfiUjbGRci7S2UWnoift3lRJqu9TsDbq3Wlko9ancpBESUWrrsqngPBmPftV006SSsk63H");

function App() {
  const [ {}, dispatch ] = useStateValue();

  useEffect(()=>{
    //it only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
        console.log('The use is >>> ', authUser);

        if (authUser){
          //the user is logged in / user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        }else{
          //the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })

        }
    })
  }, [])

  return (
    //commnet fo class
    //header -- home 
    <Router>
      <div className="App">
     
        <Switch>
          <Route path="/orders">
             <Header />
             <Orders />
          </Route>
          <Route path="/checkout">
             <Header />
            <Checkout />
          </Route>
          <Route path="/login">
             <Login />
             
          </Route>
          <Route path="/signout">
             <Header />
            <h1>Currently signed in</h1>
          </Route>
          <Route path="/payment">
             <Header />
             <Elements stripe={promise} >
                <Payment />
             </Elements>
          </Route>          
          <Route path="/">
              <Header />
            <Home />
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
