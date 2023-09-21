/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./index.css"
import { CSSTransition } from 'react-transition-group';
import WelcomeImg from '../assets/Welcome.svg';
import questionimg1_1 from '../assets/questionimg1-1.jpg';
import metricimg1_1 from '../assets/metricimg1-1.jpg';
import questionimg2_1 from '../assets/questionimg2-1.jpg';
import metricimg2_1 from '../assets/metricimg2-1.jpg';
import questionimg1_2 from '../assets/questionimg1-2.jpg'
import metricimg1_2 from '../assets/metricimg1-2.jpg'
import questionimg2_2 from '../assets/questionimg2-2.jpg'
import metricimg2_2 from '../assets/metricimg2-2.jpg'
import questionimg1_3 from '../assets/questionimg1-3.jpg'
import metricimg1_3 from '../assets/metricimg1-3.jpg'
import questionimg2_3 from '../assets/questionimg2-3.jpg'
import metricimg2_3 from '../assets/metricimg2-3.jpg'
import questionimg1_4 from '../assets/questionimg1-4.jpg'
import metricimg1_4 from '../assets/metricimg1-4.jpg'
import questionimg2_4 from '../assets/questionimg2-4.jpg'
import metricimg2_4 from '../assets/metricimg2-4.jpg'
import questionimg1_5 from '../assets/questionimg1-5.jpg'
import metricimg1_5 from '../assets/metricimg1-5.jpg'
import questionimg2_5 from '../assets/questionimg2-5.jpg'
import metricimg2_5 from '../assets/metricimg2-5.jpg'
import questionimg1_6 from '../assets/questionimg1-6.jpg'
import metricimg1_6 from '../assets/metricimg1-6.png'
import logometric1_6 from '../assets/logo-metric1-6.svg'
import questionimg2_6 from '../assets/questionimg2-6.jpg'
import metricimg2_6 from '../assets/metricimg2-6.jpg'
import questionimg1_7 from '../assets/questionimg1-7.jpg'
import metricimg1_7 from '../assets/metricimg1-7.jpg'
import questionimg2_7 from '../assets/questionimg2-7.jpg'
import metricimg2_7 from '../assets/metricimg2-7.jpg'
import thanks_bg from '../assets/bg-thanks.svg'
import drop from '../assets/drop.svg';
import co2 from '../assets/co2.svg';
import entry from '../assets/entry.svg'
import solarPower from '../assets/solar-power.svg'
import ambientalCulture from '../assets/ambiental-culture.svg'
import people from '../assets/people.svg'
import office from '../assets/office.svg'
import security from '../assets/security.svg'
import connect from '../assets/connect.svg'
import handshake from '../assets/handshake.svg'
import moneyBag from '../assets/money-bag.svg'
import moneyHand from '../assets/money-hand.svg'
import piggyBank from '../assets/piggy-bank.svg'
import context2_1 from '../assets/context2-1.png'
import context2_2 from '../assets/context2-2.png'
import context5 from '../assets/context5.png'
import context7 from '../assets/context7.png'

