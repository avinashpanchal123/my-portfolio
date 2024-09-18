import {  createContext } from "react";

export const ThemeContext = createContext({
    isDarkMode : true,
    changeTheme : ()=>{

    }
})


export const ThemeContextProvider = ThemeContext.Provider;

