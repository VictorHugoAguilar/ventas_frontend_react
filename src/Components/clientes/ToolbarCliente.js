import * as React from 'react';


const ToolbarCliente = () => {

    const abrirModalCrear = () => {
        console.log('agregando ...');
    }

    return (
        <div className="container">
            <button 
                className="button is-primary" 
                title="Añadir nuevo registro"
                onClick={ () => abrirModalCrear() }
            >
                <span className="icon is-small">
                    <i className="fas fa-plus"></i>
                </span>
                <span>
                    Registrar Nuevo
                </span>
            </button>
        </div>
    );
}


export default ToolbarCliente;