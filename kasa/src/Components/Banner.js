// Mettre ici le logo Kasa , et les liens accueil et a-propos

import { Link } from 'react-router-dom'
import Logo from './logo';
import image from '../Images/logo_kasa.svg'


function Banner() {
    return (
        <header>
            <Logo>
                <img src={image} alt='Le logo Kasa' className='LOGO' />

            </Logo>
            <nav >
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}
export default Banner;

