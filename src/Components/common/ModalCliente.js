import React,  {useContext} from 'react'
import { ModalContext } from '../../context/modal/ModalContext';
import FormCliente from '../clientes/FormCliente';

const ModalCliente = (props) => {

    const { showModal, modalTitle, setShowModal, setModalTitle} = useContext(ModalContext);

    const cerrarModal = () => {
        console.log('cerrando modal...');
        setShowModal(false);
        setModalTitle('');
    }

    return (
        <div className={`modal ${ showModal? 'is-active ' : ''}`}>
            <div className="modal-background">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p  className="modal-card-title"> {modalTitle} </p>
                        <button className="delete"
                            aria-label="close"
                            onClick={ () => cerrarModal() }
                        >
                        </button>
                    </header>
                    <section className="modal-card-body">
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalCliente;