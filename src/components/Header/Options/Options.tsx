import './Options.scss'
import { useEffect, useState } from 'react';

interface Options {
    name: string;
    image: string;
}

export const Options = (props: Options)=>{
    const [qtd, setQtd] = useState(0)
    
    useEffect(()=>{
        props.name == 'Lista de desejos' ? setQtd(1) : 
        props.name == 'Sacola' ? setQtd(2) : setQtd(0)
    }, [])

    return (
        <div className='header_mid_options'>
            <div className='header_mid_options_image'>
                {qtd != 0 ? <div className='header_mid_options_qtd'>{qtd}</div> : <></>}
                <img src={props.image} alt={props.name} />
            </div>
            <span>{props.name}</span>
        </div>
    )
}