const Welcome = () => {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [responses, setResponses] = useState({
        'Pregunta 1.1': '',
        'Pregunta 2.1': '',
        'Pregunta 1.2': '',
        'Pregunta 2.2': '',
        'Pregunta 1.3': '',
        'Pregunta 2.3': '',
        'Pregunta 1.4': '',
        'Pregunta 2.4': '',
        'Pregunta 1.5': '',
        'Pregunta 2.5': '',
        'Pregunta 1.6': '',
        'Pregunta 2.6': '',
        'Pregunta 1.7': '',
        'Pregunta 2.7': '',
    });

    const handleTextChange = (questionKey, newValue) => {
        setResponses({
            ...responses,
            [questionKey]: newValue,
        });
    };
    const [selectedScales, setSelectedScales] = useState({
        'Métrica 1.1': '',
        'Métrica 2.1': '',
        'Métrica 1.2': '',
        'Métrica 2.2': '',
        'Métrica 1.3': '',
        'Métrica 2.3': '',
        'Métrica 1.4': '',
        'Métrica 2.4': '',
        'Métrica 1.5': '',
        'Métrica 2.5': '',
        'Métrica 1.6': '',
        'Métrica 2.6': '',
        'Métrica 1.7': '',
        'Métrica 2.7': '',
    });

    const updateScale = (key, value) => {
        setSelectedScales({
            ...selectedScales,
            [key]: value,
        });
    };

    const submitSurvey = async () => {
        try {
            const formattedResponses = Object.keys(responses).map(id => ({
                id,
                text: responses[id],
            }));

            const formattedScales = Object.keys(selectedScales).map(id => ({
                id,
                value: selectedScales[id],
            }));

            const surveyData = {
                name: nombre,
                responses: formattedResponses,
                selectedScales: formattedScales,
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
        setCurrentQuestion(currentQuestion + 1);
    };
    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    return (
        <div className='animate__animated animate__fadeIn'>
            <CSSTransition
                in={currentQuestion === 1}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full'>
                                    <img src={WelcomeImg} className='w-60 h-60 mx-auto' alt='Logo' />
                                    <h1 className='text-xl text-roboto font-bold text-center mt-5 mb-5'>¡BIENVENIDO/A CIRCULARIA! - CUESTIONARIO INTERACTIVO</h1>
                                    <p className='text-roboto text-center'>
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
                                        <button className='button-login' style={{ width: '50%' }} onClick={handleNextQuestion}>
                                            ¡Empezar!
                                        </button>
                                    </div>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-start'>
                                <div className='w-full'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10 mb-5'>Validación 1: Contexto</h1>
                                    <div className='flex w-full'>
                                        <div className='w-1/3 h-screen'>
                                            <div className='info-header bg-custom-light-green'>
                                                <h1 className='text-2xl text-roboto font-bold text-center'>
                                                    Información Ambiental
                                                </h1>
                                            </div>
                                            <div className='h-[70%] px-2 flex flex-col justify-center'>
                                                <div className='flex mt-5'>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={drop} alt="water" className="icon w-20" />
                                                        <p>Agua</p>
                                                    </div>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={solarPower} alt="solar power" className="icon w-20" />
                                                        <p>Energía</p>
                                                    </div>
                                                </div>
                                                <div className='flex mt-5'>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={co2} alt="co2" className="icon w-20" />
                                                        <p>Huella de carbono</p>
                                                    </div>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={entry} alt="entry" className="icon w-20" />
                                                        <p>Flujos de entrada y salida</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center mt-5'>
                                                    <div>
                                                        <img src={ambientalCulture} alt="ambiental culture" className="icon w-20" />
                                                        <p className='text-center'>Cultura ambiental</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/3 h-screen'>
                                            <div className='info-header bg-custom-light-orange'>
                                                <h1 className='text-2xl text-roboto font-bold text-center'>
                                                    Información Económica
                                                </h1>
                                            </div>
                                            <div className='h-[80%] px-2 flex flex-col justify-center border-l-2 border-r-2 border-gray-400'>
                                                <div className='flex'>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={moneyBag} alt="people" className="icon w-20" />
                                                        <p>Ingreso circular</p>
                                                    </div>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={moneyHand} alt="office" className="icon w-20" />
                                                        <p>Inversión circular</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center mt-5'>
                                                    <div>
                                                        <img src={piggyBank} alt="handshake" className="icon w-20" />
                                                        <p className='text-center'>Ahorro</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/3 h-screen'>
                                            <div className='info-header bg-custom-light-blue'>
                                                <h1 className='text-2xl text-roboto font-bold text-center'>
                                                    Información Social
                                                </h1>
                                            </div>
                                            <div className='h-[70%] px-2 flex flex-col justify-center'>
                                                <div className='flex mt-5'>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={people} alt="people" className="icon w-20" />
                                                        <p>Empleos creados</p>
                                                    </div>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={office} alt="office" className="icon w-20" />
                                                        <p>Cultura interna sostenible</p>
                                                    </div>
                                                </div>
                                                <div className='flex mt-5'>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={security} alt="security" className="icon w-20" />
                                                        <p>Seguridad</p>
                                                    </div>
                                                    <div className='w-1/2 text-center'>
                                                        <img src={connect} alt="connect" className="icon w-20" />
                                                        <p>Sinergia industrial</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center mt-5'>
                                                    <div>
                                                        <img src={handshake} alt="handshake" className="icon w-20" />
                                                        <p className='text-center'>Aporte social directo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mb-5'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.1: En su empresa, ¿ocupan alguna plataforma o servicio que requiera compartir información sensible? Si es así, ¿qué medida de seguridad le entrega?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.1']}
                                        onChange={(e) => handleTextChange('Pregunta 1.1', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_1} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_1} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.1: En una escala del 1 al 5, donde 1 es &ldquo;cero riesgo&rdquo; y 5 es &ldquo;muy riesgoso&rdquo;. ¿Cuál es su percepción de riesgo en compartir la información mencionada en el contexto de la pregunta?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.1'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.1', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.1: Si garantizamos la encriptación, anonimización, y respaldamos nuestra seguridad con un contrato de confidencialidad, ¿se sentiría confiado compartiendo datos con nuestra plataforma? De no ser así, ¿qué medidas adicionales le brindarían esa confianza</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.1']}
                                        onChange={(e) => handleTextChange('Pregunta 2.1', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_1} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_1} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.1: En una escala del 1 al 5, siendo 1 &ldquo;nada confiable&rdquo; y 5 &ldquo;completamente confiable&rdquo;. ¿Cuánta confianza tendría en compartir datos bajo los instrumentos ya mencionados?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.1'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.1', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-start'>
                                <div className='w-full'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10 mb-5'>Validación 2: Contexto</h1>
                                </div>
                                <img src={context2_1} className='h-52' alt='Logo' />
                                <img src={context2_2} className='h-80 mt-2' alt='Logo' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.2: ¿Cuál es su experiencia actual en la recolección de datos de los flujos de recursos, económicos y sociales en su trabajo? ¿En qué medida cree que un software de inteligencia artificial que automatiza la recolección de esta información sería útil para usted y su organización?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.2']}
                                        onChange={(e) => handleTextChange('Pregunta 1.2', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_2} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_2} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.2: En una escala del 1 al 5, donde 1 es &ldquo;no influiría en mis decisiones&rdquo; y 5 es &ldquo;sería un factor decisivo&rdquo;. ¿Cuánto peso daría a las recomendaciones del software en su proceso de toma de decisiones?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.2'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.2', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.2: En el contexto de la economía circular, donde la sistematización y la fluidez en el manejo de datos son cruciales, ¿cree que una integración automática de flujo de datos con su sistema actual (ejemplo SAP u otra plataforma) potenciaría significativamente su eficiencia y eficacia? ¿Cómo evaluaría el impacto de esta automatización sistematizada en su gestión diaria?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.2']}
                                        onChange={(e) => handleTextChange('Pregunta 2.2', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_2} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_2} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.2: En una escala del 1 al 5, donde 1 es &ldquo;no valioso&rdquo; y 5 es &ldquo;muy valioso&rdquo;. ¿Cuánto valoraría una integración directa con el sistema (SAP/Otra plataforma) de su empresa?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.2'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.2', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-start'>
                                <div className='w-full h-screen'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10 mb-5'>Validación 3: Contexto</h1>
                                    <div className='h-[80%] flex flex-col justify-center items-center text-center text-white'>
                                        <div className='w-full flex flex-row gap-4 px-8 py-4'>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Permite trazabilidad
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Incentiva proyectos de Economía Circular
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Monitorea la estrategia y corregirla
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Gestiona proyectos
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row gap-4 px-8 py-4'>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Permite cumplir legislación y trazabilidad
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Comunica y visibiliza resultados
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Genera reportes
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Contabiliza los avances hacia metas
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row gap-4 px-8 py-4'>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Aprende sobre Economía Circular
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Comparación con promedio por industria
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Revisa buenas practicas en base a evaluación
                                            </div>
                                            <div className='w-1/4 info-header bg-custom-dark-green'>
                                                Gestiona proyectos de Economía Circular
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-3/5 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.3: ¿Cree que nuestra plataforma ofrece suficiente valor a su empresa como para desear adquirirla? ¿Qué funcionalidades o aspectos considera usted más valiosos?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.3']}
                                        onChange={(e) => handleTextChange('Pregunta 1.3', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-2/5 flex items-end justify-end'>
                                <img src={questionimg1_3} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_3} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.3: En una escala del 1 al 5, siendo 1 &ldquo;muy en desacuerdo&rdquo; y 5 &ldquo;muy de acuerdo&rdquo;. ¿Cree que nuestra plataforma ofrece suficiente valor a su empresa como para desear adquirirla?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.3'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.3', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.3: ¿Qué funcionalidades adicionales o mejoras cree usted que se podrían incluir en nuestra plataforma para aumentar su valor y hacerla de mayor valor para potenciar y acelerar la estrategia de economía circular?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.3']}
                                        onChange={(e) => handleTextChange('Pregunta 2.3', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_3} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_3} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.3: En una escala del 1 al 5, siendo 1 &ldquo;no valioso en absoluto&rdquo; y 5 &ldquo;extremadamente valioso&rdquo;. ¿Cuán valiosa considera una solución que le brinde acceso directo a esta información?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.3'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.3', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-start'>
                                <div className='w-full h-screen'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10 mb-5'>Validación 4: Contexto</h1>
                                    <div className='h-[80%] flex flex-col justify-center items-center text-center text-white'>
                                        <div className='w-full flex flex-row gap-4 px-8 py-4'>
                                            <div className='w-full text-2xl info-header bg-custom-dark-green'>
                                                Inteligencia Articial
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row gap-4 px-8 py-4'>
                                            <div className='w-1/2 text-xl info-header bg-custom-dark-green'>
                                                Estrategia
                                            </div>
                                            <div className='w-1/2 text-xl info-header bg-custom-dark-green'>
                                                Proyectos
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row gap-4 px-12 py-4'>
                                            <div className='w-1/2 info-header text-black'>
                                                <div className='w-[80%]'>
                                                    Inteligencia que procesa información y experiencia para entregar estrategia.
                                                </div>
                                            </div>
                                            <div className='w-1/2 info-header text-black'>
                                                <div className='w-[80%]'>
                                                    Evaluar posibles proyectos de Economía Circular informando el posible impacto.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.4: ¿Cuán prioritaria es la economía circular en su estrategia actual de sostenibilidad y cómo ve su relevancia para el futuro de su empresa?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.4']}
                                        onChange={(e) => handleTextChange('Pregunta 1.4', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_4} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_4} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.4: En una escala del 1 al 5, siendo 1 &ldquo;muy en desacuerdo&rdquo; y 5 &ldquo;muy de acuerdo&rdquo;. ¿Considera que la economía circular es relevante para el futuro de su empresa?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.4'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.4', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.4: Nuestro proyecto tiene como propósito ofrecer un sistema inteligente que ayuda a las empresas a implementar y mejorar la aplicación de la economía circular. ¿Cree que un sistema como este podría ayudar a su empresa a avanzar hacia una operación más circular? ¿Por qué?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.4']}
                                        onChange={(e) => handleTextChange('Pregunta 2.4', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_4} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_4} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.4: En una escala del 1 al 5, siendo 1 &ldquo;muy en desacuerdo&rdquo; y 5 &ldquo;muy de acuerdo&rdquo;. ¿Considera que un sistema como el que propone CircularIA ayudaría a solucionar problemas reales para avanzar hacia una organización y producción más circular?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.4'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.4', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
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
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen flex flex-col items-center justify-center'>
                                <div className='w-full'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10'>Validación 5: Contexto</h1>
                                    <h1 className='text-3xl text-roboto font-bold text-center text-[#00B971] mb-5'>Como es una aplicación de una buena estrategia de Economía Circular</h1>
                                </div>
                                <img src={context5} alt='Context5' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 23}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.5: En su opinión, ¿qué impacto tendría un software que le proporciona recomendaciones sobre indicadores y estrategias de economía circular en la eficiencia de la toma de decisiones en su empresa?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.5']}
                                        onChange={(e) => handleTextChange('Pregunta 1.5', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_5} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 24}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_5} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.5: En una escala del 1 al 5, siendo 1 &ldquo;muy en desacuerdo&rdquo; y 5 &ldquo;muy de acuerdo&rdquo;. ¿Considera que poder acceder a un software que ayuda a gestionar la estrategia de Economía Circular y sostenibilidad puede potenciar su estrategia de Economía Circular?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.5'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.5', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 25}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.5: ¿Considera que la identificación de procesos clave para reforzar la estrategia de economía circular y las sugerencias sobre posibles inversiones podrían ayudar a su empresa a realizar una transición más suave hacia la economía circular?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.5']}
                                        onChange={(e) => handleTextChange('Pregunta 2.5', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_5} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 26}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_5} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.5: En una escala del 1 al 5, siendo 1 &ldquo;muy en desacuerdo&rdquo; y 5 &ldquo;muy de acuerdo&rdquo;. ¿Considera que una funcionalidad que identifica procesos claves y posibles inversiones puede ayudar a fomentar los proyectos de Economía Circular dentro de la empresa?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.5'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.5', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 27}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-start'>
                                <div className='w-full h-screen'>
                                    <h1 className='text-2xl text-roboto font-bold text-center mt-10'>Validación 6: Contexto</h1>
                                    <h1 className='text-3xl text-roboto font-bold text-center mt-5'>Otras herramientas de gestión de proyectos</h1>
                                    <div className='h-[70%] flex flex-col justify-center items-center text-center text-white'>
                                        <div className='w-[70%] flex flex-row gap-10 px-8 py-4'>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                SAP
                                            </div>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                Excel
                                            </div>
                                        </div>
                                        <div className='w-[70%] flex flex-row gap-10 px-8 py-4'>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                Monday
                                            </div>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                Trello
                                            </div>
                                        </div>
                                        <div className='w-[70%] flex flex-row gap-10 px-8 py-4'>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                Slack
                                            </div>
                                            <div className='w-1/2 info-header bg-custom-dark-green'>
                                                Notion
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 28}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.6: ¿Cómo ve el potencial de nuestra plataforma para gestionar eficazmente una estrategia de economía circular, en comparación con las herramientas digitales que se utilizan para la gestión de proyectos?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.6']}
                                        onChange={(e) => handleTextChange('Pregunta 1.6', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg1_6} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 29}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-center justify-center relative'>
                                <img src={metricimg1_6} className='h-full w-full' alt='Imagen de fondo' />
                                <img src={logometric1_6} className='absolute h-68 w-68' alt='Logo' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.6: En una escala del 1 al 5, donde 1 es muy poco eficaz y 5 es altamente eficaz. ¿Cómo calificaría la capacidad de nuestra plataforma CircularIA para gestionar una estrategia de economía circular en comparación con otras herramientas digitales que ha utilizado?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.6'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.6', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 30}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.6: ¿Siente que la falta de una herramienta digital específica para gestionar las estrategias de economía circular ha afectado a su capacidad para implementar efectivamente dichas estrategias?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.6']}
                                        onChange={(e) => handleTextChange('Pregunta 2.6', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_6} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 31}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_6} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.6: En una escala del 1 al 5, donde 1 significa que no afecta en absoluto y 5 significa que ha afectado significativamente. ¿Cómo percibe que la falta de una herramienta digital específica ha impactado su capacidad para implementar efectivamente estrategias de economía circular?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.6'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.6', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 32}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-screen flex flex-col items-center justify-center'>
                                <h1 className='text-2xl text-roboto font-bold text-center mb-5'>Validación 7: Contexto</h1>
                                <h1 className='text-3xl text-roboto font-bold text-center mb-5'>Autocapacitación mientras se usa</h1>
                                <img src={context7} className='w-[40%] rounded-full object-cover' alt='Context5' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 33}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-3/5 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 1.7: ¿Cómo evaluaría la importancia de una plataforma educativa que ofrece formación en tiempo real sobre conceptos de economía circular, que a su vez puede abrir oportunidades de negocio y empleo para su empresa?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 1.7']}
                                        onChange={(e) => handleTextChange('Pregunta 1.7', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-2/5 flex items-end justify-end'>
                                <img src={questionimg1_7} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 34}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg1_7} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 1.7: En una escala del 1 al 5, siendo 1 &ldquo;no importante&rdquo; y 5 &ldquo;muy importante&rdquo;. ¿Cuán importante sería para usted tener acceso a dicha plataforma?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 1.7'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 1.7', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 35}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-2xl text-roboto font-bold text-start mb-5'>Pregunta 2.7: Al pensar en plataformas educativas online que haya usado en el pasado, ¿cuáles son las características que más valora y qué esperaría de una que enseñe sobre economía circular?</h1>
                                    <textarea
                                        className="text-area w-full h-52"
                                        maxLength="2000"
                                        value={responses['Pregunta 2.7']}
                                        onChange={(e) => handleTextChange('Pregunta 2.7', e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={questionimg2_7} className='h-full w-full' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 36}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={metricimg2_7} className='h-full w-full' alt='Imagen2' />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>
                                        Métrica 2.7: Considerando los beneficios potenciales y las funcionalidades que ofrece nuestra plataforma de economía circular para su estrategia de sostenibilidad. ¿Cuál sería un rango de precio mensual que su empresa estaría dispuesta a invertir para acceder a esta herramienta?
                                    </h1>
                                </div>
                                <div className='scale-container'>
                                    {[1, 2, 3, 4, 5].map((number) => (
                                        <button
                                            key={number}
                                            className={`scale-option ${selectedScales['Métrica 2.7'] === number ? 'selected' : ''}`}
                                            onClick={() => updateScale('Métrica 2.7', number)}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &lt; {/* Flecha estilo "<" hacia la izquierda */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &gt; {/* Flecha estilo ">" hacia la derecha */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 37}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <h1 className='text-xl text-center text-roboto font-bold text-start mb-5'>
                                    ¿Confirma el envío de sus respuestas?
                                </h1>
                                <button className='button-login' style={{ width: '50%' }} onClick={submitSurvey}>
                                    Sí, deseo proceder con el envío de mis respuestas.
                                </button>
                                <button className='button-login' style={{ width: '50%' }} onClick={handlePreviousQuestion}>
                                    No, prefiero revisar mis respuestas antes de enviarlas.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 38}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='h-screen w-full flex'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <div className='flex flex-col items-center justify-center relative'>
                                    <img src={thanks_bg} className='h-full w-full' alt='Imagen de fondo' />
                                    <img src={logometric1_6} className='absolute h-68 w-68 top-20 lg:top-40' alt='Logo' />
                                    <p className='text-4xl absolute top-30 text-center p-6 text-roboto text-white font-bold mt-20 mb-5'>
                                        En nombre de CircularIA te agradecemos por haberte dado el tiempo de responder nuestra encuesta.
                                    </p>
                                    <button className='absolute bottom-20 lg:bottom-40 button-login' style={{ width: '50%' }} onClick={() => navigate("/")}>
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
