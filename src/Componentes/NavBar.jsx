import '../Styles/NavBar.css';
import { useState } from 'react';
import Chome from './Chome';
import Servicios from './Servcios';
import Contacto from './Contacto';
import Acerca from './Acerca';
import { useNavigate } from 'react-router-dom';

function NavBar() {



    const [componenteActual, setComponenteActual] = useState('home');

    const mostrarServicios = () => {
        setComponenteActual('servicios');
    };

    const mostrarHome = () => {
        setComponenteActual('home');
    };
    const mostrarContacto = () => {
        setComponenteActual('contacto');
    }
    const mostrarAcerca = () => {
        setComponenteActual('acerca');
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };


    return (
        <div className='navbar-container'>
            <nav className="navbar-home">
                <div className="navbar">
                    <div className="navbar-avatar">

                            <img src="src/assets/IMG/AvatarUser2.png"  alt="Logo" onClick={mostrarHome} />
                        

                        
                    </div>
                    <div className='container-buttons'>
                        <div>
                            <button className="button-navbar" onClick={mostrarServicios}>
                                Servicios
                            </button>
                        </div>
                        <div>
                            <button className="button-navbar" onClick={mostrarContacto}>
                                Contacto
                            </button>
                        </div>
                        <div>
                            <button className="button-navbar" onClick={mostrarAcerca}>
                                Acerda De
                            </button>
                        </div>
                        <div>
                            <button className="button-navbar" onClick={handleClick}>
                                Cerrar Sesion
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {componenteActual === 'home' && <Chome />}
                {componenteActual === 'servicios' && <Servicios />}
                {componenteActual === 'contacto' && <Contacto />}
                {componenteActual === 'acerca' && <Acerca />}
            </div>
        </div>
    )
}

export default NavBar;