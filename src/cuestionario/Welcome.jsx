/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Likert from 'react-likert-scale'
import { useNavigate } from 'react-router-dom'
import "./index.css"
import { CSSTransition } from 'react-transition-group'
import WelcomeImg from '../assets/welcome.svg'
import questionimg1_1 from '../assets/questionimg1_1.jpg'
import questionimg1_2 from '../assets/questionimg1_2.jpg'
import questionimg2_1 from '../assets/questionimg2_1.jpg'
import questionimg2_2 from '../assets/questionimg2_2.jpg'
import questionimg3_1 from '../assets/questionimg3_1.jpg'
import extra3_1 from '../assets/extra3_1.jpg'
import questionimg3_2 from '../assets/questionimg3_2.jpg'
import questionimg4_1 from '../assets/questionimg4_1.jpg'
import questionimg4_2 from '../assets/questionimg4_2.jpg'
import questionimg4_3 from '../assets/questionimg4_3.jpg'
import extra4_3 from '../assets/extra4_3.jpg'
import questionimg5_1 from '../assets/questionimg5_1.jpg'
import questionimg5_2 from '../assets/questionimg5_2.jpg'
import questionimg5_3 from '../assets/questionimg5_3.jpg'
import questionimg6_1 from '../assets/questionimg6_1.jpg'
import questionimg7_2 from '../assets/questionimg7_2.jpg'
import questionimg7_3 from '../assets/questionimg7_3.jpg'
import logometric1_6 from '../assets/logo-metric1-6.svg'
import thanks_bg from '../assets/bg-thanks.svg'
import { Radio } from "@material-tailwind/react";

