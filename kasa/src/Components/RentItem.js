import { Link } from 'react-router-dom'
// Pour chaque élément rentitem on le place dans un link qui redirige vers la route ficheLogement en y important l'id de l'élément cliqué dans l'url.
function RentItem({ title, cover, id }) {

    return (
        // Supression du underline auto des link dans le style.
        <Link to={`/FicheLogement/${id}`} style={{ textDecoration: 'none' }}>
            <div className="rent_item" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${cover})` }}
                alt={`Photo de couverture de ${title}`}  >

                <span className="title">{title}</span>
            </div >
        </Link>
    )

}

export default RentItem