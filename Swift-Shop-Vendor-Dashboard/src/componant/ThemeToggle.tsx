import React from "react";
import { useTheme } from "../hooks/useTheme";


export const ThemeToggle = ()=>{

    const{theme , toggletheme} = useTheme();

    return(
        <button onClick={toggletheme} 
         className="p-2 rounded-md border border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
};