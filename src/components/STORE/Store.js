import React from 'react'
import { useState } from 'react';
import Header from '../HEADER/Header';
import Cart from '../HEADER/Cart';
import Music from './Music';
import BottumHeader from '../HEADER/BottumHeader';
import classes from  '../HEADER/Header.module.css'


function Store(props) {

    const [items,setitems]=useState([
        {
          title: 'Colors', 
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
          },
          { 
          title: 'Black and white Colors',
          price: 50,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
          },
          {
          title: 'Yellow and Black Colors', 
          price: 70,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
          },
          {
          title: 'Blue Color',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          }
      ])
    
    
      const [cart,setcart]=useState([]);
      const addtocart=(data)=>{
        setcart([...cart,{...data , quantity : 1}])
      }
    
    
      const [showCart, setShowCart] = useState(false)
     const handleshow=(value)=>{
      setShowCart(value)
     }

  return (
    <div>
      <div className={classes.header}>
       <h1> The Generics </h1>
      </div>
         {
          showCart ? 
            < Cart  cart={cart} ></Cart> :
             <Music itemlist={items} addtocart={addtocart}/>
        } 
<button>See the Cart </button>
<BottumHeader></BottumHeader> 

    </div>
  )
}

export default Store