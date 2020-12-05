import React from 'react';
import TableCliente from '../Components/clientes/TableCliente';
import Layout from '../Components/common/Layout';


const Clientes = () => {

    return (
        <Layout >
            <div className="panel">
                <div className="panel-heading">
                    Clientes
                </div>
                <div className="box">
                    <div className="container">
                        <button className="button is-primary" title="Añadir nuevo registro">
                            <span className="icon is-small">
                                <i className="fas fa-plus"></i>
                            </span>
                            <span>
                                Registrar Nuevo
                            </span>
                        </button>
                    </div>

                <TableCliente />
                 
                </div>
            </div>
        </Layout>
    );

}

export default Clientes;