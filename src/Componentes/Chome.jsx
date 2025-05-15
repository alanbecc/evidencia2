import '../Styles/Chome.css';
import { useState } from 'react';
import Servicios from './Servcios';
import Contacto from './Contacto';
import Acerca from './Acerca';

function Chome() {
    const [seccion, setSeccion] = useState('home');

    return (
        <div className="chome-container">
            {seccion === 'home' && (
                <>
                    <div className="banner">
                        <img src="src/assets/IMG/IconoCipal3.png" alt="Banner" className="banner-img" />
                        <div className="banner-text">
                            <h2>👋 ¡Bienvenido a Financial Resources!</h2>
                            <p className="banner-subtitle">
                                Transforma tus finanzas.<br />
                                Entiende tus números.<br />
                                Proyecta tu crecimiento.
                            </p>
                            <ul className="banner-list">
                                <li>🔍 Analizamos tu flujo de caja.</li>
                                <li>📈 Identificamos oportunidades y fugas de dinero.</li>
                                <li>🎯 Te guiamos con un plan financiero adaptado a tu actividad.</li>
                            </ul>
                            <p className="banner-final">
                                Cuando entiendes tus finanzas, tomas mejores decisiones.
                            </p>
                        </div>
                    </div>
                    <div className="home-sections">
                        <div className="section-card" onClick={() => setSeccion('servicios')}>
                            <span className="section-icon">🛠️</span>
                            <span className="section-title">Servicios</span>
                        </div>
                        <div className="section-card" onClick={() => setSeccion('contacto')}>
                            <span className="section-icon">📞</span>
                            <span className="section-title">Contacto</span>
                        </div>
                        <div className="section-card" onClick={() => setSeccion('acerca')}>
                            <span className="section-icon">ℹ️</span>
                            <span className="section-title">Acerca de</span>
                        </div>
                    </div>
                </>
            )}
            {seccion === 'servicios' && <Servicios />}
            {seccion === 'contacto' && <Contacto />}
            {seccion === 'acerca' && <Acerca />}
        </div>
    );
}

export default Chome;