import './Waranek.css';


export default function Waranek (props) {

    let o = props.ok;

    if (o===true) {

    return (
        <div className='grubyKwadrat'>
            <b>"(C) VARAN 2023"</b>
        </div>
    );

    }

    else {


        return null;

    }
}