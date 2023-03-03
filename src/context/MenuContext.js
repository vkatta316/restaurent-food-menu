import { createContext, useState} from "react";

const MenuContext = createContext()

export const MenuProvider = ({children}) =>{

    return <MenuContext.Provider>
        {children}
    </MenuContext.Provider>
}

export default MenuContext;