import React from 'react'
import classes from './home.module.css'
import Header from './Header';
function Home() {
  return (
    <div>
      
        <div className={classes.box}>
       <h1 className={classes.header}> The Generics </h1>
           <span className={classes.grt}><h3>Get our latest Album</h3></span>
      </div>
      <div>
        <h2>TOURS</h2>
        <ul>
            <li>JUL16
DETROIT, MI
DTE ENERGY MUSIC THEATRE <button>buy ticket</button></li>
            <li>JUL19
TORONTO,ON
BUDWEISER STAGE<button>buy ticket</button></li>
            <li>JUL 22
BRISTOW, VA
JIGGY LUBE LIVE<button>buy ticket</button></li>
            <li>JUL 29
PHOENIX, AZ
AK-CHIN PAVILION<button>buy ticket</button></li>
            <li>JUL 29
PHOENIX, AZ
AK-CHIN PAVILION<button>buy ticket</button></li>
            <li>JUL 22
BRISTOW, VA
JIGGY LUBE LIVE<button>buy ticket</button></li>
            <li>JUL 29
PHOENIX, AZ
AK-CHIN PAVILION<button>buy ticket</button></li>
        </ul>
      </div>
      <div className={classes.bottumheader}>
       <h1> The Generics</h1>
        </div>
    </div>
  )
}

export default Home ;
