import Categorias from "./Categorias/Categorias";
import Cartwidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (                
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">            
            <div className="container-fluid">                   
            <img src="images/logonav.png" alt=""/>            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse">                
                <Categorias/>                              
            </div>
                <Cartwidget/>                              
            </div>            
        </nav>
    );
}

export default Navbar;