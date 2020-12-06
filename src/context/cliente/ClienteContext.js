import React, { createContext, useState, useReducer } from 'react';
import ClienteReducer from '../../reducer/ClienteReducer';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {

    const initialState = {
        clientesList: []
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    return (
        <ClienteContext.Provider
            value={{
                    clientesList: state.clientesList,
            }}>
            {props.children}
        </ClienteContext.Provider>
    );
}

