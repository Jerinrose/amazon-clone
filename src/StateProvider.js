import React , {createContext,useContext,useReducer} from "react";

// Prepares the datalayer(layer where when items added to cart is pushed)
export const StateContext = createContext();

export const StateProvider = ({ reducer,intialState,children}) => (
      <StateContext.Provider value={useReducer(reducer,intialState)}>
            {children}
      </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = ( ) =>  useContext(StateContext);