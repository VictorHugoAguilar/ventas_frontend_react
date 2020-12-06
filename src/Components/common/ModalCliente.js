import React from 'react'


const ModalCliente = (props) => {

    const cerrarModal = () => {
        console.log('cerrando modal...');
    }

    return (
        <div className="modal is-active">
            <div className="modal-background">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p  className="modal-card-title">Crear Cliente</p>
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