import React, { useState } from 'react'
import Button from'./Button';
import { FaCoffee } from 'react-icons/fa';
// import Formssss from './Formssss'

function Contact() {
  // const[ items, setItems]=useState([]);( this items haru add garne)
  // const addItem =() => {
  //   const newItem = prompt('Enter item:');
  //   setItems([...items, newItem]);
  // };
  return (
    <div>
     <div className=' p-5 bg-green-200 pt-28'>
        <div className='text-black flex flex-col ml-[30%] '>
        <label className=''>Name</label>
        <input type="text" name="Fullname" placeholder="Enter your Name" className='h-7 rounded-xl text-lg w-96'/>

        <label className=''>Email</label>
        <input type="text" name="Fullname" placeholder="Enter your Email" className='h-7 rounded-xl text-lg w-96'/>
     
    
        <label className=''>Phone number</label>
        <input type="text" name="Fullname" placeholder="Enter your Number" className='h-7 rounded-xl text-lg w-96'/>
     
     
        <label className=''>Message</label>
        <input type="text" name="Fullname" placeholder="Enter your Message" className='h-7 rounded-xl text-lg w-96' />
     
    </div>
    
    <div className='ml-[34%]'>
     <button className='bg-green-500 mt-5 rounded-lg px-2 py-1' onclick="btn">Submit</button>
     </div>
     </div>
     {/* <div>
        <Button label="Click Me" color="#FF5733"  txt='orange'icon={<FaCoffee/>}/>
      </div>
      <Formssss label="FullName" placeholder="Enter your FullName"/> */}

      {/* <div className='pt-28'>(this)
        <button onClick={addItem} className='border-2 border-black'>Add Item</button>
        <ul>
          {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div> */}
    </div>
  )
}

export default Contact