
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import{ GiHamburgerMenu } from 'react-icons/gi';
import { FiPlus } from "react-icons/fi";



function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
    console.log(isScrolled)
  };

  window.addEventListener("scroll", handleScroll);

  const MenuLinks =[
    {
    id:1,
    name:"Home",
    link:"/"
  },
  {
    id:2,
    name:"AboutUs",
    link:"/about"

  },
  {
    id:3,
    name:"ContactUs",
    link:"/contact"
  },
  {
    id:4,
    name:"Service",
    link:"/service"
  },

  {
    id:5,
    name:"Skill",
    link:"/skill"
  },
  ];
  const toggleMenu =() => {
    setShowMenu(!showMenu);
  };
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //     setCount(count + 1);
  //   };
  //  const todolist=[
  //   {
  //     id:1,
  //     text:'Dina'

  //   },
  //   {
  //     id:2,
  //     text:'Shrestha'
  //   },
  //   {
  //     id:2,
  //     text:'momo'
  //   },
  // ];
  return(
   
       <div className=' text-xl space-x-5 text-end'>
    <div className={`fixed w-full px-4 pt-4 pb-5 h-20 bg-green-300  text-brandPrimary text-md ${isScrolled ?'bg-blues text-white':' '}`}>
      <ul className="flex-row cursor-pointer  hidden md:flex">
        {MenuLinks.map((data, index) => (
        <li key={index} className="mt-2">
          <Link to={data.link}
          className="pl-10 font-semibold">
            {data.name}
          </Link>
        </li>
      ))}
      <li className="mt-3 ml-6" ><FiPlus />
</li>
      </ul>
      <button
      onClick={toggleMenu}
      className="md:hidden cursor-pointer absolute top-7 right-10"
      >
        {showMenu ? (
          <IoMdClose size={25}/>
        ) : (
          <GiHamburgerMenu size={25}/>
        )}
      </button>
      <div 
      className={` shadow-4xl ease-in text-black text-start &'{
        showMenu ? 'block' : 'hidden'
      }`}
      >
        {showMenu && (
          <div className="flex flex-col mt-16 py-2 bg-green-200 h-full w-full text-black">
            <ul className="flex-col cursor-pointer sm:flex">
              {MenuLinks.map((data, index) => (
                <li key={index} className="mt-2">
                  <Link 
                  to={data.link}
                  className="pl-10 font-semibold text-brandPrimary"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
        )}
    </div>


      {/* <div>
  {todolist.map ((text)=> (
   <li key={text.id} className="text-black"> {text.text}
    
   </li>

  ))
  } 

</div> */}
        {/* <div>
  <p> count: {count}</p>
  <button onClick={ incrementCount}>Increament</button>
    </div> */}
    </div>
      </div>
      
      
  );
}

  




export default Navbar;
