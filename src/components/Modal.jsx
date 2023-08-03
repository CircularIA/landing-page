/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="modal-container bg-white rounded shadow-lg relative">
                {/* Franja verde superior */}
                <div className="green-top-container">
                    <h3 className='top-container-text'>Formulario de contacto</h3>
                    <button onClick={onClose} className="close-button">X</button>
                </div>

                {/* Contenido del modal */}

                {/* Título */}
                <h2 className="hablemos-text">¡Hablemos!</h2>

                {/* Formulario con margin left y right del 6% */}
                <div className="px-14 text-sm">
                    <form>
                        <div className="flex space-x-4 mb-4">
                            {/* Campo dropdown */}
                            <div className="w-1/2">
                                <label className="block font-semibold">Escribo en relación a:</label>
                                <select className="border p-2 w-full text-gray-500" placeholder="Por favor seleccione">
                                    <option value="" disabled selected>Por favor seleccione</option>
                                    {/* Otras opciones aquí */}
                                </select>
                            </div>
                            {/* Campo de nombre */}
                            <div className="w-1/2">
                                <label className="block font-semibold">Nombre:</label>
                                <input className="border p-2 w-full" type="text" placeholder="Ej: Fulanito Perez" />
                            </div>
                        </div>

                        <div className="flex space-x-4 mb-4">
                            {/* Campo dropdown */}
                            <div className="w-1/2">
                                <label className="block font-semibold">Hablo en representación de:</label>
                                <select className="border p-2 w-full text-gray-500" placeholder="Por favor seleccione">
                                    <option value="" disabled selected>Por favor seleccione</option>
                                    {/* Otras opciones aquí */}
                                </select>
                            </div>
                            {/* Campo de email */}
                            <div className="w-1/2">
                                <label className="block font-semibold">Correo:</label>
                                <input className="border p-2 w-full" type="email" placeholder="Ej: fulanito.perez@gmail.com" />
                            </div>
                        </div>

                        {/* Campo de mensaje */}
                        <div className="mb-4">
                            <label className="block font-semibold">Tu mensaje:</label>
                            <textarea className="border p-2 w-full h-32" maxLength="2000"></textarea>
                            <p className="text-right text-sm text-gray-600">Máximo 2000 carácteres</p>
                        </div>

                        {/* Botón de enviar */}
                        <div className='button-container'>
                            <button type="submit" className="modal-button">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
