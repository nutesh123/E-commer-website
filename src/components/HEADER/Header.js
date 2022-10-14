import { Link } from 'react-router-dom';
import classes from  './Header.module.css'
import App from '../../App';
import Store from '../STORE/Store';

const Header = (props)=>{

  return(
    <div>
    <div className={classes.black}>
      <h3> <Link to='Home'>HOME</Link>  
          <span onClick={() => props.handleshow(false)}><Link to='Store'>STORE</Link></span>
           <Link to='About'>ABOUT</Link> 
           </h3>
      <div className={classes.cart} onClick={() => props.handleshow(true)}><button>Cart {props.count}</button></div>
    </div>
    </div>
  )
}
export default Header ;