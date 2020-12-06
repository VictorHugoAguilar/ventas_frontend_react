import React, {useContext} from 'react'

import { ModalContext } from '../../context/modal/ModalContext';


const ToolbarCliente = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const abrirModalCrear = () => {
        console.log('agregando ...');
        setModalTitle('Agregar nuevo cliente')
        setShowModal(true);
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