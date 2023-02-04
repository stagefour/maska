import './Szczescie.css';
import { useState, useEffect, useRef } from 'react';
import shot from '../Assets/shot.wav';
import reload from '../Assets/reload.wav';
import laughter from '../Assets/laugh.ogg';
import hammer from '../Assets/hammer.wav';
import bubble from '../Assets/speechbubble.png';
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


    const [dane, zmienDane] = useState ([{x: 0, y:0, v:"none"}, {x:0, y:0, v:"none"}, 
    {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}]);

    useEffect(() => {
    if (props.whichOne === -1) {
            zmienDane([{x: 0, y:0, v:"none"}, {x:0, y:0, v:"none"}, 
            {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}, {x:0, y:0, v:"none"}]);
            console.log('resetuje Dane');
    } 
     else { 
        console.log ('pobieram dane');
  //        let axisX = props.mousePosition.x;
  //        let axisY = props.mousePosition.y;
        zmienDane(previousState => {
            let przechowalniaCech = [...previousState];
            przechowalniaCech[props.whichOne].x = props.mousePosition.x;
            przechowalniaCech[props.whichOne].y = props.mousePosition.y;
            przechowalniaCech[props.whichOne].v = 'block';
            return (przechowalniaCech);
        });
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
    const smiech = useRef (new Audio(laughter));
    const naprawa = useRef (new Audio(hammer));
    const przeladowanie = useRef (new Audio(reload));
    const [licznik, zmienLicznik] = useState(-1);
    const [dymek, zmienWidocznoscDymku] = useState ("none");


    const shootMe = (e) => {
        e.preventDefault();

        if (licznik === 4) { naprawa.current.play ();
                            setTimeout (() => {
                                zmienLicznik(-1);
                                przeladowanie.current.play ();
                                setTimeout(() => {            
                                zmienWidocznoscDymku ("block");
                                smiech.current.play (); }, 1000) }, 1000) }
            else { strzal.current.play (); zmienLicznik(licznik+1); zmienWidocznoscDymku("none"); };
};

    return ( 
    <div className='happyDiv flex-container' onClick={shootMe}>
        <h1>SZCZĘŚCIE</h1>

        <div 
            className='dymek flex-container'
            style={{display: dymek}}>
        <img
            src={bubble}
            alt='dymek'
            />
        <div
            className='napisDymek'>
        <h3>STRZELAJ DO WOLI</h3>
        <h3>SZYBA JEST KULOODPORNA !!!!</h3>
        </div>
        </div>


        <img src={cel} className='img-fluid karciara' alt='karciara'/>
        <PokazDziurePoKuli whichOne={licznik} />
        <PanelMouseTracker />

    </div>
    );
}
