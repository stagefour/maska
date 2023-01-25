import './Szczescie.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import shot from '../Assets/shot.wav';
import reload from '../Assets/reload.wav';
import cel from '../Assets/target.jpg';
import bulletHole from '../Assets/bullethole.png'





const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

        useEffect(() => {

            const handleMousePositionChange = (e) => {
                e.preventDefault();
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });

            };

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => { 
                window.removeEventListener("mousemove", handleMousePositionChange);
            };

        },[]);

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
            <div>
                <span>x: {mousePosition.x} </span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};



const DziuraPoKuli = (props) => {

    const  initialState = [{x: 0, y:0, v:"none"}, {x:0, y:0, v:"none"}, 
    {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}];
    const [dane, zmienDane] = useState (initialState);

    useEffect(() => {
    if (props.whichOne === -1) {
            zmienDane(initialState);
            console.log('resetuje Dane');
            console.log (dane);
    } 
     else { 
        console.log ('pobieram dane');
        let axisX = props.mousePosition.x;
        let axisY = props.mousePosition.y;
        zmienDane(previousState => {
            let przechowalniaCech = [...previousState];
            przechowalniaCech[props.whichOne].x = axisX;
            przechowalniaCech[props.whichOne].y = axisY;
            przechowalniaCech[props.whichOne].v = 'block';
            return (przechowalniaCech);
        });
        console.log (dane);
    
};

    console.log (props.whichOne); },[props.whichOne]);

    if (!props.mousePosition) { return null };
    return (
    <>
    <img src={bulletHole} className='bullet' style={{ display: dane[0].v, 
                                            left: dane[0].x - 120, 
                                            top: dane[0].y - 98 }} alt='kulka'/>
    <img src={bulletHole} className='bullet' style={{ display: dane[1].v, 
                                            left: dane[1].x - 120, 
                                            top: dane[1].y - 98 }} alt='kulka'/>
    <img src={bulletHole} className='bullet' style={{ display: dane[2].v, 
                                            left: dane[2].x - 120, 
                                            top: dane[2].y - 98 }} alt='kulka'/>
    <img src={bulletHole} className='bullet' style={{ display: dane[3].v, 
                                            left: dane[3].x - 120, 
                                            top: dane[3].y - 98 }} alt='kulka'/>
    <img src={bulletHole} className='bullet' style={{ display: dane[4].v, 
                                            left: dane[4].x - 120, 
                                            top: dane[4].y - 98 }} alt='kulka'/>
    </>
    );
};




const PanelMouseTracker = withMousePosition (PanelMouseLogger);
const PokazDziurePoKuli = withMousePosition (DziuraPoKuli);

export default function Szczescie () {
    const strzal = useRef (new Audio(shot));
    const przeladowanie = useRef (new Audio(reload));
    const [licznik, zmienLicznik] = useState(-1);



    const shootMe = (e) => {
        e.preventDefault();

        if (licznik === 4) { przeladowanie.current.play (); zmienLicznik(-1); }
            else { strzal.current.play (); zmienLicznik(licznik+1); };
};

    return ( 
    <div className='happyDiv flex-container' onClick={shootMe}>
        <h1>SZCZĘŚCIE</h1>
        <img src={cel} className='img-fluid karciara' alt='karciara'/>
        <PokazDziurePoKuli whichOne={licznik} />
        <PanelMouseTracker />
    </div>
    );
}
