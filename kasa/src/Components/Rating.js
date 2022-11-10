
function Rating({ rating, starColor, classname }) {
    //On créer un tableau avec un nombre de clés suivant la valeur de rating et une valeur égale à l'index.
    const star = Array.apply(null, { length: rating }).map(Number.call, Number)
    return (
        <div className={classname}>
            {/* La méthode .toString renvoie une chaine de caractère représentant l'objet */}
            {star.map(star => <img src={starColor} key={star.toString()} alt="Une étoile"></img>)}
        </div>
    )
}

export default Rating