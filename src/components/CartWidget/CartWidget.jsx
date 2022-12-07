import { Link } from "react-router-dom";

const Cartwidget = () => {
    return (
        <ul className="navbar-nav me-auto">
             <Link to={'/cart'} className="nav-link"><li className="nav-link">                 
                <button className="btnCarrito fas fa-shopping-cart"><span id="contadorCarrito">0</span></button>
            </li> 
            </Link>
        </ul>
       
        
    );
}

export default Cartwidget;
