import { Link } from "react-router-dom";


const ListDropdown = () => {
    return (
        <>
            <li>
                <button className="dropdown-item"><Link to={"/category/vinos"}>Vinos</Link></button>
            </li>
            <li>
                <button className="dropdown-item"><Link to={"/category/destilados"}>Destilados</Link></button>
            </li>    
            <li>
                <button className="dropdown-item"><Link to={"/category/cervezas"}>Cervezas</Link></button>
            </li>
        </>
    );
}

export default ListDropdown;
