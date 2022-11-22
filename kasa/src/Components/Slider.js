import { useState } from "react"
import arrowRight from '../Images/arrowRight.svg'
import arrowLeft from '../Images/arrowLeft.svg'


function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    //L'image se met à jour à l'appel des fonctions.
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div>
            <div className="slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                {/* Si la longueur du tableau des images est plus long que 1 alors on affiche les flèches */}
                {images.length > 1 ? (
                    <div className="arrow">
                        <div onClick={goToPrevious} className="arrow-visible" > <img src={arrowLeft} alt="Fléche vers la photo précédente" ></img></div>
                        <div onClick={goToNext} className="arrow-visible" > <img src={arrowRight} alt="Fléche vers la photo suivante" ></img></div>
                    </div>
                )

                    : false}

            </div>
        </div>
    )
}

export default ImageSlider