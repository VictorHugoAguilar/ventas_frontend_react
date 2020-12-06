import React, { useState, useContext } from 'react'
import { ClienteContext } from '../../context/cliente/ClienteContext';
import ItemCliente from './ItemCliente';

const TableCliente = () => {

    const { clientesList } = useContext(ClienteContext);

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
                    {clientesList?.map((cliente, index) => <ItemCliente cliente={cliente} key={index} />)}
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;