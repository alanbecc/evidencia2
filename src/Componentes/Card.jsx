import '../Styles/Card.css';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

function Card() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Home');
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-head">
                    <img src="src/assets/IMG/IconoCipal3.png" alt="Logo" />
                </div>
                {/* Input de usuario con icono */}
                <div className="input-icon-container">
                    <input
                        className="input-card"
                        type="text"
                        placeholder="Usuario"
                    />
                    <span className="icon">👤</span>
                </div>
                {/* Input de contraseña con icono */}
                <div className="input-icon-container">
                    <input
                        className="input-card"
                        type="password"
                        placeholder="Contraseña"
                    />
                    <span className="icon">🔑</span>
                </div>
                <div className="card-button" onClick={handleClick}>
                    <Button />
                </div>
                <div className="enlace">
                    <Link to="/Registro" className="enlace">¿No Tienes Cuenta?</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;