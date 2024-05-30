
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Jwellery() {
    const [filteredProducts, setFilteredProducts] =useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        const fetchProducts = async ()=> {
            try{
                const response = await fetch(
                    "https://fakestoreapi.com/products/category/jewelery?limit=4"
                );
                const data = await response.json();
                setFilteredProducts(data);
            }catch (error){
                console.error("Error fetching Products:". error);
            }
        };
        fetchProducts();
    },[]);

    const navigateToProduct = (id) => {
        navigate(`/product/${id}`);
    };

  return (
  
    <div className="pt-20 ">
        <label className=" text-xl bg-orange-200">Top Items</label>

        <div className="Topitems flex flex-row  ">
            {filteredProducts.map((item, index) => (
                <div  key={item.id} className="ml-12 shadow-xl w-80 p-10 bg-orange-200 hover:bg-orange-300">

                <img
                src={item.image}
                alt={item.title}
                style={{
                    width:
                    index === 0
                    ? "90px"
                    :index === 1
                    ? "200px"
                    :index === 2
                    ? "120px"
                    : "auto",
                    marginBottom:
                    index === 0
                    ?"5px"
                    :index === 1
                    ?"50px"
                    :index === 2
                    ?"10px"
                    :"auto",

                }}
                 />
                 <label>Price: RS.{item.price}</label>
                 
                 <div> <button className=" bg-green-300 border-2 w-20" onClick={() => navigateToProduct(item.id)} > Shop Now
                  </button> </div>
           </div>
           
           
))}

        </div>

    </div>
    
  )
}

export default Jwellery