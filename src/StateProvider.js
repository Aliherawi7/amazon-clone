import React,{createContext, useContext, useReducer} from 'react'

// prepares the data layer
export const StateContext = createContext()

//wrap out app and provide the data layer
const StateProvider =({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pull the information from the data layer
export const useStateValue = () => useContext(StateContext);

export default StateProvider