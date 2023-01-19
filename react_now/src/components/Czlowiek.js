
import chlopaki from '../Assets/chlopaki.jpg';
import './Czlowiek.css';


function Czlowiek (props) {
    return ( 
    <div className='chlopaki flex-container'> 
        {props.tekst}
        <img className='img-fluid fotka' src={chlopaki} alt="obraz chlopakow"></img>
    </div> )
}

export default Czlowiek;
