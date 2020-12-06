import * as React from 'react';

const ItemCliente = ({ cliente }) => {

    const modificarCliente = () => {
        console.log('modificando...');
    }

    const eliminandoCliente = () => {
        console.log('eliminando...');
    }

    return (
        <tr>
            <td>
                <button
                    className="button is-small is-info mr-1"
                    title="Modificar"
                    onClick={() => modificarCliente()}
                >
                    <span className="icon is-small">
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button
                    className="button is-small is-danger"
                    title="Eliminar"
                    onClick={() => eliminandoCliente()}
                >
                    <span className="icon is-small">
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td> {cliente.nombres} </td>
            <td> {cliente.apellidos}</td>
            <td> {cliente.direccion}</td>
            <td> {cliente.telefono} </td>
            <td> {cliente.email} </td>
        </tr>
    );
}

export default ItemCliente;