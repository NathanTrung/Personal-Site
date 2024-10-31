import React, { useEffect, useRef, useState } from 'react';
import './css/cursor.css'; // Import your updated custom cursor CSS

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [hover, setHover] = useState(false);

    const handleMouseMove = (event) => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${event.clientX}px`;
            cursorRef.current.style.top = `${event.clientY}px`;
            createSparkle(event.clientX, event.clientY);
        }
    };

    const createSparkle = (x, y) => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        document.body.appendChild(sparkle);

        // Remove sparkle after animation
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a, button, .hoverable').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, button, .hoverable').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${hover ? 'hover' : ''}`}
        />
    );
};

export default CustomCursor;
