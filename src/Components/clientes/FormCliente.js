import React, { useState, useContext } from 'react'
import { ModalContext } from '../../context/modal/ModalContext';

const FormCliente = () => {

    const { setShowModal } = useContext(ModalContext);

    const cerrarModal = () => {
        console.log('cerrando modal...');
        limpiarForm();
        setShowModal(false);
    }

    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const limpiarForm = () => {
        setMensaje(null);
        setCliente(clienteDefault);
    }

    const clienteDefault = {
        nombres: '',
        apellidos: '',
        direccion: '',
        telefono: '',
        email: ''
    }

    const [cliente, setCliente] = useState(clienteDefault);
    const [mensaje, setMensaje] = useState(null);

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log('enviando formulario...');
        console.log(cliente);

        //validar
        if (cliente.nombres.trim() === '' && cliente.apellidos.trim() === '' && cliente.email.trim() === '') {
            setMensaje('Los nombres, apellidos y el email son obligatorios.');
            return;
        }

        limpiarForm();

    }

    return (
        <form onSubmit={handleOnSubmit}>
            { mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Nombre Completo</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Nombre"
                                name="nombres"
                                value={cliente.nombres}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Apellidos"
                                name="apellidos"
                                value={cliente.apellidos}
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Direccion</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Ingrese su direccion"
                                name="direccion"
                                value={cliente.direccion}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Telefono</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Telefono"
                                name="telefono"
                                value={cliente.telefono}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-phone"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Email</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="email"
                                placeholder="Ingrese su Email"
                                name="email"
                                value={cliente.email}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-primary mr-1">Guardar</button>
                            <button
                                type="button"
                                className="button"
                                onClick={() => cerrarModal()}
                            >Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormCliente;