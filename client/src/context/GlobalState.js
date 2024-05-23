import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
    stats: {
        id: 1, 
        horsepower: '747 HP',
        engine: 'V6',
        energy: '4 MJ',
        displacement: '1600 cc',
        power: '120 kW'
    }

}

//Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        stats: state.stats
    }}>
        {children}
    </GlobalContext.Provider>);
} 


