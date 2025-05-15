import '../Styles/Contacto.css';



function Contacto() {
    return (
        <div className="contacto-container">
            <div className="contacto-header">
                <h2>Contáctanos</h2>
                <p>¿Tienes dudas o necesitas asesoría? Completa el formulario y te responderemos pronto.</p>
            </div>
            <div className="contacto-mapa">
                <iframe
                    title="Ubicación de ejemplo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.870555251993!2d-74.08175368467694!3d4.609710343449994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a6c6b3b1b1%3A0x2c2b2b2b2b2b2b2b!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1684099999999!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "14px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <form className="contacto-form">
                <div className="input-icon-container">
                    <span className="icon">👤</span>
                    <input type="text" placeholder="Nombre" className="contacto-input" required />
                </div>
                <div className="input-icon-container">
                    <span className="icon">📧</span>
                    <input type="email" placeholder="Email" className="contacto-input" required />
                </div>
                <div className="input-icon-container">
                    <span className="icon">📞</span>
                    <input type="tel" placeholder="Teléfono" className="contacto-input" required />

                </div>
                <button type="submit" className="contacto-btn">Enviar</button>

                <div className="contacto-mensaje-info">
                    <strong>Gracias Por Preferirnos</strong>
                    <p>
                        Completa la información en los campos del formulario, y pronto nos comunicaremos contigo
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Contacto;