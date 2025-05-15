import '../Styles/Button.css';
import { useNavigate } from 'react-router-dom';


function Button() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Home');
  };
  

  return (
    <button className="button"  onClick={handleClick}>
      Iniciar Sesión
    </button>
  );
} 

export default Button;