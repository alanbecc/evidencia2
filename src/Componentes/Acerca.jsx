import '../Styles/Acerca.css';

function Acerca() {
    return (
        <div className="acerca-container">
            <div className="acerca-content">
                <h1>Acerca de Financial Resources</h1>
                <p className="acerca-descripcion">
                    Somos una empresa dedicada a potenciar la salud financiera de emprendedores, negocios y profesionales independientes. Nuestro objetivo es ayudarte a entender, proyectar y mejorar tus finanzas para que tomes las mejores decisiones.
                </p>
                <div className="acerca-secciones">
                    <div className="acerca-card">
                        <h2>🚀 Misión</h2>
                        <p>
                            Brindar asesoría y herramientas financieras personalizadas que permitan a nuestros clientes alcanzar estabilidad, crecimiento y éxito en sus proyectos.
                        </p>
                    </div>
                    <div className="acerca-card">
                        <h2>🌟 Visión</h2>
                        <p>
                            Ser referentes en soluciones financieras innovadoras y confiables, acompañando a quienes buscan transformar su futuro económico.
                        </p>
                    </div>
                    <div className="acerca-card">
                        <h2>💡 Valores</h2>
                        <ul>
                            <li>Compromiso y ética profesional</li>
                            <li>Innovación y mejora continua</li>
                            <li>Empatía y cercanía con el cliente</li>
                            <li>Transparencia y confianza</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acerca;