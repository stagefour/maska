
import chlopaki from '../Assets/chlopaki.jpg';
import strzalka from '../Assets/arrowu.png';
import './Czlowiek.css';
import { useReducer } from 'react';



const wyborMuzyka = function (state, action) {
    if (action.type === 'perkusista') return ({ imie: 'Raddi', nazwisko: 'Orzeł', pozycja: 'perkusista', strzalka: '15vw' });
    if (action.type === 'gitarzysta') return ({ imie: 'Paweł', nazwisko: 'Banasiewicz', pozycja: 'gitarzysta', strzalka: '10vw' });
    if (action.type === 'basista') return ({ imie: 'Mike', nazwisko: 'Neugarten', pozycja: 'basista', strzalka: '21vw' });
    return state;
}


function Czlowiek (props) {
    const stanPoczatkowy = { imie: 'Pawel', nazwisko: 'Banasiewicz', pozycja: 'gitarzysta', strzalka: '10vw'  };
    const [state, dispatch] = useReducer(wyborMuzyka, stanPoczatkowy);



    return ( 
    <div className='chlopaki flex-container'> 
        {props.tekst}
        <img className='img-fluid fotka' src={chlopaki} alt="obraz chlopakow"></img>
        <img className='strzalka' style={{ left: state.strzalka }}  src={strzalka} alt="strzalka"></img>
        <h3>muzyk:</h3>
        <span>{state.imie} {state.nazwisko} -- {state.pozycja}</span>
        <div>
            <button onClick={() => dispatch({type: 'gitarzysta'})}>gitarzysta</button>
            <button onClick={() => dispatch({type: 'perkusista'})}>perkusista</button>
            <button onClick={() => dispatch({type: 'basista'})}>basista</button>
        </div>
    </div> )
}

export default Czlowiek;
