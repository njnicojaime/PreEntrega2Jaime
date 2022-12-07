import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (        
            <div className="card col-md-2 cardItem">         
                    <div className="card-body cardBody">
                    <img src={`../images/${prod.img}`}className="card-img-top" alt="..." />
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">{prod.categoria}</p>
                        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                        <button className='btn btn-dark'><Link className="nav-link"  to={`/product/${prod.id}`}>Ver producto</Link></button>
                    </div>
            </div>
         
    );
}

export default Item;