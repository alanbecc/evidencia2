import '../Styles/Servicios.css';

function Servicios() {
    return (
        <div className="servicios-container">
            <div className="servicios-header">
                <h2>Servicios Financieros Personalizados</h2>
                <p>
                    Te ayudamos a entender, visualizar y mejorar la salud financiera de tu negocio o actividad profesional.
                </p>
            </div>
            <div className="servicios-cards">
                <div className="servicio-card">
                    <div className="servicio-icon">🧩</div>
                    <h3>Diagnóstico Financiero Personalizado</h3>
                    <p className="servicio-que">¿Qué hacemos?</p>
                    <p>
                        Analizamos tus flujos de efectivo (entradas y salidas) para identificar desequilibrios financieros, fugas de dinero o áreas de mejora.
                    </p>
                    <p className="servicio-paraque">¿Para qué te sirve?</p>
                    <ul>
                        <li>Detectar gastos innecesarios o improductivos.</li>
                        <li>Saber con claridad cuánto ganas realmente.</li>
                        <li>Tomar decisiones con base en datos, no en suposiciones.</li>
                    </ul>
                    <p className="servicio-ideal">
                        <strong>Ideal para:</strong> emprendedores, negocios en crecimiento, autónomos que no saben con precisión qué tan rentable es su actividad.
                    </p>
                </div>
                <div className="servicio-card">
                    <div className="servicio-icon">📊</div>
                    <h3>Visualización de Flujo de Caja y Reportes Interactivos</h3>
                    <p className="servicio-que">¿Qué hacemos?</p>
                    <p>
                        Creamos reportes visuales y dinámicos que muestran cómo se mueve tu dinero mes a mes: ingresos, egresos, balances, puntos críticos y zonas de oportunidad.
                    </p>
                    <p className="servicio-paraque">¿Para qué te sirve?</p>
                    <ul>
                        <li>Ver gráficamente en qué momentos del mes o del año se concentra tu liquidez.</li>
                        <li>Prepararte para meses de baja facturación.</li>
                        <li>Tomar decisiones estratégicas a corto y largo plazo.</li>
                    </ul>
                    <p className="servicio-incluye">
                        <strong>Incluye:</strong> dashboards personalizados, alertas automáticas y recomendaciones ajustadas a tu actividad económica.
                    </p>
                </div>
                <div className="servicio-card">
                    <div className="servicio-icon">🎯</div>
                    <h3>Asesoría Financiera con Enfoque Estratégico</h3>
                    <p className="servicio-que">¿Qué hacemos?</p>
                    <p>
                        No solo analizamos tus números, te acompañamos a definir objetivos financieros claros: desde mejorar tu rentabilidad, hasta prepararte para expandirte o invertir.
                    </p>
                    <p className="servicio-paraque">¿Para qué te sirve?</p>
                    <ul>
                        <li>Tener claridad sobre cuánto debes ahorrar, reinvertir o reducir.</li>
                        <li>Diseñar una ruta financiera acorde a tus metas.</li>
                        <li>Entender cómo impactan tus decisiones diarias en la salud financiera general.</li>
                    </ul>
                    <p className="servicio-diferencia">
                        <strong>En qué nos diferenciamos:</strong> no ofrecemos fórmulas genéricas, sino un acompañamiento ajustado al contexto real de tu negocio.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Servicios;