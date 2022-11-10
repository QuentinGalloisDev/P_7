import { useState } from "react"
import arrowRight from '../Images/arrowRight.svg'
import arrowLeft from '../Images/arrowLeft.svg'

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
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
                <div onClick={goToPrevious} className="arrow"> <img src={arrowLeft} alt="Fléche vers la photo précédente" ></img></div>
                <div onClick={goToNext} className="arrow"> <img src={arrowRight} alt="Fléche vers la photo suivante" ></img></div>
            </div>
        </div>
    )
}

export default ImageSlider