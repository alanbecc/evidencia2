import '../Styles/CardR.css';
import { Link, useNavigate } from 'react-router-dom';

function CardR() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="cardR-container">
            <div className="cardR">
                <div className="input-icon-container">
                    <span className="icon">👤</span>
                    <input className='input-cardR' type="text" placeholder="Usuario" />
                </div>
                <div className="input-icon-container">
                    <span className="icon">🔑</span>
                    <input className='input-cardR' type="password" placeholder="Contraseña" />
                </div>
                <div className="input-icon-container">
                    <span className="icon">📝</span>
                    <input className='input-cardR' type="text" placeholder="Nombre" />
                </div>
                <div className="input-icon-container">
                    <span className="icon">📧</span>
                    <input className='input-cardR' type="email" placeholder="Correo" />
                </div>
                <div className="cardR-button">
                    <button className="buttonR" onClick={handleClick}>
                        Registrarse
                    </button>
                </div>
                <div className="enlaceR">
                    <Link to="/" className='enlaceR'>¿Ya Tienes Cuenta?</Link>
                </div>
            </div>
        </div>
    )
}

export default CardR;