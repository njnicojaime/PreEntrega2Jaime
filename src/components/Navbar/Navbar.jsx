import BotonDarkMode from './BotonDarkMode/BotonDarkMode'
import Categorias from "./Categorias/Categorias";
import Cartwidget from "../CartWidget/CartWidget";

//Context

import { useDarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {

    const {darkMode} = useDarkModeContext()
    return (                
        <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-black' : 'bg-dark'}`}>        
            <div className="container-fluid">                   
            <img src="images/navnvo.png" alt=""/>            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse">                
                <Categorias/>                              
            </div>
                <Cartwidget/>  
                <BotonDarkMode/>                            
            </div>            
        </nav>
    );
}

export default Navbar;