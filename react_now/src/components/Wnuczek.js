
import './Wnuczek.css';


export default function Wnuczek (props) {
   return (<div className="wnusio" style={{display: props.widocznosc}}>
            <div>{props.children}</div>
            </div>
             ) 
};
