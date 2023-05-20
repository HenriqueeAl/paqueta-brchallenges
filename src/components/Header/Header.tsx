import './Header.scss'
import { Options } from './Options/Options'

export const Header = ()=>{
    return(
        <header>
            <div className='header_top'>
                <div className='container'>
                    <div>
                        <span className='text_loja'>Loja de Calçados e Moda Online</span>
                    </div>
                    <div className='header_suport_loc'>
                        <div className='header_suport'><img src="./suport.svg" alt="suporte" /><span>Fale Conosco</span></div>
                        <div className='header_loc'><img src="./loc.svg" alt="localizacao" /><span>Encontrar uma loja física</span></div>
                    </div>
                </div>
            </div>
            <div className='header_mid'>
                <img src="./logo.svg" alt="paqueta-logo" />
                <div className='header_mid_boxs'>
                    <Options name='Lista de desejos' image='./heart.png'></Options>
                    <Options name='Sacola' image='./sacola.png'></Options>
                    <Options name='Entrar' image='./entrar.png'></Options>
                </div>
            </div>
            <div className='header_bottom'>
                <nav>
                    <ul>
                        <li><a href="#">Novidades</a></li>
                        <li><a href="#">Femininos</a></li>
                        <li><a href="#">Masculinos</a></li>
                        <li><a href="#">Paquetá Esportes</a></li>
                        <li><a href="#">Outlet</a></li>
                        <li><a href="#">Cashback</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}