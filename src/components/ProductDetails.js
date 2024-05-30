
import React, { useEffect, useState} from 'react';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { useParams} from 'react-router-dom';


function ProductDetails() {
const renderRatingStars = () => {
    const stars =[];
    const totalStars = 5;
    const rating = Math.floor(product.rating.rate);
    const remainder = product.rating.rate - rating;
    //full stars
    for(let i = 0; i < rating; i++){
        stars.push(<FaStar key={i} style={{ color: 'orange'}} />);
    }
    //halfStar
    if ( remainder >= 0.5){
        stars.push(<FaStarHalfAlt key={rating} style={{color: 'orange'}}/>);
    }
    //emptyStar
    const remainingsStars = totalStars - stars.length;
    for(let i = 0; i< remainingsStars; i++){
        stars.push(<FaStar key={rating + i + 1} style={{color:'#ccc'}}/>);
    }
    return stars;
};
const { id }= useParams ();
const[product, setProduct ] = useState(null);
useEffect(() => {
    const fetchProduct = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }catch(error){
            console.error('Error fetch product:', error);
        }
    };
    fetchProduct();
}, [id]);

if (!product){
    return<div>Loading....</div>
}

  return (
    <div className="text-center pt-28 ">
        <div className="flex flex-col justify-center items-center">
        <img src={product.image} width={200} ></img>
        <div>
            <label className=''>
                {product.title}
            </label>
        </div>
        
        <div>
            <label className='text-gray-400 '>Jwellery</label>
        </div>
        <div className='text-orange-400 mt-2'><p>Price:{product.price}</p></div>
        <div className='text-center w-[35%]'> <p>Description:{product.description}</p></div>
        <div className=' flex flex-row justify-between '>
            <span style={{ color:'green'}}>Rating</span>
            <span  className="flex ml-20 pt-1" style={{ color:'green'}}>
            {renderRatingStars()} 
            </span>
           <span className='text-green-600 '>({product.rating.count}reviews) </span> 
        </div>
        <div> 
            <button className='bg-yellow-300 border-4   w-40 h-16 mt-4'> Add to Cart </button>
        </div>
        </div>

            </div>

        
  )
}

export default ProductDetails