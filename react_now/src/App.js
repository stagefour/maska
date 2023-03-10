
import './App.css';
import Czlowiek from './components/Czlowiek';
import Nawka from './components/Nawka';
import Waranek from './components/Waranek';
import Szczescie from './components/Szczescie';
import notes from './Assets/notes.png'
import { useState, useRef, useEffect } from 'react'; 
import { Routes, Route, Link } from 'react-router-dom';
import bling from './Assets/bling.wav';
import shoop from './Assets/home_song.mp3';


function App() {

const [widocznosc, ustawWidocznosc] = useState (false);
const ikona = useRef(new Audio (bling));
const piosenka = useRef(new Audio (shoop));



useEffect (() => { document.title = widocznosc ? "VARAN i muzyczka" : "VARAN po cichu" }, [widocznosc]);




function clickHandler () {
    ikona.current.play();
    piosenka.current.loop = true;

    if (widocznosc===true) { ustawWidocznosc (false); piosenka.current.pause(); }
    else { ustawWidocznosc (true); piosenka.current.play(); };

};





 return ( <div className='maindiv'>
    <Waranek ok={widocznosc} />
    <nav className='nawigacja'>
        <Link to="/" className="nav-item">Człowiek</Link>
        <Link to="/formularz" className="nav-item">Formularz</Link>
        <Link to="/szczescie" className="nav-item">Myszka</Link>
        <button onClick={clickHandler} className='nutka'><img src={notes} alt='nutki'></img></button>
    </nav>
 
 
    <Routes>
        <Route path="/" element={<Czlowiek tekst="TU CZŁOWIEK" />} />
        <Route path="/formularz" element ={<Nawka />} />
        <Route path="/szczescie" element ={<Szczescie />} />
    </Routes>



 </div>
 )
}

export default App;
