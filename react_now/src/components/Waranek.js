import './Waranek.css';


export default function Waranek (props) {


    return props.ok ? (
        <div className='grubyKwadrat'>
            <b>(C) VARAN 2023</b>
        </div>
    ) : ( null );

}