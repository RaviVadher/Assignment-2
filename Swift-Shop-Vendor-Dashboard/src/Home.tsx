import React, { useEffect, useState, type FormEvent } from "react";
import {ThemeToggle} from "./componant/ThemeToggle";
import ProductList from "./componant/ProductList";


interface Product {
   id: number;
   ProductName: string;
   Price: number;
   Stock: number;
   Catagory: string;
};

const Home: React.FC = () => {

   const [ProductName, setProductName] = useState('');
   const [Price, setPrice] = useState('');
   const [Stock, setStock] = useState('');
   const [Catogory, setCatogory] = useState('');
   const [listproduct, setListProduct] = useState<Product[]>([]);
  
   useEffect(() => {

      const storedProduct = localStorage.getItem('products');
      console.log(storedProduct)
      if (storedProduct) {
         setListProduct(JSON.parse(storedProduct));
      }
   }, [])



   const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      const newProduct: Product = {
         id: Date.now(),
         Catagory: Catogory,
         ProductName: ProductName,
         Price: parseInt(Price),
         Stock: parseInt(Stock)
      }

      addProductToLocalStorage(newProduct);
      setProductName('');
      setPrice('');
      setCatogory('');
      setStock('');
   }

   //add item
   const addProductToLocalStorage = (product: Product) => {

      const exsitingProduct = localStorage.getItem("products");
      let products: Product[] = [];

      if (exsitingProduct) {
         products = JSON.parse(exsitingProduct);

      }
      setListProduct((prev) => {
         const updated = [...prev, product];
         localStorage.setItem('products', JSON.stringify(updated));
         return updated;
      });
   };

   //Delete Item
   const deleteItem = (id: number) => {
      const updated = listproduct.filter((item) => item.id !== id);
      setListProduct(updated);
      localStorage.setItem('products', JSON.stringify(updated));
   };

   return (
      <><div>
         <nav className="bg-blue-400  shadow fixed top-0 left-0 w-full z-10">
            <div className="flex items-center justify-between px-6 py-3">
            <div><h2>Swift Shop</h2>
            <span className="text-sm text-gray-800"> Inventory Dashboard</span>
            </div>

            
            <ThemeToggle/>
            </div>
         </nav>

      </div>


         <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 mb-8 mt-20 relative">
            <div className="flex flex-col md:flex-row items-center gap-3">
               <span>Fill The Details</span>
               <div>
                  <label htmlFor="Catogory" >Catagory:</label>
                  <input className="w-full border rounded-lg" id="Catogory" type="text" value={Catogory} onChange={(e) => setCatogory(e.target.value)} required />
               </div>
               <div>
                  <label htmlFor="ProductName" >Product Name:</label>
                  <input className="w-full border rounded-lg" id="ProductName" type="text" value={ProductName} onChange={(e) => setProductName(e.target.value)} required />
               </div>
               <div>
                  <label htmlFor="Price" >Price:</label>
                  <input className="w-full border rounded-lg" id="Price" type="number" value={Price} onChange={(e) => setPrice(e.target.value)} required />
               </div>
               <div>
                  <label htmlFor="Stock" >Stock:</label>
                  <input className="w-full border rounded-lg" id="Stock" type="number" value={Stock} onChange={(e) => setStock(e.target.value)} required />
               </div>
            </div>
            <button type="submit" className="w-full md:w-auto bg-blue-500 mt-2 text-white px-5 py-2 rounded-lg hover:bg-blue-700 trasition"> Add Product</button>
         </form>

         <hr />
         <ProductList/>
       
<hr />
        


      </>
   );
};

export default Home;