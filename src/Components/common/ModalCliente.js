import React,  {useContext} from 'react'
import { ModalContext } from '../../context/modal/ModalContext';

const ModalCliente = (props) => {

    const { showModal, titleModal, setShowModal } = useContext(ModalContext);

    const cerrarModal = () => {
        console.log('cerrando modal...');
        setShowModal(false);
    }

    return (
        <div className={`modal ${ showModal? 'is-active ' : ''}`}>
            <div className="modal-background">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p  className="modal-card-title"> {titleModal} </p>
                        <button className="delete"
                            aria-label="close"
                            onClick={ () => cerrarModal() }
                        >
                        </button>
                    </header>
                    <section className="modal-card-body">
                        Contenido
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalCliente;