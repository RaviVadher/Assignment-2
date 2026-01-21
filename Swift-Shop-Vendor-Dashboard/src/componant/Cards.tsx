import React from "react";
interface CardProps {
  id: number;
  name: string;
  category: string; 
  price :number 
}
   
   const Cards: React.FC<CardProps> = ({ id, name,category, price}) => { 
    return(
    <div className="min-h-screen bg-gray-100 p-6">
            <div>
                        <div key={id} className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
                           <div>
                              <h2 className="text-xl font-semibold mb-2">NAME:{name}</h2>
                              <p className="text-gray-600">Catagory:{category}</p>
                              <p className="text-gray-600">Price:{price}</p>
                               {/* <p className="text-gray-600">Stock:{item.Stock}</p> */} 

                              {/* <button onClick={() => deleteItem(item.id)} className="mt-4 text bg-red-400  border border-roundedhover:underline self-start">Delete</button> */}
                           </div>
                        </div>
                   
            </div>
         </div>
    )};

    export default Cards;
