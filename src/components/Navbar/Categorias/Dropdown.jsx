import ListDropdown from './ListDropdown';
import { DarkModeProvider } from '../../../context/DarkModeContext';

const Dropdown = () => {
    return (
        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
                <ListDropdown/>
            </ul>
        </li>           
        
    );
}

export default Dropdown;
