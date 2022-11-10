import RentItem from "./RentItem";
import logements from "../logements.json"

function Gallery() {
    return (
        <ul>
            {logements.map(({ id, cover, title }) =>
            (
                <div key={id} className="cards">
                    <RentItem
                        id={id}
                        cover={cover}
                        title={title} />
                </div>
            ))}
        </ul>
    )
}

export default Gallery