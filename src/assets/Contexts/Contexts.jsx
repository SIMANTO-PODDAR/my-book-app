import { createContext, useState } from "react";

export const readListContext = createContext();

const Contexts = ({ children }) => {

    const [readList, setReadList] = useState([])

    const readAndSetRead = { readList, setReadList };

    return (

        <readListContext.Provider value={readAndSetRead}>

            {children}

        </readListContext.Provider>
    );
};

export default Contexts;