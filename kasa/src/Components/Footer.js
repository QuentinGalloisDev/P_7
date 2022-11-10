import Logo from './logo';
import image from '../Images/logo_kasa_footer.svg'

function Footer(params) {
    return (
        <footer>
            <Logo>
                <img src={image} alt='Le logo Kasa' />

            </Logo>
            <p>© 2020 Kasa. All rights reserved </p>
        </footer>
    )

}

export default Footer;