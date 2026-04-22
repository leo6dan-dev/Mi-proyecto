export default function App() {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7fb",
    color: "#1f2937",
    minHeight: "100vh",
    margin: 0,
  };

  const headerStyle = {
    backgroundColor: "#0f3d75",
    color: "white",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    fontSize: "14px",
  };

  const heroStyle = {
    background: "linear-gradient(135deg, #0f3d75, #1d6fd1)",
    color: "white",
    padding: "80px 40px",
    textAlign: "center",
  };

  const sectionStyle = {
    padding: "50px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "25px",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  };

  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#0f3d75",
    border: "none",
    padding: "12px 22px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  };

  const contactBoxStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div>
          <h2 style={{ margin: 0 }}>Tu Institución</h2>
          <small>Propuesta demo para cliente</small>
        </div>

        <nav style={navStyle}>
          <span>Inicio</span>
          <span>Programas</span>
          <span>Nosotros</span>
          <span>Noticias</span>
          <span>Contacto</span>
        </nav>
      </header>

      <section style={heroStyle}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Educación que impulsa tu futuro
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
          Esta es una propuesta sencilla inspirada en una página universitaria,
          pensada para mostrarle al cliente cómo podría verse su sitio web.
        </p>
        <button style={buttonStyle}>Solicitar información</button>
      </section>

      <section style={sectionStyle}>
        <h2>Oferta académica</h2>
        <p>
          Aquí puedes mostrar las principales categorías o servicios de la
          institución.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Pregrados</h3>
            <p>Carreras con enfoque práctico y proyección profesional.</p>
          </div>

          <div style={cardStyle}>
            <h3>Posgrados</h3>
            <p>Especializaciones y maestrías para seguir creciendo.</p>
          </div>

          <div style={cardStyle}>
            <h3>Virtual</h3>
            <p>Programas flexibles para estudiar desde cualquier lugar.</p>
          </div>

          <div style={cardStyle}>
            <h3>Educación continua</h3>
            <p>Cursos y diplomados para fortalecer habilidades.</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>¿Por qué elegirnos?</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Calidad académica</h3>
            <p>Formación enfocada en el desarrollo profesional real.</p>
          </div>

          <div style={cardStyle}>
            <h3>Financiación</h3>
            <p>Opciones de pago y beneficios para nuevos estudiantes.</p>
          </div>

          <div style={cardStyle}>
            <h3>Acompañamiento</h3>
            <p>Asesoría durante el proceso de admisión y permanencia.</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Noticias y eventos</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Nueva convocatoria</h3>
            <p>Conoce la nueva oferta académica disponible para este periodo.</p>
          </div>

          <div style={cardStyle}>
            <h3>Jornada para aspirantes</h3>
            <p>Espacio para orientar a estudiantes y familias interesadas.</p>
          </div>

          <div style={cardStyle}>
            <h3>Actividades institucionales</h3>
            <p>Eventos pensados para fortalecer la vida universitaria.</p>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, paddingBottom: "80px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Contáctanos</h2>

        <div style={contactBoxStyle}>
          <input type="text" placeholder="Nombre completo" style={inputStyle} />
          <input type="email" placeholder="Correo electrónico" style={inputStyle} />
          <input type="text" placeholder="Programa de interés" style={inputStyle} />
          <button
            style={{
              width: "100%",
              backgroundColor: "#0f3d75",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Enviar solicitud
          </button>
        </div>
      </section>
    </div>
  );
}