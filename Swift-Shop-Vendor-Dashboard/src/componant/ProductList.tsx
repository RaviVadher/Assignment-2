import React,{useState, useEffect} from "react";
import Cards from "./Cards";

interface Product{
    id:number;
    title:string;
    category:string;
    price:number;
}

export default function ProductList()
{
    const[product,setProduct] = useState<Product[]>([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState<string | null>(null);

   
    useEffect(()=>{
         const fetchProduct = async()=>{
           
         try{
            console.log("fetch data")
            const res = await fetch("https://dummyjson.com/products");
            if(!res.ok) throw new Error(`error:${res.status}`);
            const data = await res.json();
            console.log(data);
             setProduct(data.products);
        }
        catch(err:any)
        {
             setError(err.message);
        }
        finally{
            setLoading(false);
        }

    } 
                fetchProduct();
    },[]);
    

    if(loading) return <p> Loading Products</p>
    if(error)  return <p className="bg-red-700 text-black"> {error}</p>

    return(
        <>
           <div className="min-h-screen bg-gray-100 p-6">
            <div className="gri grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


               {product.length === 0 ? (
                  <p className="text-center text-gray-400">No items yet</p>
               ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {product.map((item) => (
                        <Cards  key = {item.id}
                               id={item.id}
                                 name={item.title}
                                 category={item.category}
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