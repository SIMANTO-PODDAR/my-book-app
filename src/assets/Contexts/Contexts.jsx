import { createContext, useState } from "react";

export const readListContext = createContext();
export const wishListContext = createContext();

const Contexts = ({ children }) => {

    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])

    const readAndSetRead = { readList, setReadList, wishList, setWishList };

    return (

        <readListContext.Provider value={readAndSetRead}>

            {children}

        </readListContext.Provider>
    );
};

export default Contexts;