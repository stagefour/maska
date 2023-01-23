import './Szczescie.css';
import { useState, useEffect } from 'react';

const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

        useEffect(() => {

            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });

            };

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => { 
                window.removeEventListener("mousemove", handleMousePositionChange);
            };

        },[])

        return (
            <WrappedComponent {...props} mousePosition={mousePosition} />
        );
    };
};

const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) { return null };
    return (
        <div className='BasicTracker'>
            <p>Pozycja Myszki</p>
            <div className='Row'>
                <span>x: {mousePosition.x} </span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {  return null; };
    return (
        <p>{mousePosition.x}, {mousePosition.y}</p>
    );
};

const PanelMouseTracker = withMousePosition (PanelMouseLogger);
const PointMouseTracker = withMousePosition (PointMouseLogger);

export default function Szczescie () {
    return ( 
    <div className='happyDiv'>
        <h1>SZCZĘŚCIE</h1>
        <PanelMouseTracker />
        <PointMouseTracker />
    </div>
    );
};
