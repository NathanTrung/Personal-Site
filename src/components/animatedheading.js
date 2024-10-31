import React, { useEffect, useRef, useState } from 'react';
import './css/animatedheading.css';
import wave from './images/hello.png'

const AnimatedHeading = ({ text, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);

    // Intersection Observer to check visibility on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it's visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            observer.disconnect(); // Cleanup on component unmount
        };
    }, []);

    const words = text.split(' '); // Split text into words

    return (
        <h2 className="greeting-heading" ref={headingRef}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="word">
                    {Array.from(word).map((letter, letterIndex) => (
                        <span
                            key={letterIndex}
                            className={`letter ${isVisible ? 'animate' : ''}`} // Add class based on visibility
                            style={{
                                animationDelay: `${(wordIndex * 0.5 + letterIndex * delay)}s`, // Calculate delay
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                    <span className="space"> </span> {/* Space between words */}
                </span>
            ))}
            <img src={wave} alt="Waving" className={`waving-hand ${isVisible ? 'animate' : ''}`} />
        </h2>
    );
};

export default AnimatedHeading;
