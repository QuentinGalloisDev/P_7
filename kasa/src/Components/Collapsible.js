import { useState } from "react";
import arrow from '../Images/arrowRight.svg'
// En utilisant usestate et la fonction fléchée toggle, la class de la div change et son contenu apparait grâ à une animation css. 
const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div className="collapseComponent">
            <button onClick={toggle}>{props.label} <img src={arrow} alt="Une flèche" className={open ? "arrow-show" : "arrow-parent"}></img></button>
            <div className={open ? "content-show" : "content-parent"}>
                <div className='content'> {props.children} </div>
            </div>
        </div>
    )
}
export default Collapsible;