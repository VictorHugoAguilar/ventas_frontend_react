import React, { useState } from 'react'
import ItemCliente from './ItemCliente';

const TableCliente = () => {
    // eslint-disable-next-line  
    const [clienteList, setClienteList] = useState([
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
    ]);

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
                    {clienteList?.map(( cliente, index) => <ItemCliente cliente={cliente} key={index} /> )}
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;