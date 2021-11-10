import { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { usersData, setData, getData } from "../data";
import { useEffect } from "react";

const initialState = {
  chat: usersData,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const checkStorage = (e) => {
      if (e.newValue) {
        dispatch({
          type: "UPDATE_STATE",
          state: JSON.parse(e.newValue),
        });
      }
    };
    
    if (getData) {
      dispatch({
        type: "UPDATE_STATE",
        state: getData,
      });
    } else {
      setData(state.chat);
    }

    window.addEventListener("storage", checkStorage);

    return () => window.removeEventListener("storage", checkStorage);
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
