import './Button.scss'

interface Button {
    text: string;
}

export const Button = (props: Button)=>{
    return(
        <button className='button_global'>{props.text}</button>
    )
}