import React from 'react'
import { FaPaintBrush, FaCode,FaTablet } from "react-icons/fa";


function Skill() {
  return (
    <div>
     
         <div className=' pt-32 text-center text-blue-600 font-bold text-2xl'>My Skill</div> 
            <div className=''>
                <p className='text-center font-josefint- mt-3'>I like To Craft Beautiful And Scalable Web Products.</p>
            </div>
            <div className='grid grid-cols-2'>
            <div className='w-[90%]'>
        <div className='flex pl-24 pt-14'   > 
         <div className=' ml-3 text-5xl'><FaPaintBrush />

         </div>
         <div className='ml-7 '>
            <div className='font-bold text-3xl ' >Design + Development

            </div>
            <div className='text-gray-400'>Clean, modern design - optimized for performance, search engines, and converting users to customers.
            </div>

         </div>
            </div> 
            <div className='flex pl-24 pt-14'   > 
         <div className=' ml-3 text-5xl'><FaCode/>

         </div>
         <div className='ml-7  '>
            <div className='font-bold text-3xl ' >Technology

            </div>
            <div className='text-gray-400'>Combined all the latest technologies to a progressive website. 
            </div>

         </div>
            </div> 

            <div className='flex pl-24 pt-14'   > 
         <div className=' ml-3 text-5xl'><FaTablet/>

         </div>
         <div className='ml-7 '>
            <div className='font-bold text-3xl ' >Always Responsive

            </div>
            <div className='text-gray-400'>A responsive design makes your website accessible to all users, regardless of their device
            </div>

         </div>
            </div>   
        
        </div>
        <div className='pt-14 w-[90%] '>
            <div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full  w-[45%] " > html</div>
  </div>
            </div>
       
            <div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[45%] " > CSS</div>
  </div>
            </div>

<div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[50%] " > JQuery </div>
  </div>
            </div>
      <div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-blue-700 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[40%] " > PHP</div>
  </div>
</div>
<div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[45%] " > Wordpress</div>
  </div>
</div>
<div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-green-800 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[55%] " > SEO</div>
  </div>

</div>
<div className='pb-4'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 h-7 leading-7 rounded-full w-[80%] " > Photoshop</div>
  </div>
</div>
        </div>
       
       
       </div>
        </div>
       
 
 
  )
}

export default Skill