import React, { useEffect, useContext } from 'react'
import { ClienteContext } from '../../context/cliente/ClienteContext';
import ItemCliente from './ItemCliente';

const TableCliente = () => {

    const { clientesList, obtenerClientes } = useContext(ClienteContext);

    useEffect(() => {
        obtenerClientes();
        // eslint-disable-next-line
    }, []);

    if (clientesList.length === 0) {
        return (
            <div class="notification is-warning is-light mt-4">
                <center>
                    <p>No existen datos</p>
                </center>
            </div>
        );
    }

    return (
        <div className="table-container">
            <table className="table  is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList?.map(cliente => (
                            <ItemCliente cliente={cliente} key={cliente.idCliente} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;