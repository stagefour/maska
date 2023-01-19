
import './Nawka.css';
import waran from '../Assets/waran.png';
import Wnuczek from './Wnuczek';
import { useState } from 'react'; 


function Nawka (props) {

    let kolor=props.kolor;
    let tloPierwotne = props.tlo;
    let [tlo, ustalTlo] = useState (tloPierwotne);
    let waranw=<img src={waran} alt='waran'></img>;
    let clickHandler = function () { 
        if (tlo === tloPierwotne) {
        ustalTlo ("white"); } else { ustalTlo (tloPierwotne) };
        return};

    if (tlo!==tloPierwotne && tlo!=="white") { ustalTlo (tloPierwotne) };


    return (
        <div className='main-nav'
        style={{color: kolor, backgroundColor: tlo}}>
        <nav>
            <ul>
                <li><button onClick={clickHandler} className='guzik'>{waranw}</button></li>
                <li>{props.glowna}</li>
                <li>{props.poboczna}</li>
                <li>{props.dolna}</li>
            </ul>
        </nav>
        <Wnuczek conapisac={Math.random() >= 0.5 ? "Boli Brzuch!!!" : "Nie boli Brzuch :))"} />
        </div>
    )
}

export default Nawka;
