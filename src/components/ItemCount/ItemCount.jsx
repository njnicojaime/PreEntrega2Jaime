import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
const ItemCount = ({inicial, stock, onAdd}) => {

    const {darkMode} = useDarkModeContext()

    const [contador, setContador] = useState(inicial);  
    
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarAlCarrito = () => onAdd(contador)
    
    return (
        <div>
            <button onClick={restar} className={`btn ${darkMode ? 'btn-secondary' : 'btn-light'}`}><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={sumar} className={`btn ${darkMode ? 'btn-secondary' : 'btn-light'}`}><i className="fas fa-plus"></i></button>
            <button className={"btn btn-dark"} onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;