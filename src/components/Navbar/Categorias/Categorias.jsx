import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Categorias = () => {
    return (
            
        <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to={"/"}>Home</Link>
                
            </li>                        
                <Dropdown/>           
                            
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Contacto</Link>
            </li>                
        </ul>
    );
}

export default Categorias;