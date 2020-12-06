import React, { createContext, useReducer } from 'react';
import ClienteReducer from '../../reducer/ClienteReducer';
import { MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../../Constantes/actionTypes';
import { v4 as uuidv4 } from 'uuid';


export const ClienteContext = createContext();

export const ClienteContextProvider = props => {

    const initialState = {
        clientesList: [],
        clienteActual: null
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    const obtenerClientes = () => {
        const clientes = [
            {
                "idCliente": 2,
                "nombres": "victor hugo",
                "apellidos": "aguilar aguilar",
                "direccion": "diosa tanit 5 1D",
                "telefono": "627100491",
                "email": "victor@correo.com"
            },
            {
                "idCliente": 3,
                "nombres": "Paula Valeria",
                "apellidos": "Rodriguez Alvarez",
                "direccion": "diosa tanit 5 1D",
                "telefono": "666595467",
                "email": "paula@correo.com"
            }
        ];
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }

    const registrarCliente = (cliente) => {

        let idVariable = uuidv4();

        let clienteTemp = {
            ...cliente,
            idCliente: idVariable
        }

        console.log(clienteTemp);

        dispatch({
            type: REGISTRAR_CLIENTE,
            payload: clienteTemp
        });
    }

    const obtenerCliente = (cliente ) => {

        console.log('obtenerCliente')

        dispatch({
            type: OBTENER_CLIENTE,
            payload: cliente
        });
    }

    const actualizarCliente = cliente => {
        dispatch({
            type: MODIFICAR_CLIENTE,
            payload: cliente
        });
    }


    return (
        <ClienteContext.Provider
            value={{
                clientesList: state.clientesList,
                clienteActual: state.clienteActual,
                obtenerClientes,
                registrarCliente,
                obtenerCliente,
                actualizarCliente
            }}>
            {props.children}
        </ClienteContext.Provider>
    );
}