const Welcome = () => {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [areButtonsEnabled, setAreButtonsEnabled] = useState(false);
    const [visitedPages, setVisitedPages] = useState([]);
    const [responses, setResponses] = useState({
        'Pregunta 1.1': '',
        'Pregunta 1.2': [],
        'Extra 1.2': '',
        'Pregunta 2.1': '',
        'Pregunta 2.2': '',
        'Pregunta 3.1': '',
        'Extra 3.1': '',
        'Pregunta 3.2': '',
        'Pregunta 3.3': [],
        'Pregunta 4.1': '',
        'Pregunta 4.2': '',
        'Pregunta 4.3': '',
        'Extra 4.3': '',
        'Pregunta 5.1': '',
        'Pregunta 5.2': '',
        'Pregunta 5.3': '',
        'Pregunta 6.1': '',
        'Pregunta 6.2': '',
        'Extra 6.2': '',
        'Pregunta 7.1': '',
        'Extra 7.1': '',
        'Pregunta 7.2': '',
        'Pregunta 7.3': '',
    });

    const handleRadioChange = (itemIndex, level) => {
        setResponses(prevResponses => {
            const newResponses = {
                ...prevResponses,
                'Pregunta 3.3': {
                    ...prevResponses['Pregunta 3.3'],
                    [itemIndex]: level
                }
            };

            // Verificar si todos los campos están seleccionados
            const allFieldsSelected = Object.keys(newResponses['Pregunta 3.3']).length === 9; // Total de items a responder

            // Habilitar o deshabilitar los botones basado en si todos los campos están seleccionados
            setAreButtonsEnabled(allFieldsSelected);

            return newResponses;
        });
    };

    const handleTextChange = (questionKey, newValue) => {
        setResponses({
            ...responses,
            [questionKey]: newValue,
        });
    };

    const likertOptions = {
        responses: [
            { value: "No importante en absoluto", text: "No importante en absoluto" },
            { value: "Ligeramente importante", text: "Ligeramente importante" },
            { value: "Moderadamente importante", text: "Moderadamente importante" },
            { value: "Muy importante", text: "Muy importante" },
            { value: "Extremadamente importante", text: "Extremadamente importante" }
        ].map(response => ({
            ...response,
            checked: response.value === responses['Pregunta 7.1']
        })),
        onChange: val => {
            setResponses(prevResponses => ({
                ...prevResponses,
                'Pregunta 7.1': val.value
            }));
            setAreButtonsEnabled(true);
        }
    };

    const submitSurvey = async () => {
        try {
            console.log(responses)
            const surveyData = {
                name: nombre,
                email: correo,
                responses: responses,
            };
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/survey/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(surveyData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);  // Debería imprimir "Survey saved successfully" si todo va bien
                handleNextQuestion()

            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const handleNextQuestion = () => {
        let nextQuestion = currentQuestion + 1;
        if (nextQuestion === 3 && !(responses['Pregunta 1.1'] === 'Sí')) {
            nextQuestion++; // Saltar la próxima pregunta
        }
        if (nextQuestion === 7 && !['Extremadamente positivo', 'Muy positivo'].includes(responses['Pregunta 3.1'])) {
            nextQuestion++;
        }
        if (nextQuestion === 13 && responses['Pregunta 4.3'] === 'Neutral') {
            nextQuestion++;
        }
        if (!visitedPages.includes(currentQuestion)) {
            setVisitedPages([...visitedPages, currentQuestion]);
        }
        if (!visitedPages.includes(nextQuestion)) {
            setAreButtonsEnabled(false);
        }
        setCurrentQuestion(nextQuestion);
    };

    const handlePreviousQuestion = () => {
        let previousQuestion = currentQuestion - 1;
        if (previousQuestion === 3 && !(responses['Pregunta 1.1'] === 'Sí')) {
            previousQuestion--; // Saltar la pregunta anterior
        }
        if (previousQuestion === 7 && !['Extremadamente positivo', 'Muy positivo'].includes(responses['Pregunta 3.1'])) {
            previousQuestion--;
        }
        if (previousQuestion === 13 && responses['Pregunta 4.3'] === 'Neutral') {
            previousQuestion--;
        }
        if (visitedPages.includes(previousQuestion)) {
            setAreButtonsEnabled(true);
        }
        setCurrentQuestion(previousQuestion);
    };

    const width = window.innerWidth

    function handleUniqueResponse(question, answer) {
        setResponses(prevResponses => {
            const newResponses = {
                ...prevResponses,
                [question]: answer
            };

            // Habilitar o deshabilitar botones basado en las nuevas respuestas
            if (answer !== '') {
                setAreButtonsEnabled(true);
            }
            return newResponses;
        });
    }

    const handleMultipleResponses = (question, answer) => {
        setResponses(prevResponses => {
            const newResponses = { ...prevResponses };
            const currentQuestionResponses = newResponses[question] || [];

            if (currentQuestionResponses.includes(answer)) {
                // Remover la respuesta si ya está presente
                newResponses[question] = currentQuestionResponses.filter(a => a !== answer);
            } else {
                // Añadir la respuesta si no está presente
                newResponses[question] = [...currentQuestionResponses, answer];
            }
            if (newResponses[question].includes('Otro')) {
                setShowOtherInput(true)
            }

            // Habilitar o deshabilitar botones basado en las nuevas respuestas
            if (newResponses[question].length > 0) {
                setAreButtonsEnabled(true);
            }
            console.log(newResponses['Pregunta 1.2'])
            return newResponses;
        });
    };


    const items = [
        "Evaluar a partir de indicadores",
        "Generar reporte de sustentabilidad",
        "Medir avances hacia metas y objetivos",
        "Generar capacidades internas",
        "Generar recomendaciones de acciones",
        "Enseñar sobre economía circular",
        "Ajustarse a los formatos más utilizados de reportabilidad",
        "Compararte con el promedio de la industria",
        "Detectar tus puntos más débiles/gaps en economía circular"
    ];

    const importanceLevels = [
        "Nada importante",
        "Poco importante",
        "Neutral",
        "Importante",
        "Muy importante",
    ];

    return (
        <div className='animate__animated animate__fadeIn'>
            <CSSTransition
                in={currentQuestion === 1}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                    <div className='h-screen w-full flex flex-col sm:flex-row'>
                        <div className='w-screen  flex flex-col items-center justify-center'>
                            <div className='max-w-4xl w-full'>
                                <img src={WelcomeImg} className='w-60 h-60 mx-auto' alt='Logo' />
                                <h1 className='text-xl text-roboto font-bold text-center mt-5 mb-5'>¡BIENVENIDO/A CIRCULARIA! - CUESTIONARIO INTERACTIVO</h1>
                                <p className='text-roboto text-center text-justify px-2 text-sm sm:text-base'>
                                    Gracias por tomarte el tiempo de participar en este cuestionario interactivo. En CircularIA, estamos comprometidos con la promoción y gestión de la economía circular y la sostenibilidad en el ámbito empresarial. A través de este cuestionario, buscamos entender mejor cómo las empresas perciben y valoran la economía circular, y cómo herramientas digitales como la nuestra pueden ser de utilidad en este proceso. Tu feedback es esencial para nosotros, ya que nos permitirá adaptar y mejorar nuestras soluciones para satisfacer mejor las necesidades de las empresas en este ámbito tan crucial. Por favor, responde con sinceridad y detenimiento. ¡Gracias por ser parte de este viaje hacia un futuro más sostenible!</p>
                                <div className='flex flex-col justify-center items-center mb-5'>
                                    <input
                                        type="text"
                                        placeholder="Introduce tu nombre"
                                        className='mt-3 p-2 border border-black rounded placeholder-gray-600'
                                        style={{ width: '50%' }}
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Introduce tu correo electrónico"
                                        className='mt-3 p-2 border border-black rounded placeholder-gray-600'
                                        style={{ width: '50%' }}
                                        value={correo}
                                        onChange={(e) => {
                                            const email = e.target.value;

                                            // Función para validar el correo electrónico
                                            const isEmailValid = (email) => {
                                                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                return emailPattern.test(email);
                                            };

                                            setAreButtonsEnabled(isEmailValid(email));
                                            setCorreo(email);
                                        }}
                                    />
                                    <button className='button-login' style={{ width: '50%' }} onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                                        ¡Empezar!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 2}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row flex-col sm:flex-row'>
                            <div className='h-1/2 sm:w-1/2 sm:h-full flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-12 md:px-20'>
                                    <h1 className='text-sm lg:text-2xl text-roboto text-justify font-bold mb-5'>Pregunta 1.1: En su empresa, ¿ocupan alguna plataforma o servicio que requiera compartir información sensible?</h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.1'] === 'Sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 1.1', 'Sí')}>
                                        Sí
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.1'] === 'No' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 1.1', 'No')}>
                                        No
                                    </button>
                                </div>

                            </div>
                            <div className='h-1/2 sm:w-1/2 sm:h-full flex items-end justify-end'>
                                <img src={questionimg1_1} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 3}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row flex-col sm:flex-row'>
                            <div className='h-1/5 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_2} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-full sm:h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-xs lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Pregunta 1.2 ¿Qué medidas de seguridad utiliza su empresa al compartir información sensible a través de esta plataforma o servicio? (selección múltiple)
                                    </h1>

                                    {/* Preguntas aquí */}
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('Encriptación') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'Encriptación')}>
                                        Encriptación
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('Autenticación de dos factores') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'Autenticación de dos factores')}>
                                        Autenticación de dos factores
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('VPN (Red Privada Virtual)') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'VPN (Red Privada Virtual)')}>
                                        VPN (Red Privada Virtual)
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('Certificados de seguridad') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'Certificados de seguridad')}>
                                        Certificados de seguridad
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('Control de acceso basado en roles') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'Control de acceso basado en roles')}>
                                        Control de acceso basado en roles
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 1.2'].includes('Otro') ? 'selected' : ''}`} onClick={() => handleMultipleResponses('Pregunta 1.2', 'Otro')}>
                                        Otro
                                    </button>
                                    {showOtherInput && responses['Pregunta 1.2'].includes('Otro') && (
                                        <input
                                            type="text"
                                            className="text-area w-full h-12 mt-3"
                                            maxLength="1000"
                                            value={responses['Extra 1.2']}
                                            placeholder="Por favor especifica"
                                            onChange={(e) => handleUniqueResponse('Extra 1.2', e.target.value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 4}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:h-full sm:w-2/3 flex flex-col items-center justify-center overflow-y-scroll'>
                                <div className='h-full sm:h-auto px-8 sm:px-12 md:px-10 mt-7 sm:mt-0'>
                                    <h1 className='text-xs lg:text-xl text-roboto text-justify font-bold'>Pregunta 2.1: En el contexto de su trabajo actual, ¿qué experiencia tiene en la recolección y análisis de datos relacionados con la economía circular, especialmente en lo que respecta a flujos de recursos (ej. reciclaje, reutilización, renovación), transacciones económicas (ej. modelos de negocio basados en compartir o alquilar) y dinámicas sociales (ej. colaboración comunitaria, comportamientos de consumo sostenible)?</h1>
                                    {/* Preguntas aquí */}
                                    <button className={`button-cuestionary ${responses['Pregunta 2.1'] === 'Experto' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.1', 'Experto')}>
                                        Experto: Recolecto y analizo estos datos regularmente y tengo un profundo entendimiento de cómo se relacionan con la economía circular.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.1'] === 'Intermedio' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.1', 'Intermedio')}>
                                        Intermedio: Ocasionalmente recolecto y analizo estos datos y tengo una comprensión básica de su relación con la economía circular.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.1'] === 'Novato' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.1', 'Novato')}>
                                        Novato: Rara vez recolecto o analizo estos datos y tengo un conocimiento limitado sobre la economía circular.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.1'] === 'Sin experiencia' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.1', 'Sin experiencia')}>
                                        Sin experiencia: No tengo experiencia recolectando o analizando estos datos y no estoy familiarizado con la economía circular.
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/3 flex items-end justify-end'>
                                <img src={questionimg2_1} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 5}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/4 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_2} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12 md:px-10'>
                                    <h1 className='text-xs lg:text-xl text-roboto text-justify font-bold'>Pregunta 2.2: Considerando un software que utiliza inteligencia artificial para automatizar la recolección y análisis de datos relacionados con la economía circular (flujos de recursos, transacciones económicas y dinámicas sociales), ¿qué tan útil cree que sería para usted y su organización?</h1>
                                    {/* Preguntas aquí */}
                                    <button className={`button-cuestionary ${responses['Pregunta 2.2'] === 'Extremadamente útil' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.2', 'Extremadamente útil')}>
                                        Extremadamente útil: Sería una herramienta esencial para nuestras operaciones y decisiones.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.2'] === 'Muy útil' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.2', 'Muy útil')}>
                                        Muy útil: Definitivamente lo consideraríamos para mejorar nuestros procesos.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.2'] === 'Moderadamente útil' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.2', 'Moderadamente útil')}>
                                        Moderadamente útil: Podría ser útil, pero tendríamos que evaluarlo más a fondo.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.2'] === 'Poco útil' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.2', 'Poco útil')}>
                                        Poco útil: No vemos una aplicación inmediata, pero podría tener potencial en el futuro.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 2.2'] === 'Nada útil' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 2.2', 'Nada útil')}>
                                        Nada útil: No creemos que sea relevante para nuestras necesidades.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 6}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-2/3 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-12 md:px-20'>
                                    <h1 className='text-xs lg:text-xl text-roboto text-justify font-bold mb-2'>Pregunta 3.1: Dentro del marco de la economía circular, si tuvieras una herramienta que no
                                        solo integra automáticamente datos con tu sistema actual (como SAP u otras
                                        plataformas) sino que también reduce significativamente el tiempo (horas
                                        hombre) en esfuerzo, ¿cómo evaluarías el impacto en la eficiencia de tu gestión
                                        diaria?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.1'] === 'Extremadamente positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.1', 'Extremadamente positivo')}>
                                        Extremadamente positivo: Sería una transformación total en nuestra gestión,
                                        ahorrando mucho tiempo y esfuerzo.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.1'] === 'Muy positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.1', 'Muy positivo')}>
                                        Muy positivo: Aportaría mejoras significativas y reduciría notablemente las
                                        horas dedicadas a estas tareas.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.1'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.1', 'Neutral')}>
                                        Neutral: No estoy seguro de cuál sería el impacto.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.1'] === 'Poco positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.1', 'Poco positivo')}>
                                        Poco positivo: Puede aportar algo, pero no creo que se reduzca
                                        considerablemente el tiempo.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.1'] === 'Ningún impacto positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.1', 'Ningún impacto positivo')}>
                                        Ningún impacto positivo: No veo cómo podría beneficiarnos en términos de
                                        tiempo y esfuerzo.
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/4 sm:h-full sm:w-1/3 flex items-end justify-end'>
                                <img src={questionimg3_1} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 7}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-2/5 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={extra3_1} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-3/5 sm:h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-12 md:px-10'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Si ha respondido que el impacto sería positivo, ¿en qué áreas específicas de tu
                                        gestión diaria ves mayor potencial de mejora gracias a esta integración y
                                        reducción de tiempo?
                                    </h1>
                                    <textarea
                                        className="text-area w-full h-30"
                                        maxLength="2000"
                                        value={responses['Extra 3.1']}
                                        onChange={(e) => {
                                            handleTextChange('Extra 3.1', e.target.value);
                                            setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 8}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-5 md:px-10'>
                                    <h1 className='text-sm lg:text-2xl text-roboto text-justify font-bold mb-2'>Pregunta 3.2: Basándose en lo que conoce sobre nuestra plataforma, ¿considera que aporta
                                        suficiente valor a su empresa como para adquirirla?</h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.2'] === 'Definitivamente sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.2', 'Definitivamente sí')}>
                                        Definitivamente sí: Veo un gran valor en su plataforma para nuestra empresa.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.2'] === 'Probablemente sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.2', 'Probablemente sí')}>
                                        Probablemente sí: Creo que podría ser beneficioso, pero necesito más
                                        información.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.2'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.2', 'Neutral')}>
                                        Neutral: No estoy seguro de cuál sería el impacto.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.2'] === 'Probablemente no' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.2', 'Probablemente no')}>
                                        Probablemente no: No creo que se adapte completamente a nuestras
                                        necesidades.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 3.2'] === 'Definitivamente no' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 3.2', 'Definitivamente no')}>
                                        Definitivamente no: No veo cómo podría beneficiarnos.
                                    </button>
                                </div>

                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg3_2} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 9}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-row'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <div className='w-full'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-center mb-5'>
                                        Pregunta 3.3: Por favor, evalúe la importancia de las siguientes funcionalidades de nuestra plataforma para su empresa.
                                    </h1>
                                    <div className="border border-black rounded-xl overflow-hidden overflow-x-scroll lg:overflow-x-hidden">
                                        <table className="w-full bg-gray-300 table-responsive">
                                            <thead>
                                                <tr>
                                                    <th className="px-6 align-middle border border-black py-3 border-l-0 border-r-0 border-t-0 text-sm">
                                                    </th>
                                                    {importanceLevels.map(level => (
                                                        <th
                                                            key={level}
                                                            className="px-6 align-middle border border-black py-3 border-l-0 border-r-0 border-t-0 text-xs sm:text-sm">
                                                            {level}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs sm:text-sm whitespace-nowrap p-4 text-left">
                                                            {item}
                                                        </th>
                                                        {importanceLevels.map((level, levelIdx) => (
                                                            <td
                                                                key={levelIdx}
                                                                className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-1">
                                                                <Radio
                                                                    color='green'
                                                                    className='bg-gray-400 border-green-200'
                                                                    icon={
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="h-3 w-3"
                                                                            viewBox="0 0 21 21"
                                                                            fill="currentColor"
                                                                        >
                                                                            <circle cx="10" cy="11" r="9" />
                                                                        </svg>

                                                                    }
                                                                    text="Option"
                                                                    id={`opt-${idx}-${levelIdx}`}
                                                                    name={`opt-${idx}`}
                                                                    value={level}
                                                                    defaultChecked={responses['Pregunta 3.3'][item] === level}
                                                                    onChange={() => handleRadioChange(item, level)}
                                                                />
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 10}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-sm lg:text-2xl text-roboto text-justify font-bold mb-5'>Pregunta 4.1: ¿Qué nivel de prioridad tiene la economía circular en su estrategia actual de
                                        sostenibilidad?</h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.1'] === 'Muy alta prioridad' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.1', 'Muy alta prioridad')}>
                                        Muy alta prioridad: Es fundamental en nuestra estrategia actual.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.1'] === 'Alta prioridad' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.1', 'Alta prioridad')}>
                                        Alta prioridad: Es importante, pero hay otros temas que también abordamos.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.1'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.1', 'Neutral')}>
                                        Neutral: No es ni prioritario ni secundario.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.1'] === 'Baja prioridad' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.1', 'Baja prioridad')}>
                                        Baja prioridad: Lo consideramos, pero no es central en nuestra estrategia.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.1'] === 'Muy baja prioridad' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.1', 'Muy baja prioridad')}>
                                        Muy baja prioridad: Actualmente no lo estamos considerando.
                                    </button>
                                </div>

                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg4_1} className='h-full w-full sm:object-contain md:object-fill' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 11}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg4_2} className='h-full w-full sm:object-contain md:object-fill' alt='Imagen2' />
                            </div>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Pregunta 4.2: De cara al futuro, ¿cómo ve la relevancia de la economía circular para su
                                        empresa?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.2'] === 'Extremadamente relevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.2', 'Extremadamente relevante')}>
                                        Extremadamente relevante: Será fundamental para nuestra supervivencia y
                                        crecimiento.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.2'] === 'Muy relevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.2', 'Muy relevante')}>
                                        Muy relevante: Será uno de los principales enfoques.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.2'] === 'Moderadamente relevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.2', 'Moderadamente relevante')}>
                                        Moderadamente relevante: Lo consideraremos, pero habrá otros temas
                                        igualmente importantes.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.2'] === 'Poco relevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.2', 'Poco relevante')}>
                                        Poco relevante: No lo vemos como una tendencia principal para nosotros.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.2'] === 'Nada relevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.2', 'Nada relevante')}>
                                        Nada relevante: No lo vemos relevante para el futuro de nuestra empresa.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 12}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-xs lg:text-xl text-roboto text-justify font-bold mb-5'>Pregunta 4.3: Dado nuestro enfoque en un sistema inteligente que apoya la implementación
                                        y mejora de la economía circular, ¿considera que una herramienta como esta
                                        sería beneficiosa para que su empresa avance hacia operaciones más
                                        circulares?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.3'] === 'Definitivamente sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.3', 'Definitivamente sí')}>
                                        Definitivamente sí: Veo un gran potencial en este sistema para nuestra
                                        empresa.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.3'] === 'Probablemente sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.3', 'Probablemente sí')}>
                                        Probablemente sí: Puede ser beneficioso, pero necesitaría más información.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.3'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.3', 'Neutral')}>
                                        Neutral: No tengo una opinión formada al respecto.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.3'] === 'Probablemente no' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.3', 'Probablemente no')}>
                                        Probablemente no: No creo que se ajuste a nuestras necesidades actuales.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 4.3'] === 'Definitivamente no' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 4.3', 'Definitivamente no')}>
                                        Definitivamente no: No veo cómo podría beneficiarnos.
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg4_3} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 13}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={extra4_3} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12 md:px-20'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Si ha seleccionado &#39;Definitivamente sí&#39; o &#39;Probablemente sí&#39;, por favor, indique
                                        ¿por qué cree que sería beneficioso para su empresa?
                                    </h1>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Si ha seleccionado
                                        &#39;Probablemente no&#39; o &#39;Definitivamente no&#39;, por favor, indique ¿qué le hace
                                        dudar o pensar que no sería útil?
                                    </h1>
                                    <textarea
                                        className="text-area w-full h-30"
                                        maxLength="2000"
                                        value={responses['Extra 4.3']}
                                        onChange={(e) => {
                                            handleTextChange('Extra 4.3', e.target.value);
                                            setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 14}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-xs lg:text-xl text-roboto text-justify font-bold mb-5'>Pregunta 5.1: Si tuviera un software que le ofrece recomendaciones basadas en
                                        indicadores y estrategias de economía circular, ¿cómo valoraría su impacto
                                        en la eficiencia de la toma de decisiones en su empresa?</h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.1'] === 'Impacto muy positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.1', 'Impacto muy positivo')}>
                                        Impacto muy positivo: Aceleraría significativamente nuestra toma
                                        de decisiones y las haría más efectivas.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.1'] === 'Impacto positivo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.1', 'Impacto positivo')}>
                                        Impacto positivo: Mejoraría nuestra toma de decisiones.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.1'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.1', 'Neutral')}>
                                        Neutral: No estoy seguro si cambiaría nuestra eficiencia en la toma de
                                        decisiones.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.1'] === 'Impacto negativo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.1', 'Impacto negativo')}>
                                        Impacto negativo: Podría complicar o ralentizar nuestra toma de
                                        decisiones.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.1'] === 'Impacto muy negativo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.1', 'Impacto muy negativo')}>
                                        Impacto muy negativo: Sería un obstáculo en nuestro proceso de
                                        decisión.
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg5_1} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 15}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg5_2} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Pregunta 5.2: ¿Considera que identificar procesos clave que requieren rediseño o inversión es
                                        esencial para transitar hacia la economía circular en su empresa?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.2'] === 'Esencial' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.2', 'Esencial')}>
                                        Esencial: Identificar estos procesos es fundamental para nuestra transición.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.2'] === 'Importante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.2', 'Importante')}>
                                        Importante: Es una parte significativa pero no la única en nuestra transición.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.2'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.2', 'Neutral')}>
                                        Neutral: No tengo una opinión formada al respecto.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.2'] === 'De menor importancia' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.2', 'De menor importancia')}>
                                        De menor importancia: Puede ser útil, pero hay otros aspectos más cruciales.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.2'] === 'Irrelevante' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.2', 'Irrelevante')}>
                                        Irrelevante: No veo cómo la identificación de estos procesos podría
                                        beneficiarnos.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 16}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-sm lg:text-2xl text-roboto text-justify font-bold mb-2'>Pregunta 5.3: Si contara con una herramienta que proporciona insights sobre estos procesos
                                        clave, ¿cómo evaluaría su impacto en la transición de su empresa hacia la economía
                                        circular?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.3'] === 'Impacto esencial' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.3', 'Impacto esencial')}>
                                        Impacto esencial: Esta herramienta sería un pilar para nuestra transición.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.3'] === 'Impacto significativo' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.3', 'Impacto significativo')}>
                                        Impacto significativo: Nos ayudaría a direccionar nuestras acciones e
                                        inversiones.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.3'] === 'Neutral' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.3', 'Neutral')}>
                                        Neutral: No estoy seguro del impacto que podría tener.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.3'] === 'Impacto limitado' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.3', 'Impacto limitado')}>
                                        Impacto limitado: Puede ofrecer algo de ayuda, pero no sería decisiva.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 5.3'] === 'Sin impacto' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 5.3', 'Sin impacto')}>
                                        Sin impacto: No veo cómo esta herramienta podría beneficiarnos.
                                    </button>
                                </div>

                            </div>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg5_3} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 17}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/3 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg6_1} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-xs lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Pregunta 6.1: Considerando las características clave de una plataforma destinada a la economía
                                        circular, ¿cómo evaluaría el potencial de una nueva herramienta, comparada con las
                                        actuales soluciones digitales que utiliza para la gestión de proyectos en
                                        sustentabilidad y economía circular?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'Mucho más prometedor' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'Mucho más prometedor')}>
                                        Mucho más prometedor.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'Más prometedor' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'Más prometedor')}>
                                        Más prometedor.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'Similar' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'Similar')}>
                                        Similar.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'Menos prometedor' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'Menos prometedor')}>
                                        Menos prometedor.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'Mucho menos prometedor' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'Mucho menos prometedor')}>
                                        Mucho menos prometedor.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.1'] === 'No puedo opinar sin más detalles' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.1', 'No puedo opinar sin más detalles')}>
                                        No puedo opinar sin más detalles.
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 18}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-full sm:w-3/5 flex items-center'>
                                <div className='w-full px-8 sm:px-12'>
                                    <h1 className='text-xs lg:text-lg text-roboto text-justify font-bold mb-5'>Pregunta 6.2: ¿Siente que la falta de una herramienta digital específica para gestionar las estrategias de
                                        economía circular ha afectado a su capacidad para implementar efectivamente dichas estrategias?
                                    </h1>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.2'] === 'Sí, definitivamente' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.2', 'Sí, definitivamente')}>
                                        Sí, definitivamente.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.2'] === 'Probablemente sí' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.2', 'Probablemente sí')}>
                                        Probablemente sí.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.2'] === 'No estoy seguro' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.2', 'No estoy seguro')}>
                                        No estoy seguro.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.2'] === 'Probablemente no' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.2', 'Probablemente no')}>
                                        Probablemente no.
                                    </button>
                                    <button className={`button-cuestionary ${responses['Pregunta 6.2'] === 'No, no ha afectado' ? 'selected' : ''}`} onClick={() => handleUniqueResponse('Pregunta 6.2', 'No, no ha afectado')}>
                                        No, no ha afectado.
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/2 sm:h-full sm:w-2/5 flex items-center'>
                                <div className='w-full px-8 sm:px-0 sm:pr-8 md:pr-12'>
                                    <h1 className='text-xs lg:text-lg text-roboto text-justify font-bold mb-5'>Por favor, proporciona cualquier comentario adicional sobre
                                        cómo la falta de herramientas específicas ha afectado o no tu capacidad para implementar
                                        estrategias de economía circular.
                                    </h1>
                                    <textarea
                                        className="text-area w-full h-22 sm:h-30"
                                        maxLength="2000"
                                        value={responses['Extra 6.2']}
                                        onChange={(e) => {
                                            handleTextChange('Extra 6.2', e.target.value);
                                            setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 19}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-row sm:flex-row'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='w-full px-8 sm:px-16'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-10'>
                                        Pregunta 7.1: Considerando la evolución constante de la economía circular y sus impactos en el
                                        negocio, ¿cómo calificaría la importancia de una plataforma educativa que
                                        proporciona formación en tiempo real sobre estos conceptos y que puede generar
                                        oportunidades de negocio y empleo para su organización?
                                    </h1>
                                    <div className='overflow-x-hidden'>
                                        <Likert {...likertOptions} flexible={true} />
                                    </div>
                                    <h1 className='text-xs lg:text-lg text-roboto font-semibold text-justify mb-5'>
                                        Si lo desea, proporcione más detalles sobre su
                                        elección o sugiera características adicionales que consideraría valiosas en dicha
                                        plataforma.
                                    </h1>
                                    <div className='flex items-center justify-center'>
                                        <textarea
                                            className="text-area w-full h-30"
                                            maxLength="2000"
                                            value={responses['Extra 7.1']}
                                            onChange={(e) => {
                                                handleTextChange('Extra 7.1', e.target.value);
                                                setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 20}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/2 sm:h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-12 md:px-20'>
                                    <h1 className='text-sm lg:text-2xl text-roboto text-justify font-bold mb-5'>
                                        Pregunta 7.2: Pensando en plataformas educativas online que haya usado en el pasado,
                                        ¿cuáles son las características o funcionalidades que más ha valorado?
                                    </h1>
                                    <textarea
                                        className="text-area w-full h-30"
                                        maxLength="2000"
                                        value={responses['Pregunta 7.2']}
                                        onChange={(e) => {
                                            handleTextChange('Pregunta 7.2', e.target.value);
                                            setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                        }}
                                    />
                                </div>

                            </div>
                            <div className='h-1/2 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg7_2} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 21}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex flex-col sm:flex-row'>
                            <div className='h-1/2 sm:h-full sm:w-1/2 flex items-end justify-end'>
                                <img src={questionimg7_3} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                            <div className='h-1/2 sm:h-full sm:w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-8 sm:px-12 md:px-20'>
                                    <h1 className='text-sm lg:text-xl text-roboto font-bold text-justify mb-5'>
                                        Pregunta 7.3: Al imaginar una plataforma educativa específicamente centrada en la
                                        economía circular, ¿qué características, contenidos o funcionalidades esperaría
                                        que tuviera?
                                    </h1>
                                    <textarea
                                        className="text-area w-full h-30"
                                        maxLength="2000"
                                        value={responses['Pregunta 7.3']}
                                        onChange={(e) => {
                                            handleTextChange('Pregunta 7.3', e.target.value);
                                            setAreButtonsEnabled(e.target.value.trim() !== ''); // habilitar o deshabilitar basado en si textarea está vacío
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion} disabled={!areButtonsEnabled}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 22}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <h1 className='text-xl text-center text-roboto font-bold text-start mb-5'>
                                    ¿Confirma el envío de sus respuestas?
                                </h1>
                                <button className='button-login text-xs sm:text-sm md:text-base' style={{ width: '50%' }} onClick={submitSurvey}>
                                    Sí, deseo proceder con el envío de mis respuestas.
                                </button>
                                <button className='button-login text-xs sm:text-sm md:text-base' style={{ width: '50%' }} onClick={handlePreviousQuestion}>
                                    No, prefiero revisar mis respuestas antes de enviarlas.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 23}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="min-h-screen min-w-full flex items-stretch">
                    <div className={`${window.innerWidth > 768 ? 'contenedor flex items-stretch' : 'flex items-stretch'}`}>
                        <div className='min-h-screen min-w-full flex items-stretch'>
                            <div className='w-full flex flex-col items-center justify-center relative'>
                                <img src={thanks_bg} className='min-h-full min-w-full object-cover absolute inset-0' alt='Imagen de fondo' />
                                <div className='z-10 flex flex-col items-center justify-center'>
                                    <img src={logometric1_6} className='absolute top-0 mt-5 lg:mt-10' alt='Logo' />
                                    <p className='md:absolute text-xl sm:text-2xl md:text-4xl text-center p-6 text-roboto text-white font-bold mt-20 mb-5'>
                                        En nombre de CircularIA te agradecemos por haberte dado el tiempo de responder nuestra encuesta.
                                    </p>
                                    <button className='absolute bottom-20 lg:bottom-40 button-login text-sm sm:text-base' style={{ width: '50%' }} onClick={() => navigate("/")}>
                                        Volver a la página comercial
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Welcome;
