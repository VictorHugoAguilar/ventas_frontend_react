import React from 'react';
import FormCliente from '../Components/clientes/FormCliente';
import TableCliente from '../Components/clientes/TableCliente';
import ToolbarCliente from '../Components/clientes/ToolbarCliente';
import Layout from '../Components/common/Layout';
import ModalCliente from '../Components/common/ModalCliente';


const Clientes = () => {

    return (
        <Layout >
            <div className="panel">
                <div className="panel-heading">
                    Clientes
                </div>
                <div className="box">
                    <ToolbarCliente />
                    <TableCliente />
                </div>
            </div>

            <ModalCliente>
                <FormCliente /> 
            </ModalCliente>
        </Layout>
    );

}

export default Clientes;