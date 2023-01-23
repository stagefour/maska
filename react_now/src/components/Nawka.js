
import './Nawka.css';
import waran from '../Assets/waran.png';
import Wnuczek from './Wnuczek';
import { useState } from 'react'; 
import logout from '../Assets/logout.png';


function Nawka() {
    const [tlo, ustalTlo] = useState ('black');
    const [tloPierwotne, ustalTloPierwotne] = useState ('black');
    const [cechy, zmienCechy] = useState (["...", "...","..."]);
    const [wynik, zmienWynik] = useState ("1");
    const [komentarz, zmienKomentarz] = useState ("");
    const [widzeWnusia, ustalWidocznoscWnusia] = useState ("none");



    let komentuj = function (e) {
        e.preventDefault();
        zmienKomentarz (e.target.value);
    }

    let zmianaTla = function (e) {
        ustalTloPierwotne (e.target.value);
    }


    let clickHandler = function (e) { 
        e.preventDefault();
        let przechowalniaCech = [...cechy];

        if (komentarz !== "") {
        przechowalniaCech[wynik-1] = komentarz;
        zmienCechy (przechowalniaCech);
        zmienKomentarz ("") } else { ustalWidocznoscWnusia("block") };


        ustalTlo (tloPierwotne);
        }; 

    let czyscDane = function () {
        let czystaTablica = ['', '', ''];
        zmienCechy (czystaTablica);
    };



    return (
        <><div className='main-nav'
            style={{ backgroundColor: tlo }}>
        <button className='czyszczenie' onClick={czyscDane}><img src={logout} alt="wyczysc to"></img></button>
                <ol>
                    <li>{cechy[0]}</li>              
                    <li>{cechy[1]}</li>
                    <li>{cechy[2]}</li>
        { // cechy.map((item, index) => <li key={index}>{item}</li>);
        }
                </ol>

        </div>
        <div className='formularz'>
        <form>
            <fieldset>
                <h2>zaawansowany panel sterowania</h2>
                <div className='field'>
                    <label>Które pole zmieniamy: {wynik} *</label>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        value={wynik}
                        onChange={e => zmienWynik(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Wpisz tekst: </label>
                    <input
                        type="text"
                        value={komentarz}
                        onChange={komentuj}
                    />
                </div>
                <div className='field'>
                    <label>Jaki kolor tła?</label>
                    <input type="radio" id="gray" name={'tloPierwotne'} value={'gray'} onChange={zmianaTla}
                    />
                    <label>szary</label>
                    <input type="radio" id="black" name={'tloPierwotne'} value={'black'} onChange={zmianaTla}
                     />
                    <label>czarny</label>
                    <input type="radio" id="magenta" name={'tloPierwotne'} value={'magenta'} onChange={zmianaTla}
                    />
                    <label>purpurowy</label>
                </div>              
 
                
                <button type="submit" disabled={widzeWnusia==="block"} onClick={clickHandler} className='guzik'><img src={waran} alt='waran'></img> POTWIERDŹ</button>                                
            </fieldset> 
        </form>
        <Wnuczek widocznosc={widzeWnusia}>
                <h4>PUSTY KOMENTARZ</h4>
                <p>Wpisałeś pan pusty tekst</p>
                <button className='guzik' onClick={() => ustalWidocznoscWnusia("none")}>ROZUMIEM</button>
        </Wnuczek>   
        </div>
        </>
    )
};

export default Nawka;
