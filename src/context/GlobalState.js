import React, { useReducer, createContext } from "react";
import AppReducer from './AppReducer'; 

//Initial state 
const InitialState = {
    transactions :[]
}

// Create context
export const GlobalContext = createContext(InitialState);

//Provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState)

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })

    }
    const addTransaction = (transaction) => {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })

    }

    return (<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}