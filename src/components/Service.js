import React from 'react'
import image from'../Assets/Images/design.png'
import imgg from'../Assets/Images/webdesign.png'
import product from'../Assets/Images/pdesign.png'
import blog from '../Assets/Images/bloggg.png'
import social from '../Assets/Images/media.png'
import photo from '../Assets/Images/image.png'
function Service() {
  return (
   <div>
    <div className=' flex space-x-36 justify-center pt-28'>
        <div className='shadow-xl ml-7 bg-green-200 h-80 w-80 hover:bg-green-300'>
            <img className='w-72 h-60' src= {image}></img>  
            <p className='text-center'>Graphic Design</p>
        </div>
        <div className="flex">
          <div className='shadow-xl ml-7 bg-blue-200 h-80 w-80 hover:bg-blue-300'>
          <img className='w-72 h-60' src={imgg}></img>
           <p className='text-center'>Web Development</p>
       </div>
    </div>
    <div className="flex ">
      <div className='shadow-xl ml-7 bg-blue-200 h-80 w-80 hover:bg-blue-300'>
      <img className='w-72 h-60' src={product}></img>
       <p className='text-center'> Product design</p>
       
        </div>
    </div>
    </div>
     
    <div className=' flex space-x-36 justify-center mt-14'>
        <div className='shadow-xl ml-7 bg-blue-200 h-80 w-80 mb-8 hover:bg-blue-300'>
            <img className='w-72 h-60' src= {photo}></img>  
            <p className='text-center'>Photography</p>
        </div>
        <div className="flex  ">
          <div className='shadow-xl ml-7 bg-blue-200 h-80 w-80 mb-8 hover:bg-blue-300 '> 
          <img className='w-72 h-60' src={social}></img>
           <p className='text-center'>Social Media</p>
       </div>
    </div>
    <div className="flex ">
      <div className='shadow-xl ml-7 bg-blue-200 h-80 w-80 mb-8 hover:bg-blue-300'>
      <img className='w-72 h-60' src={blog}></img>
       <p className='text-center'> Blog</p>
       
        </div>
    </div>
    </div>
    </div>
     
  )
}

export default Service