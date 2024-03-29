import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import { useCarritoContext } from '../../context/CarritoContext';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';


const Checkout = () => {
    const initialValues = { nombreCompleto: "", email: "", validateEmail: "", DNI: "", celular: "", direccion: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { totalPrice, carrito, emptyCart } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const checkCarritoVacio = [...carrito]
    checkCarritoVacio.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
            if (prodBDD.stock < prodCarrito.cant) {
                toast.error(`El producto ${prodBDD.nombreAMostrar} se encuentra fuera de stock`);
                emptyCart();
                navigate("/")
            }
        })
    })

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            consultarFormulario();
        }
    }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.nombreCompleto) {
            errors.nombreCompleto = "Completa tu nombre y apellido por favor";
        }

        if (!values.email) {
            errors.email = "Se requiere de un email valido";
        } else if (!regex.test(values.email)) {
            errors.email = "Ese no es un formato valido de email";
        }

        if (!values.validateEmail) {
            errors.validateEmail = "Repita el email que registro";
        } else if (!regex.test(values.validateEmail)) {
            errors.validateEmail = "Ese no es un formato valido de email";
        } else if (values.validateEmail !== values.email) {
            errors.validateEmail = "Los emails no coinciden";
        }

        if (!values.DNI) {
            errors.DNI = "Falta ingresar su DNI";
        }

        if (!values.celular) {
            errors.celular = "Falta ingresar su numero de celular";
        }

        if (!values.direccion) {
            errors.direccion = "Falta ingresar su direccion";
        }
        return errors;
    };



    const consultarFormulario = (e) => {
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else {
                    toast.error(`El producto ${prodBDD.nombreAMostrar} no tiene stock`);
                    emptyCart();
                    navigate("/")
                }
            })
        })

        delete cliente["validateEmail"];

        createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0, 10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
                emptyCart()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
        })

    }

    return (
        <div className="container espaciadoNav">
            <form onSubmit={handleSubmit} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombreCompleto" value={formValues.nombreCompleto} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.nombreCompleto}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={formValues.email} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="text" className="form-control" name="validateEmail" value={formValues.validateEmail} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.validateEmail}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="DNI" value={formValues.DNI} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.DNI}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="celular" value={formValues.celular} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.celular}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" value={formValues.direccion} onChange={handleChange} />
                    <p className='pCheckout'>{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>

        </div>
    );
}


export default Checkout;