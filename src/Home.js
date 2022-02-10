import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
    <div className='home_container'>
    <img 
    className="home_image"
    src="https://m.media-amazon.com/images/I/81d9aX1UuJL._SX3000_.jpg"  
    alt=''
    />

    <div className='home_row'>

    
    
    {/* Product id,title, price, rating, image */}
    <Product
        id="12321341"
        title="The Lean Startup: How Constant Innovation Creates Radically Businesses Paperback"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
    {/* Product */}
    
    </div>
    </div>
    </div>
  );
}

export default Home;