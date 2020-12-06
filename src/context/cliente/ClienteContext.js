import React, { createContext, useReducer } from 'react';
import ClienteReducer from '../../reducer/ClienteReducer';
import { ELIMINAR_CLIENTE, MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../../Constantes/actionTypes';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2'


export const ClienteContext = createContext();

export const ClienteContextProvider = props => {

    const initialState = {
        clientesList: [],
        clienteActual: null
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    const obtenerClientes = async () => {
        /*
        const resultado = await Axios.get('/clientes');
        const clientes = resultado.data;
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
        */

        await Axios.get('/clientes').then(res => {
            // console.log(res.data);
            dispatch({
                type: OBTENER_CLIENTES,
                payload: res.data
            })
        }).catch(e => {
            console.error(e);
            Swal.fire({
                icon: 'error',
                title: 'Fallo en la carga de datos',
                text: e,
                toast: true
            })
        })
    }

    const registrarCliente = async (cliente) => {
        /*
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
        */

        try {
            const resultado = await Axios.post('/clientes', cliente);

            dispatch({
                type: REGISTRAR_CLIENTE,
                payload: resultado.data
            });

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registro Almacenado',
                showConfirmButton: false,
                timer: 1500,
                toast: true
            })
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
                toast: true
            });
        }
    }

    const obtenerCliente = async (cliente) => {
        /*
        console.log('obtenerCliente')

        dispatch({
            type: OBTENER_CLIENTE,
            payload: cliente
        });
        */
        try {
            let clienteEncontrado = null;
            if (cliente) {
                const resultado = await Axios.get(`/clientes/${cliente.idCliente}`);
                console.log(resultado);
                clienteEncontrado = resultado.data;
            } else {
                clienteEncontrado = cliente;
            }

            dispatch({
                type: OBTENER_CLIENTE,
                payload: clienteEncontrado
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
                toast: true
            });
        }
    }

    const actualizarCliente = async cliente => {

        try {
            const resultado = await Axios.put('/clientes', cliente);

            dispatch({
                type: MODIFICAR_CLIENTE,
                payload: resultado.data
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cliente modificado correctamente',
                showConfirmButton: false,
                timer: 1500,
                toast: true
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
                toast: true
            });
        }
    }

    const eliminarCliente = async idCliente => {
        try {

            Swal.fire({
                title: '¿Desea continuar?',
                showDenyButton: true,
                confirmButtonText: `Confirmar`,
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                const resultado = await Axios.delete(`/clientes/${idCliente}`);
                console.log();

                dispatch({
                    type: ELIMINAR_CLIENTE,
                    payload: idCliente
                });

                if (result.isConfirmed) {
                    if (resultado.status === 200) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Cliente eliminado correctamente',
                            showConfirmButton: false,
                            timer: 1500,
                            toast: true
                        });
                    }
                } else if (result.isDenied) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'info',
                        title: 'Cliente no eliminado correctamente',
                        showConfirmButton: false,
                        timer: 1500,
                        toast: true
                    });
                }
            })
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
                toast: true
            });
        }
    }

    return (
        <ClienteContext.Provider
            value={{
                clientesList: state.clientesList,
                clienteActual: state.clienteActual,
                obtenerClientes,
                registrarCliente,
                obtenerCliente,
                actualizarCliente,
                eliminarCliente
            }}>
            {props.children}
        </ClienteContext.Provider>
    );
}

