import { Link } from 'react-router-dom';
import classes from  './Header.module.css'
import App from '../../App';
import Store from '../STORE/Store';

const Header = (props)=>{

  return(
    <div>
    <div className={classes.black}>
      <h3 className={classes.gap}> 
      <Link to='Home' >HOME</Link>  
          <span onClick={() => props.handleshow(false)}>
            <Link to='Store'style={{ textDecoration: 'none' }}>STORE</Link></span>
           <Link to='About'>ABOUT</Link> 
           <Link to='ContactUs'>CONTACT-US</Link>
           </h3> 
      <div className={classes.cart} onClick={() => props.handleshow(true)}><button>Cart {props.count}</button></div>
    </div>
    </div>
  )
}
export default Header ;