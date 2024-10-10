import {createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

export function AppProvider({children}){

    const currencySymbol = '$'
    const value ={
        doctors,
        currencySymbol
    }

    return(
        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>
    )
}