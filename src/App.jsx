export default function App() {
  const diplomados = [
    {
      titulo: "Diplomado en Marketing Digital",
      duracion: "4 meses",
      modalidad: "Virtual",
      descripcion: "Aprende estrategias digitales, pauta, redes sociales y analítica para negocios actuales.",
    },
    {
      titulo: "Diplomado en Gestión de Proyectos",
      duracion: "5 meses",
      modalidad: "Presencial",
      descripcion: "Fortalece habilidades de planeación, seguimiento y liderazgo de proyectos.",
    },
    {
      titulo: "Diplomado en Desarrollo Web",
      duracion: "6 meses",
      modalidad: "Virtual",
      descripcion: "Conoce herramientas modernas para crear sitios web funcionales y atractivos.",
    },
  ];

  const cursos = [
    {
      titulo: "Excel Básico",
      duracion: "6 semanas",
      modalidad: "Virtual",
    },
    {
      titulo: "Diseño en Canva",
      duracion: "4 semanas",
      modalidad: "Virtual",
    },
    {
      titulo: "Inglés Conversacional",
      duracion: "8 semanas",
      modalidad: "Presencial",
    },
    {
      titulo: "Atención al Cliente",
      duracion: "5 semanas",
      modalidad: "Virtual",
    },
  ];

  const noticias = [
    {
      titulo: "Inscripciones abiertas para el nuevo periodo académico",
      fecha: "Abril 2026",
      resumen: "Ya están disponibles nuevos diplomados y cursos cortos para estudiantes y profesionales.",
    },
    {
      titulo: "Jornada informativa para aspirantes",
      fecha: "Mayo 2026",
      resumen: "Se realizará una sesión de orientación sobre modalidades, costos y beneficios.",
    },
    {
      titulo: "Convenios y nuevas oportunidades de formación",
      fecha: "Mayo 2026",
      resumen: "La institución amplía su oferta con nuevos aliados y programas de actualización.",
    },
  ];

  const estilos = {
    pagina: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f7fb",
      color: "#1f2937",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#0f3d75",
      color: "white",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    nav: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
      fontSize: "14px",
    },
    hero: {
      background: "linear-gradient(135deg, #0f3d75, #1d6fd1)",
      color: "white",
      padding: "80px 40px",
      textAlign: "center",
    },
    botonClaro: {
      backgroundColor: "white",
      color: "#0f3d75",
      border: "none",
      padding: "12px 22px",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "20px",
    },
    seccion: {
  width: "100%",
  padding: "56px 40px",
},
    gridTres: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    gridCuatro: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    tarjeta: {
      backgroundColor: "white",
      borderRadius: "14px",
      padding: "24px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    },
    etiqueta: {
      display: "inline-block",
      backgroundColor: "#e8f1ff",
      color: "#0f3d75",
      padding: "6px 10px",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "14px",
    },
    cta: {
      backgroundColor: "#0f3d75",
      color: "white",
      padding: "50px 40px",
      textAlign: "center",
    },
    footer: {
      backgroundColor: "#0b1f3a",
      color: "#dbe4f0",
      padding: "24px 40px",
      textAlign: "center",
      fontSize: "14px",
    },
  };

  return (
    <div style={estilos.pagina}>
      <header style={estilos.header}>
        <div>
          <h2 style={{ margin: 0 }}>Centro de Formación</h2>
          <small>Diplomados, cursos cortos y noticias</small>
        </div>

        <nav style={estilos.nav}>
          <a href="#inicio" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
          <a href="#diplomados" style={{ color: "white", textDecoration: "none" }}>Diplomados</a>
          <a href="#cursos" style={{ color: "white", textDecoration: "none" }}>Cursos cortos</a>
          <a href="#noticias" style={{ color: "white", textDecoration: "none" }}>Noticias</a>
          <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
        </nav>
      </header>

      <section id="inicio" style={estilos.hero}>
        <h1 style={{ fontSize: "46px", marginBottom: "18px" }}>
          Encuentra tu próximo diplomado o curso
        </h1>
        <p style={{ maxWidth: "820px", margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
          Esta propuesta está pensada como un portal sencillo donde los estudiantes puedan consultar
          diplomados disponibles, cursos cortos y noticias importantes de la institución.
        </p>
        <button style={estilos.botonClaro}>Ver oferta académica</button>
      </section>

      <section style={estilos.seccion}>
        <h2 style={{ marginTop: 0 }}>Accesos rápidos</h2>
        <div style={estilos.gridTres}>
          <div style={estilos.tarjeta}>
            <span style={estilos.etiqueta}>Diplomados</span>
            <h3>Programas de formación más completos</h3>
            <p>Espacio para mostrar diplomados con duración, modalidad y descripción general.</p>
          </div>

          <div style={estilos.tarjeta}>
            <span style={estilos.etiqueta}>Cursos cortos</span>
            <h3>Capacitaciones rápidas y prácticas</h3>
            <p>Sección ideal para estudiantes que buscan formación puntual en menos tiempo.</p>
          </div>

          <div style={estilos.tarjeta}>
            <span style={estilos.etiqueta}>Noticias</span>
            <h3>Novedades y anuncios institucionales</h3>
            <p>Aquí se publican convocatorias, eventos, fechas de inscripción y comunicados.</p>
          </div>
        </div>
      </section>

      <section id="diplomados" style={estilos.seccion}>
        <h2 style={{ marginTop: 0 }}>Diplomados disponibles</h2>
        <p>Aquí puedes mostrar los diplomados principales de forma clara para que el estudiante compare opciones.</p>

        <div style={estilos.gridTres}>
          {diplomados.map((item) => (
            <div key={item.titulo} style={estilos.tarjeta}>
              <span style={estilos.etiqueta}>{item.modalidad}</span>
              <h3>{item.titulo}</h3>
              <p><strong>Duración:</strong> {item.duracion}</p>
              <p style={{ lineHeight: 1.6 }}>{item.descripcion}</p>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#0f3d75",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="cursos" style={estilos.seccion}>
        <h2 style={{ marginTop: 0 }}>Cursos cortos</h2>
        <p>Una sección separada para cursos de menor duración, con formato simple y fácil de recorrer.</p>

        <div style={estilos.gridCuatro}>
          {cursos.map((curso) => (
            <div key={curso.titulo} style={estilos.tarjeta}>
              <span style={estilos.etiqueta}>{curso.modalidad}</span>
              <h3>{curso.titulo}</h3>
              <p><strong>Duración:</strong> {curso.duracion}</p>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "transparent",
                  color: "#0f3d75",
                  border: "1px solid #0f3d75",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="noticias" style={estilos.seccion}>
        <h2 style={{ marginTop: 0 }}>Noticias y novedades</h2>
        <p>Este apartado funciona como blog o cartelera para mantener informados a los estudiantes.</p>

        <div style={estilos.gridTres}>
          {noticias.map((noticia) => (
            <div key={noticia.titulo} style={estilos.tarjeta}>
              <span style={estilos.etiqueta}>{noticia.fecha}</span>
              <h3>{noticia.titulo}</h3>
              <p style={{ lineHeight: 1.6 }}>{noticia.resumen}</p>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "transparent",
                  color: "#0f3d75",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Leer noticia
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={estilos.cta}>
        <h2 style={{ marginTop: 0 }}>¿Necesitas más información?</h2>
        <p style={{ maxWidth: "720px", margin: "0 auto", lineHeight: 1.6 }}>
          Puedes agregar aquí un botón a WhatsApp, un formulario o los canales oficiales de atención.
        </p>
        <button style={estilos.botonClaro}>Contactar asesor</button>
      </section>

      <footer style={estilos.footer}>
        © 2026 Centro de Formación. Demo inicial para presentación con cliente.
      </footer>
    </div>
  );
}
