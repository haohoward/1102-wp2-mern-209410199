import React, { useReducer, useContext } from 'react';
import reducer_99 from './reducer_99';
import { DISPLAY_ALERT, CLEAR_ALERT } from './action_99';
const initialState = {
  isLoding: false,
  showAlert: false,
  alertText: '',
  altertType: '',
};

const AppContext_99 = React.createContext();

const AppProvider_99 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_99, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  return (
    <AppContext_99.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext_99.Provider>
  );
};

const useAppContext=()=>{
    return useContext(AppContext_99)
}

export {AppProvider_99,initialState,useAppContext}