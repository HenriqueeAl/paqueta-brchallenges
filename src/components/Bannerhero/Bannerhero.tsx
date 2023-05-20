import { Button } from '../Globais/Button.tsx/Button'
import './Bannerhero.scss'

export const Bannerhero = ()=>{
    return(
        <div className='bannerhero'>
            <div>
                <h1>Tênis Casual <strong>Masculino</strong></h1>
                <div style={{marginBottom: '20px'}}>
                    <span>A partir de</span>
                    <strong>R$ 79,99</strong>
                </div>
                <Button text='APROVEITE'></Button>
            </div>
        </div>
    )
}