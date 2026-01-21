import React, {createContext,useState,useEffect,useContext} from "react";

interface  CartItem{
    id:number;
    name:string;
    price : number;
    quantity : number;
}

interface   CartContextType{
    cart: CartItem[];


}

const CartContext = createContext<CartContextType> | null> (null);

const addToCart = 