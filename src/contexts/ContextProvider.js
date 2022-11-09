import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    char: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);

    const hendleClick = (cliced) => {
        setIsClicked({ ...initialState, [cliced]: true })
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            hendleClick,
            screenSize,
            setscreenSize
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);