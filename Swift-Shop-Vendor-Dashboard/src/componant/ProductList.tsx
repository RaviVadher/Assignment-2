import React,{useState, useEffect} from "react";
import Cards from "./Cards";

export default function ProductList()
{
    const[product,setProduct] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

   
    useEffect(()=>{
         const fetchProduct = async()=>{
           
         try{
            console.log("fetch data")
            const res = await fetch("https://dummyjson.com/products");
            console.log(res.json());
            if(!res.ok) throw new Error(`error:${res.status}`);
             const data = await res.json();
             setProduct(data);
        }
        catch(err)
        {
            // setError(err.message);
        }
        finally{
            setLoading(false);
        }

    } 
                fetchProduct();
    },[]);
    

    if(loading) return <p>{product} Loading Products</p>
    if(error)  return <p className="bg-red-700 text-black"> Error</p>

    return(
        <>
           <div className="min-h-screen bg-gray-100 p-6">
            <div>


               {product.length === 0 ? (
                  <p className="text-center text-gray-400">No items yet</p>
               ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {product.map((item) => (
                        <Cards id={item.id}
                                 name={item.title}
                                 catogory={item.category}
                                 price ={item.price}
                                 />
                     ))}
                  </div>
               )}
            </div>
         </div>
        </>
    )
}