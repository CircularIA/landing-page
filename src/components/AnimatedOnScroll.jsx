/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';

const getThresholdForScreenSize = () => {
    const width = window.innerWidth;

    // Utilizando los puntos de interrupción por defecto de Tailwind
    if (width < 640) { // sm
        return 0.1;
    } else if (width < 768) { // md
        return 0.2;
    } else if (width < 1024) { // lg
        return 0.3;
    } else if (width < 1280) { // xl
        return 0.4;
    } else { // 2xl y mayores
        return 0.5;
    }
};

const AnimatedOnScroll = ({ children, animationClass }) => {
    const thresholdValue = getThresholdForScreenSize();

    const [ref, inView] = useInView({
        threshold: thresholdValue,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={inView ? `animate__animated ${animationClass}` : 'initialHidden'}
        >
            {children}
        </div>
    );
}

export default AnimatedOnScroll;

