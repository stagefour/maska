
import './App.css';
import Czlowiek from './components/Czlowiek';
import Nawka from './components/Nawka';
import Waranek from './components/Waranek';
import notes from './Assets/notes.png'
import { useState, useRef } from 'react'; 
import { Routes, Route, Link } from 'react-router-dom';
import bling from './Assets/bling.wav';
import shoop from './Assets/home_song.mp3';


function App() {

let nutki = <img src={notes} alt='nutki'></img>;
let [widocznosc, ustawWidocznosc] = useState (true);
let ikona = new Audio (bling);
let piosenka = useRef(new Audio (shoop));
piosenka.current.loop = true;


function clickHandler () {
    ikona.play();

    if (widocznosc===true) { ustawWidocznosc (false); piosenka.current.pause(); }
    else { ustawWidocznosc (true); piosenka.current.play(); };

};





 return ( <div>
    <Waranek ok={widocznosc} />
    <nav className='nawigacja'>
        <Link to="/" className="nav-item">Czlowiek</Link>
        <Link to="/magenta" className="nav-item">Purpura</Link>
        <Link to="/gray" className="nav-item">Szarzyzna</Link>
        <Link to="/black" className="nav-item">Czarnuch</Link>
        <button onClick={clickHandler} className='nutka'>{nutki}</button>
    </nav>
 
 
    <Routes>
        <Route path="/" element={<Czlowiek tekst="TU CZŁOWIEK" />} />
        <Route path="/magenta" element ={<Nawka glowna="karzel" poboczna="olbrzym" dolna="okolicznik" kolor="black" tlo="magenta" />} />
        <Route path="/gray" element={<Nawka glowna="czarnuch" poboczna="masakrator" dolna="belzebub" kolor="blue" tlo="gray" />} />
        <Route path="/black" element={<Nawka glowna="kusiciel" poboczna="pajęczak" dolna="pryzma" kolor="gray" tlo="black" />} />
    </Routes>



 </div>
 )
}

export default App;
