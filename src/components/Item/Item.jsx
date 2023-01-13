import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Item = ({prod}) => {

    const {darkMode} = useDarkModeContext()
    return (        
            <div className= {`card col-md-2 cardItem ${darkMode ? 'text-white bg-black' : 'border-light'}`}>         
                    <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' }`}>
                    <img src={prod.img} className="card-img-top" alt="..." />
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">{prod.categoria}</p>
                        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                        <button className='btn btn-dark'><Link className="nav-link"  to={`/product/${prod.id}`}>Ver producto</Link></button>
                    </div>
            </div>
         
    );
}

export default Item;