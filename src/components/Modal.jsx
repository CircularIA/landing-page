/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
    relation: 'trabajo',
    name: '',
    represent: 'presidente',
    email: '',
    message: ''
}

const validationSchema = yup.object().shape({
    relation: yup.string().required("Por favor seleccione una opción"),
    name: yup.string().required("Por favor ingrese su nombre"),
    represent: yup.string().required("Por favor seleccione una opción"),
    email: yup.string().email("Por favor ingrese un correo válido").required("Por favor ingrese su correo"),
    message: yup.string()
});

// Alert
{/* <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Holy smokes!</strong>
  <span class="block sm:inline">Something seriously bad happened.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div> */}


const Modal = ({ isOpen, onClose }) => {
    const modalContentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(isOpen);
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 500); // 500ms es la duración de la animación
        }
    }, [isOpen]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && modalContentRef.current && !modalContentRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose, isOpen]);

    if (!isVisible) {
        return null;
    }
    const sendMail = async (values, onSubmitProps) => {

        const savedEmailResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mail/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const savedEmail = await savedEmailResponse.json();
        onSubmitProps.resetForm();
        if (savedEmail) {
            alert('Mensaje enviado con éxito');
            onClose();
        } else {
            alert('Error al enviar el mensaje');
        }

    }

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 ${isOpen ? 'fadeIn' : 'fadeOut'}`}>
            <div ref={modalContentRef} className="modal-container bg-white rounded shadow-lg relative">
                {/* Franja verde superior */}
                <div className="green-top-container w-full flex items-center">
                    <h3 className='top-container-text text-xl 2k:text-2xl 4k:text-4xl'>Formulario de contacto</h3>
                    <button onClick={onClose} className="close-button">X</button>
                </div>


                {/* Contenido del modal */}

                {/* Título */}
                <h2 className="hablemos-text text-lg 2k:text-2xl 4k:text-3xl">¡Hablemos!</h2>

                {/* Formulario con margin left y right del 6% */}
                <div className="px-4 sm:px-14 text-sm">
                    <Formik
                        onSubmit={sendMail}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBur,
                            handleChange,
                            handleSubmit,
                            resetForm
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="flex space-x-4 mb-4">
                                    {/* Campo dropdown */}
                                    <div className="w-1/2">
                                        <label className="block font-semibold 2k:text-xl 4k:text-2xl">Escribo en relación a:</label>
                                        <Field
                                            as="select"
                                            className="border p-2 w-full 2k:text-xl 4k:text-2xl text-gray-500"
                                            placeholder="Por favor seleccione"
                                            name="relation"
                                            value={values.relation}
                                            onChange={handleChange}
                                            errors={errors.relation}
                                        >
                                            <option value="trabajo" selected >Trabajo</option>
                                            <option value="contacto">Contacto</option>
                                            <option value="otro">Otro</option>
                                        </Field>
                                    </div>
                                    {/* Campo de nombre */}
                                    <div className="w-1/2">
                                        <label className="block font-semibold 2k:text-xl 4k:text-2xl">Nombre:</label>
                                        <Field
                                            className="border p-2 w-full 2k:text-xl 4k:text-2xl"
                                            type="text"
                                            placeholder="Ej: Fulanito Perez"
                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}
                                            errors={errors.name}
                                        ></Field>
                                    </div>
                                </div>

                                <div className="flex space-x-4 mb-4">
                                    {/* Campo dropdown */}
                                    <div className="w-1/2">
                                        <label className="block font-semibold 2k:text-xl 4k:text-2xl">En representación de:</label>
                                        <Field
                                            as="select"
                                            className="border p-2 w-full 2k:text-xl 4k:text-2xl text-gray-500"
                                            placeholder="Por favor seleccione"
                                            name="represent"
                                            value={values.represent}
                                            onChange={handleChange}
                                            errors={errors.represent}
                                        >
                                            <option value="presidente">Presidente</option>
                                            <option value="gerente">Gerente</option>
                                            <option value="otro">Otro</option>
                                        </Field>
                                    </div>
                                    {/* Campo de email */}
                                    <div className="w-1/2">
                                        <label className="block font-semibold 2k:text-xl 4k:text-2xl">Correo:</label>
                                        <Field
                                            className="border p-2 w-full 2k:text-xl 4k:text-2xl"
                                            type="email"
                                            placeholder="Ej: fulanito"
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            errors={errors.email}
                                        />
                                    </div>
                                </div>

                                {/* Campo de mensaje */}
                                <div className="mb-4">
                                    <label className="block font-semibold 2k:text-xl 4k:text-2xl">Tu mensaje:</label>
                                    <Field
                                        className="border p-2 w-full h-32 2k:h-60 4k:h-80 2k:text-xl 4k:text-2xl"
                                        as="textarea"
                                        maxLength="2000"
                                        placeholder="Escribe tu mensaje aquí"
                                        name='message'
                                        value={values.message}
                                        onChange={handleChange}
                                        errors={errors.message}
                                    />
                                    <p className="text-right text-sm 2k:text-lg 4k:text-xl text-gray-600">Máximo 2000 carácteres</p>
                                </div>

                                {/* Botón de enviar */}
                                <div className='button-container'>
                                    <button type="submit" className="modal-button 2k:text-2xl 4k:text-3xl">Enviar</button>
                                </div>
                            </form>
                        )
                        }
                    </Formik>
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
