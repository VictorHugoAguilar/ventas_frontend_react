import React from 'react'

const TableCliente = () => {

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
                    <tr>
                        <td>
                            <button className="button is-small is-info mr-1" title="Modificar">
                                <span className="icon is-small">
                                    <i className="fas fa-edit"></i>
                                </span>
                            </button>
                            <button className="button is-small is-danger" title="Eliminar">
                                <span className="icon is-small">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </button>
                        </td>
                        <td>Victor</td>
                        <td>Aguilar</td>
                        <td>Diosa</td>
                        <td>627100491</td>
                        <td>victor@correo.com</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;