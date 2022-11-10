//Mettre ici la banner puis les éléments de la fiche logement du logement correspondant.
// Récupérer l'id du produit dans l'url et afficher le logement suivant l'id trouvé  

import '../styles/ficheLogement.css'
import { useParams } from 'react-router-dom'
import logements from '../logements.json'
import ImageSlider from '../Components/Slider'
import '../styles/ficheLogement.css'
import Collapsible from '../Components/Collapsible'
import Error from './Error'
import Tags from '../Components/Tags'
import Rating from '../Components/Rating'
import StarColored from '../Images/starColored.svg'
import StarGrey from '../Images/starGrey.svg'

function FicheLogement() {
    const { id } = useParams()
    let logement = logements.find(element => element.id === id)
    if (logement) {
        let slides = logement.pictures
        return (
            <div className='D_Fiche_logement'>


                <div><ImageSlider images={slides} /></div>
                <div className='description'>
                    <div className='title'>
                        <h1>{logement.title}<p>{logement.location}</p></h1>

                    </div>

                    <div className='notes'>
                        <div className='rating'>
                            <div className='stars'>
                                <Rating
                                    rating={5}
                                    starColor={StarGrey}
                                    classname={"starGrey"} />
                                <Rating
                                    rating={logement.rating}
                                    starColor={StarColored}
                                    classname={"starColored"} />
                            </div>
                            <div className='host'>
                                <p> {logement.host.name}</p>
                                <img src={logement.host.picture} alt={`photo de l'hôte: ${logement.host.name}`}>
                                </img>
                            </div>
                        </div>
                    </div>
                    <Tags
                        tags={logement.tags}
                        classname={"tags"} />
                    <div className='details'>
                        <Collapsible label="Description" >
                            <p>{logement.description}</p>
                        </Collapsible>
                        <Collapsible label="Équipements" >
                            <Tags
                                tags={logement.equipments}
                                classname={"equipements"} />
                        </Collapsible>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Error />
    }
}

export default FicheLogement